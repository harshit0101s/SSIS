import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import Partners from './components/Partners';
import Portfolio from './components/Portfolio';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="dark min-h-screen bg-background font-sans text-foreground overflow-x-hidden selection:bg-secondary selection:text-white">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Services />
        <Partners />
        <Portfolio />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
