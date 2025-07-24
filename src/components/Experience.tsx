import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Calendar, MapPin, Building } from 'lucide-react';

const Experience = () => {
  const experiences = [
    {
      title: "Freelance Developer",
      company: "Remote",
      location: "Remote",
      period: "May 2025 – Present",
      type: "Full-Stack & Smart Contract Developer",
      description: "Freelancing for startups and product teams in Web3, eCommerce, and open-source.",
      highlights: [
        "Integrated provably fair betting logic into EtherDice, using Solidity and Chainlink VRF",
        "Customized and deployed Bagisto and Solidus open-source eCommerce platforms with multilingual support and Stripe checkout",
        "Developed custom features for ViaxCo eCommerce demo including cart logic and product filtering with React and Tailwind",
        "Explored blockchain mechanics focusing on chain data propagation and block mining logic"
      ],
      skills: ["Solidity", "React", "Tailwind", "Chainlink VRF", "eCommerce"]
    },
    {
      title: "Web Developer Intern",
      company: "E-Com Studio",
      location: "Lviv, Ukraine (Hybrid)",
      period: "Aug 2023 – Apr 2024",
      type: "Junior Frontend Developer",
      description: "Boutique studio delivering headless commerce solutions for local Ukrainian retailers.",
      highlights: [
        "Implemented React components for product listings and dynamic filtering",
        "Integrated Shopify Storefront API with custom backend features (orders, coupons)",
        "Migrated client project from Bootstrap to Tailwind, reducing bundle size by ~30%",
        "Participated in weekly client demos, refining UX with real-time feedback"
      ],
      skills: ["React", "Shopify", "Tailwind", "Bootstrap", "API Integration"]
    },
    {
      title: "Software Engineering Intern",
      company: "Lviv Polytechnic Research Lab",
      location: "Lviv, Ukraine",
      period: "Mar 2022 – Aug 2022",
      type: "Blockchain Research Assistant",
      description: "University-led research team focused on distributed systems and digital signatures.",
      highlights: [
        "Simulated basic consensus models (PoW, PoA) using Python scripts and Flask",
        "Contributed to open-source tools for blockchain visualization used in senior courses",
        "Assisted in preparing curriculum content for smart contract design course module"
      ],
      skills: ["Python", "Flask", "Blockchain", "Research", "Education"]
    }
  ];

  return (
    <section id="experience" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <h2 className="section-title text-center mb-16 animate-fade-in">Experience</h2>
        
        <div className="max-w-4xl mx-auto space-y-8">
          {experiences.map((exp, index) => (
            <Card 
              key={index} 
              className="portfolio-card hover-lift animate-fade-in-up"
              style={{ animationDelay: `${index * 200}ms` }}
            >
              <div className="space-y-4">
                {/* Header */}
                <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4">
                  <div>
                    <h3 className="text-xl font-bold text-primary">{exp.title}</h3>
                    <div className="flex items-center gap-2 text-foreground/70 mt-1">
                      <Building className="h-4 w-4" />
                      <span>{exp.company}</span>
                    </div>
                    <p className="text-sm text-foreground/60 font-medium">{exp.type}</p>
                  </div>
                  
                  <div className="flex flex-col lg:items-end gap-2">
                    <div className="flex items-center gap-2 text-sm text-foreground/60">
                      <Calendar className="h-4 w-4" />
                      <span>{exp.period}</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-foreground/60">
                      <MapPin className="h-4 w-4" />
                      <span>{exp.location}</span>
                    </div>
                  </div>
                </div>

                {/* Description */}
                <p className="text-foreground/80 leading-relaxed">{exp.description}</p>

                {/* Highlights */}
                <div className="space-y-3">
                  <h4 className="font-semibold text-foreground">Key Achievements:</h4>
                  <ul className="space-y-2">
                    {exp.highlights.map((highlight, hIndex) => (
                      <li key={hIndex} className="flex items-start gap-3 text-foreground/80">
                        <span className="text-primary font-bold text-sm mt-1">▸</span>
                        <span className="text-sm leading-relaxed">{highlight}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Skills */}
                <div className="flex flex-wrap gap-2">
                  {exp.skills.map((skill, sIndex) => (
                    <Badge 
                      key={sIndex} 
                      variant="secondary"
                      className="bg-primary/10 text-primary hover:bg-primary/20 transition-colors"
                    >
                      {skill}
                    </Badge>
                  ))}
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;