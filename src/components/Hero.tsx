import { Button } from '@/components/ui/button';
import { ArrowDown, Github, Linkedin, Mail } from 'lucide-react';
import heroImage from '@/assets/hero-bg.jpg';

const Hero = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section 
      id="hero" 
      className="min-h-screen flex items-center justify-center relative overflow-hidden"
      style={{
        backgroundImage: `linear-gradient(rgba(34, 40, 49, 0.8), rgba(34, 40, 49, 0.9)), url(${heroImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed'
      }}
    >
      {/* Background gradient overlay */}
      <div className="absolute inset-0 hero-gradient"></div>
      
      <div className="container mx-auto px-4 z-10 text-center">
        <div className="max-w-4xl mx-auto animate-fade-in-up">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 animate-scale-in">
            <span className="text-gradient">Andrii Ruslan</span>
          </h1>
          
          <div className="text-xl md:text-2xl text-foreground/80 mb-8 animate-fade-in delay-200">
            <span className="block mb-2">Full-Stack & Smart Contract Developer</span>
            <span className="text-primary">🔗 Web3 • ⚛️ React • 🛠️ Blockchain</span>
          </div>

          <p className="text-lg text-foreground/70 mb-12 max-w-2xl mx-auto leading-relaxed animate-fade-in delay-300">
            I specialize in building React-based frontends, integrating smart contracts on Ethereum, 
            and deploying scalable platforms. Currently freelancing on Web3 and eCommerce projects.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12 animate-fade-in delay-400">
            <Button 
              size="lg" 
              className="glow-effect animate-float group"
              onClick={() => scrollToSection('projects')}
            >
              View My Work
              <ArrowDown className="ml-2 h-4 w-4 group-hover:translate-y-1 transition-transform" />
            </Button>
            
            <Button 
              variant="outline" 
              size="lg"
              className="hover:bg-primary/10 hover:border-primary transition-all duration-300"
              onClick={() => scrollToSection('contact')}
            >
              Get In Touch
            </Button>
          </div>

          {/* Social Links */}
          <div className="flex items-center justify-center gap-6 animate-fade-in delay-500">
            <a 
              href="https://www.linkedin.com/in/andrii-ruslan-bihun-29b718376"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full bg-card/50 hover:bg-primary/20 hover:scale-110 transition-all duration-300 group"
            >
              <Linkedin className="h-6 w-6 group-hover:text-primary" />
            </a>
            <a 
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full bg-card/50 hover:bg-primary/20 hover:scale-110 transition-all duration-300 group"
            >
              <Github className="h-6 w-6 group-hover:text-primary" />
            </a>
            <a 
              href="mailto:bigunandrijruslan@gmail.com"
              className="p-3 rounded-full bg-card/50 hover:bg-primary/20 hover:scale-110 transition-all duration-300 group"
            >
              <Mail className="h-6 w-6 group-hover:text-primary" />
            </a>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <button
          onClick={() => scrollToSection('about')}
          className="text-primary/60 hover:text-primary transition-colors duration-300"
        >
          <ArrowDown className="h-6 w-6" />
        </button>
      </div>
    </section>
  );
};

export default Hero;