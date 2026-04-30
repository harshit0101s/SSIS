export default function Footer() {
  return (
    <footer className="bg-black text-white py-12 border-t border-white/10">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          <div className="col-span-1 md:col-span-2">
            <h4 className="text-2xl font-bold tracking-tighter mb-4">
              <span className="text-orange-600">STEEL SINGER</span> INFO SERVICES
            </h4>
            <p className="text-white/60 max-w-sm">
              One of the largest integrated steel service providers based at Chennai, shaping the future of global steel business.
            </p>
          </div>
          <div>
            <h5 className="font-bold mb-4 uppercase tracking-wider text-sm text-secondary">Quick Links</h5>
            <ul className="space-y-2 text-white/60">
              <li><a href="#about" className="hover:text-white transition-colors">About Us</a></li>
              <li><a href="#services" className="hover:text-white transition-colors">Services</a></li>
              <li><a href="#work" className="hover:text-white transition-colors">Portfolio</a></li>
            </ul>
          </div>
          <div>
            <h5 className="font-bold mb-4 uppercase tracking-wider text-sm text-secondary">Legal</h5>
            <ul className="space-y-2 text-white/60">
              <li><a href="#" className="hover:text-white transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Terms of Service</a></li>
            </ul>
          </div>
        </div>
        <div className="pt-8 border-t border-white/10 text-center text-white/40 text-sm flex flex-col md:flex-row justify-between items-center">
          <p>&copy; {new Date().getFullYear()} Steel Singer Info Services. All rights reserved.</p>
          <p className="mt-2 md:mt-0">Designed for the Future.</p>
        </div>
      </div>
    </footer>
  );
}
