import { Card } from '@/components/ui/card';
import { MapPin, GraduationCap, Trophy } from 'lucide-react';

const About = () => {
  const highlights = [
    "🥈 Hack the Chain '24: Built a decentralized dice game with Chainlink VRF integration – awarded 2nd place in Web3 tools category.",
    "📦 Reduced page load time by 35% on a Solidus-based eCommerce project by optimizing image delivery and removing redundant JS.",
    "✅ Audited and improved gas efficiency on custom NFT minting logic for a private Ethereum testnet deployment."
  ];

  return (
    <section id="about" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <h2 className="section-title text-center mb-16 animate-fade-in">About Me</h2>
        
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Summary */}
          <div className="space-y-6 animate-fade-in-up">
            <div className="flex items-center gap-2 text-foreground/70">
              <MapPin className="h-5 w-5 text-primary" />
              <span>Lviv, Ukraine</span>
            </div>
            
            <p className="text-lg leading-relaxed text-foreground/80">
              I'm a full-stack developer with a recent focus on freelance Web3 and eCommerce projects. 
              I specialize in building React-based frontends, integrating smart contracts on Ethereum, 
              and deploying scalable platforms.
            </p>
            
            <p className="text-lg leading-relaxed text-foreground/80">
              My background includes formal training in distributed systems and smart contract design, 
              with hands-on work across DeFi, marketplaces, and dApps. I enjoy contributing to small, 
              agile teams and working in async remote setups.
            </p>
          </div>

          {/* Education Card */}
          <Card className="portfolio-card animate-slide-in-right">
            <div className="flex items-start gap-4">
              <div className="p-3 rounded-full bg-primary/10">
                <GraduationCap className="h-6 w-6 text-primary" />
              </div>
              <div className="flex-1">
                <h3 className="text-xl font-semibold mb-2">Education</h3>
                <div className="space-y-2">
                  <h4 className="font-medium text-primary">Lviv Polytechnic National University</h4>
                  <p className="text-foreground/70">Bachelor's Degree, Software Engineering</p>
                  <p className="text-sm text-foreground/60">2019 – 2023 • GPA 3.6 / 4.0</p>
                  <p className="text-sm text-foreground/60">
                    Coursework: Distributed Systems, Cryptography, Web Architecture, Smart Contract Design
                  </p>
                </div>
              </div>
            </div>
          </Card>
        </div>

        {/* Achievements */}
        <div className="mt-16">
          <div className="flex items-center gap-2 mb-8">
            <Trophy className="h-6 w-6 text-primary" />
            <h3 className="text-2xl font-bold text-gradient">Key Achievements</h3>
          </div>
          
          <div className="grid md:grid-cols-1 gap-6">
            {highlights.map((highlight, index) => (
              <Card 
                key={index} 
                className="portfolio-card hover-lift animate-fade-in"
                style={{ animationDelay: `${index * 200}ms` }}
              >
                <p className="text-foreground/80 leading-relaxed">{highlight}</p>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;