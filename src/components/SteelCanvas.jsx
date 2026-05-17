import { useEffect, useRef } from 'react';

export default function SteelCanvas() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    let animId;
    let W, H;
    let mouse = { x: -999, y: -999, px: -999, py: -999, inside: false };
    let trail  = [];  // molten metal cursor trail
    let sparks = [];  // click-burst sparks
    let embers = [];  // ambient forge embers

    function resize() {
      W = canvas.width  = window.innerWidth;
      H = canvas.height = window.innerHeight;
    }
    resize();
    window.addEventListener('resize', resize);

    // ── Ambient ember (floats upward from furnace) ─────────────────────────
    function spawnEmber() {
      embers.push({
        x:    Math.random() * W,
        y:    H + 5,
        vx:   (Math.random() - 0.5) * 0.7,
        vy:   -(0.6 + Math.random() * 1.8),
        size: 0.8 + Math.random() * 1.8,
        life: 0.9 + Math.random() * 0.1,
        hue:  10 + Math.random() * 35,
        waveOffset: Math.random() * Math.PI * 2,
      });
    }

    // ── Click sparks ────────────────────────────────────────────────────────
    function burst(x, y) {
      const count = 70;
      for (let i = 0; i < count; i++) {
        const angle = Math.random() * Math.PI * 2;
        const spd   = 2 + Math.random() * 12;
        sparks.push({
          x, y,
          vx:     Math.cos(angle) * spd,
          vy:     Math.sin(angle) * spd - 3,
          life:   1,
          decay:  0.011 + Math.random() * 0.02,
          size:   1 + Math.random() * 2.5,
          hue:    Math.random() > 0.2 ? 15 + Math.random() * 35 : 50 + Math.random() * 20,
          bounce: 0.25 + Math.random() * 0.35,
        });
      }
    }

    // ── Mouse events ────────────────────────────────────────────────────────
    const onMove = e => {
      mouse.px = mouse.x; mouse.py = mouse.y;
      mouse.x  = e.clientX; mouse.y = e.clientY;
      mouse.inside = true;

      // Interpolate trail along mouse path
      const dx   = mouse.x - mouse.px;
      const dy   = mouse.y - mouse.py;
      const dist = Math.hypot(dx, dy);
      const steps = Math.max(1, Math.floor(dist / 5));
      for (let i = 0; i < steps; i++) {
        const t = i / steps;
        trail.push({
          x:    mouse.px + dx * t + (Math.random() - 0.5) * 4,
          y:    mouse.py + dy * t + (Math.random() - 0.5) * 4,
          life: 1,
          size: 7 + Math.random() * 5,
        });
      }
    };
    const onLeave = () => { mouse.inside = false; };
    const onClick = e => burst(e.clientX, e.clientY);
    const onTouch = e => {
      const t = e.touches[0];
      onMove({ clientX: t.clientX, clientY: t.clientY });
    };
    const onTouchStart = e => burst(e.touches[0].clientX, e.touches[0].clientY);

    canvas.addEventListener('mousemove',  onMove);
    canvas.addEventListener('mouseleave', onLeave);
    canvas.addEventListener('click',      onClick);
    canvas.addEventListener('touchmove',  onTouch,      { passive: true });
    canvas.addEventListener('touchstart', onTouchStart, { passive: true });

    // ── Trail colour: white-hot → amber → orange → deep red ─────────────────
    function trailRGB(life) {
      if (life > 0.75) {
        const t = (life - 0.75) / 0.25;
        return [255, Math.round(220 + t * 35), Math.round(t * 220)];
      } else if (life > 0.45) {
        const t = (life - 0.45) / 0.30;
        return [255, Math.round(t * 220), 0];
      } else {
        const t = life / 0.45;
        return [Math.round(80 + t * 175), 0, 0];
      }
    }

    let frame = 0;

    // ── Draw loop ─────────────────────────────────────────────────────────────
    function tick() {
      frame++;
      ctx.clearRect(0, 0, W, H);

      // 1. Deep forge-black background
      ctx.fillStyle = '#030405';
      ctx.fillRect(0, 0, W, H);

      // 2. Furnace glow at the bottom (pulses slowly)
      const pulse = 0.13 + Math.sin(frame / 90) * 0.04 + Math.cos(frame / 60) * 0.025;
      const fg = ctx.createRadialGradient(W / 2, H + 80, 0, W / 2, H + 80, H * 0.9);
      fg.addColorStop(0,   `rgba(255,70,0,${pulse})`);
      fg.addColorStop(0.4, `rgba(200,35,0,${pulse * 0.5})`);
      fg.addColorStop(1,   'rgba(0,0,0,0)');
      ctx.fillStyle = fg;
      ctx.fillRect(0, 0, W, H);

      // 3. Side vignette glow (like furnace walls)
      ['left', 'right'].forEach(side => {
        const x0 = side === 'left' ? 0 : W;
        const x1 = side === 'left' ? W * 0.4 : W * 0.6;
        const vg  = ctx.createLinearGradient(x0, 0, x1, 0);
        vg.addColorStop(0, `rgba(180,40,0,${pulse * 0.35})`);
        vg.addColorStop(1, 'rgba(0,0,0,0)');
        ctx.fillStyle = vg;
        ctx.fillRect(0, 0, W, H);
      });

      // 4. Spawn ambient embers every 2 frames
      if (frame % 2 === 0) spawnEmber();

      // 5. Draw molten trail
      trail = trail.filter(p => p.life > 0);
      trail.forEach(p => {
        p.life -= 0.022;
        const [r, g, b] = trailRGB(p.life);
        const radius = p.size * (0.3 + p.life * 0.7);

        // wide glow halo
        const grd = ctx.createRadialGradient(p.x, p.y, 0, p.x, p.y, radius * 4);
        grd.addColorStop(0,   `rgba(${r},${g},${b},${p.life * 0.5})`);
        grd.addColorStop(0.4, `rgba(${r},${g},${b},${p.life * 0.15})`);
        grd.addColorStop(1,   `rgba(${r},${g},${b},0)`);
        ctx.fillStyle = grd;
        ctx.beginPath();
        ctx.arc(p.x, p.y, radius * 4, 0, Math.PI * 2);
        ctx.fill();

        // bright core
        ctx.fillStyle = `rgba(${r},${g},${b},${Math.min(1, p.life + 0.2)})`;
        ctx.beginPath();
        ctx.arc(p.x, p.y, radius, 0, Math.PI * 2);
        ctx.fill();
      });

      // 6. Draw sparks
      sparks = sparks.filter(s => s.life > 0.005);
      sparks.forEach(s => {
        s.x  += s.vx;
        s.y  += s.vy;
        s.vy += 0.22; // gravity
        s.vx *= 0.985;
        s.life -= s.decay;
        if (s.life <= 0) return;

        // bounce off floor
        if (s.y > H - 10 && s.vy > 0) {
          s.vy  *= -s.bounce;
          s.vx  *= 0.75;
          s.y    = H - 10;
          s.decay += 0.06;
        }

        const a  = Math.max(0, s.life);
        const ll = 50 + a * 40;
        const coreR = Math.max(0, s.size * a);

        // elongated trail behind spark
        ctx.save();
        ctx.globalAlpha = a * 0.55;
        ctx.strokeStyle = `hsl(${s.hue}, 100%, ${ll}%)`;
        ctx.lineWidth = Math.max(0.1, s.size * 0.9 * a);
        ctx.lineCap = 'round';
        ctx.beginPath();
        ctx.moveTo(s.x, s.y);
        ctx.lineTo(s.x - s.vx * 5, s.y - s.vy * 5);
        ctx.stroke();
        ctx.restore();

        if (coreR > 0) {
          ctx.fillStyle = `hsla(${s.hue}, 100%, ${ll}%, ${a})`;
          ctx.beginPath();
          ctx.arc(s.x, s.y, coreR, 0, Math.PI * 2);
          ctx.fill();
        }
      });

      // 7. Draw embers
      embers = embers.filter(e => e.life > 0.005 && e.y > -10);
      embers.forEach(e => {
        e.y   += e.vy;
        e.x   += e.vx + Math.sin(frame / 60 + e.waveOffset) * 0.35;
        e.life -= 0.003;
        if (e.life <= 0) return;

        const a = Math.max(0, e.life);
        const glowR = Math.max(0, e.size * 5);
        // micro glow
        if (glowR > 0) {
          const eg = ctx.createRadialGradient(e.x, e.y, 0, e.x, e.y, glowR);
          eg.addColorStop(0,  `hsla(${e.hue}, 100%, 70%, ${a * 0.35})`);
          eg.addColorStop(1,  `hsla(${e.hue}, 100%, 50%, 0)`);
          ctx.fillStyle = eg;
          ctx.beginPath();
          ctx.arc(e.x, e.y, glowR, 0, Math.PI * 2);
          ctx.fill();
        }

        const coreR = Math.max(0, e.size);
        if (coreR > 0) {
          ctx.fillStyle = `hsla(${e.hue}, 100%, 75%, ${a})`;
          ctx.beginPath();
          ctx.arc(e.x, e.y, coreR, 0, Math.PI * 2);
          ctx.fill();
        }
      });

      // 8. Cursor torch glow
      if (mouse.inside && mouse.x > 0) {
        const cg = ctx.createRadialGradient(mouse.x, mouse.y, 0, mouse.x, mouse.y, 80);
        cg.addColorStop(0,  'rgba(255,200,60,0.18)');
        cg.addColorStop(0.4,'rgba(255,100,10,0.08)');
        cg.addColorStop(1,  'rgba(255,50,0,0)');
        ctx.fillStyle = cg;
        ctx.beginPath();
        ctx.arc(mouse.x, mouse.y, 80, 0, Math.PI * 2);
        ctx.fill();
      }

      // 9. Top fade to black
      const tf = ctx.createLinearGradient(0, 0, 0, H * 0.18);
      tf.addColorStop(0, 'rgba(3,4,5,1)');
      tf.addColorStop(1, 'rgba(3,4,5,0)');
      ctx.fillStyle = tf;
      ctx.fillRect(0, 0, W, H * 0.18);

      animId = requestAnimationFrame(tick);
    }

    tick();

    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener('resize', resize);
      canvas.removeEventListener('mousemove',  onMove);
      canvas.removeEventListener('mouseleave', onLeave);
      canvas.removeEventListener('click',      onClick);
      canvas.removeEventListener('touchmove',  onTouch);
      canvas.removeEventListener('touchstart', onTouchStart);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full z-0 cursor-crosshair"
    />
  );
}
