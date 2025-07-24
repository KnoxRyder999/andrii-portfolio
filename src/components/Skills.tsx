import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Code, Database, Wrench, Globe } from 'lucide-react';

const Skills = () => {
  const skillCategories = [
    {
      title: "Frontend Development",
      icon: <Code className="h-6 w-6" />,
      skills: ["React", "Next.js", "TypeScript", "Tailwind CSS", "Bootstrap", "HTML/CSS", "JavaScript"],
      color: "from-blue-500 to-cyan-500"
    },
    {
      title: "Backend & Databases",
      icon: <Database className="h-6 w-6" />,
      skills: ["Node.js", "Express", "Python", "Flask", "Firebase", "MongoDB", "Firestore"],
      color: "from-green-500 to-emerald-500"
    },
    {
      title: "Blockchain & Web3",
      icon: <Globe className="h-6 w-6" />,
      skills: ["Solidity", "Hardhat", "Web3.js", "Chainlink VRF", "OpenZeppelin", "Smart Contracts", "DeFi"],
      color: "from-purple-500 to-violet-500"
    },
    {
      title: "Tools & DevOps",
      icon: <Wrench className="h-6 w-6" />,
      skills: ["Git", "GitHub Actions", "Vercel", "Netlify", "VS Code", "Postman", "Trello"],
      color: "from-orange-500 to-red-500"
    }
  ];

  return (
    <section id="skills" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <h2 className="section-title text-center mb-16 animate-fade-in">Technical Skills</h2>
        
        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {skillCategories.map((category, index) => (
            <Card 
              key={index} 
              className="portfolio-card hover-lift animate-fade-in-up group"
              style={{ animationDelay: `${index * 200}ms` }}
            >
              <div className="space-y-6">
                {/* Header */}
                <div className="flex items-center gap-4">
                  <div className={`p-3 rounded-full bg-gradient-to-r ${category.color} text-white group-hover:scale-110 transition-transform duration-300`}>
                    {category.icon}
                  </div>
                  <h3 className="text-xl font-bold text-foreground group-hover:text-primary transition-colors">
                    {category.title}
                  </h3>
                </div>

                {/* Skills Grid */}
                <div className="flex flex-wrap gap-3">
                  {category.skills.map((skill, skillIndex) => (
                    <Badge 
                      key={skillIndex}
                      variant="secondary"
                      className="bg-primary/10 text-primary hover:bg-primary/20 hover:scale-105 transition-all duration-300 cursor-default"
                    >
                      {skill}
                    </Badge>
                  ))}
                </div>
              </div>
            </Card>
          ))}
        </div>

        {/* Additional Info */}
        <div className="mt-16 text-center animate-fade-in">
          <Card className="portfolio-card max-w-4xl mx-auto">
            <div className="space-y-4">
              <h3 className="text-xl font-bold text-gradient">Soft Skills & Work Style</h3>
              <p className="text-foreground/80 leading-relaxed">
                I enjoy contributing to small, agile teams and working in async remote setups. 
                Experienced in remote collaboration, agile methodologies, and client communication. 
                Strong problem-solving skills with a focus on clean, maintainable code and user experience.
              </p>
              <div className="flex flex-wrap justify-center gap-3 mt-6">
                {["Remote Collaboration", "Agile/Scrum", "Problem Solving", "Client Communication", "Code Review"].map((skill, index) => (
                  <Badge 
                    key={index}
                    variant="outline"
                    className="border-primary text-primary hover:bg-primary/10 transition-colors"
                  >
                    {skill}
                  </Badge>
                ))}
              </div>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Skills;