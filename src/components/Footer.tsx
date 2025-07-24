import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Github, Linkedin, Mail, Heart, ExternalLink } from 'lucide-react';

const Footer = () => {
  const socialLinks = [
    {
      name: "LinkedIn",
      icon: <Linkedin className="h-5 w-5" />,
      url: "https://www.linkedin.com/in/andrii-ruslan-bihun-29b718376",
      color: "hover:text-blue-500"
    },
    {
      name: "GitHub",
      icon: <Github className="h-5 w-5" />,
      url: "https://github.com",
      color: "hover:text-gray-300"
    },
    {
      name: "Email",
      icon: <Mail className="h-5 w-5" />,
      url: "mailto:bigunandrijruslan@gmail.com",
      color: "hover:text-red-500"
    }
  ];

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer id="contact" className="py-20 bg-background border-t border-border/20">
      <div className="container mx-auto px-4">
        {/* Contact Section */}
        <div className="text-center mb-16">
          <h2 className="section-title mb-8 animate-fade-in">Let's Work Together</h2>
          <p className="text-lg text-foreground/70 mb-8 max-w-2xl mx-auto animate-fade-in-up">
            I'm always open to discussing new opportunities, exciting projects, 
            or just having a chat about technology and development.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-fade-in-up">
            <Button 
              size="lg" 
              className="glow-effect group"
              asChild
            >
              <a href="mailto:bigunandrijruslan@gmail.com">
                <Mail className="mr-2 h-5 w-5 group-hover:scale-110 transition-transform" />
                Get In Touch
              </a>
            </Button>
            
            <Button 
              variant="outline" 
              size="lg"
              className="hover:bg-primary/10 hover:border-primary transition-all duration-300"
              asChild
            >
              <a href="https://www.linkedin.com/in/andrii-ruslan-bihun-29b718376" target="_blank" rel="noopener noreferrer">
                <ExternalLink className="mr-2 h-4 w-4" />
                View LinkedIn
              </a>
            </Button>
          </div>
        </div>

        {/* Social Links */}
        <Card className="portfolio-card max-w-md mx-auto mb-12 animate-scale-in">
          <div className="text-center space-y-6">
            <h3 className="text-xl font-semibold text-gradient">Connect With Me</h3>
            
            <div className="flex justify-center gap-6">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.url}
                  target={social.name !== "Email" ? "_blank" : undefined}
                  rel={social.name !== "Email" ? "noopener noreferrer" : undefined}
                  className={`p-4 rounded-full bg-muted hover:bg-primary/20 transition-all duration-300 hover:scale-110 hover:shadow-lg ${social.color} group`}
                  aria-label={social.name}
                >
                  <span className="group-hover:animate-bounce">{social.icon}</span>
                </a>
              ))}
            </div>
            
            <p className="text-sm text-foreground/60">
              📍 Lviv, Ukraine • 🌍 Available for Remote Work
            </p>
          </div>
        </Card>

        {/* Footer Bottom */}
        <div className="border-t border-border/20 pt-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-foreground/60">
            <div className="flex items-center gap-2">
              <span>Made with</span>
              <Heart className="h-4 w-4 text-red-500 animate-pulse" />
              <span>by Andrii Ruslan</span>
            </div>
            
            <div className="flex items-center gap-4">
              <span>© 2025 All rights reserved</span>
              <Button
                variant="ghost"
                size="sm"
                onClick={scrollToTop}
                className="hover:text-primary transition-colors"
              >
                Back to Top ↑
              </Button>
            </div>
          </div>
        </div>

        {/* Tech Stack Credits */}
        <div className="mt-8 pt-8 border-t border-border/20 text-center">
          <p className="text-xs text-foreground/50">
            Built with React, TypeScript, Tailwind CSS, and lots of ☕
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;