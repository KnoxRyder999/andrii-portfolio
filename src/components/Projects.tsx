import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { ExternalLink, Github, Calendar } from 'lucide-react';
import blockchainImage from '@/assets/blockchain-project.jpg';
import ecommerceImage from '@/assets/ecommerce-project.jpg';
import aiImage from '@/assets/ai-project.jpg';
import marketplaceImage from '@/assets/marketplace-project.jpg';
import votingImage from '@/assets/voting-project.jpg';
import educationImage from '@/assets/education-project.jpg';

const Projects = () => {
  const projects = [
    {
      title: "EtherDice – Blockchain Betting Game",
      period: "Jun 2025 – Jul 2025",
      description: "Built a provably fair dice game using Chainlink VRF. Designed front-end interactions with Metamask and handled game history indexing via The Graph.",
      image: blockchainImage,
      link: "https://etherdice.io",
      github: "#",
      tags: ["Solidity", "Hardhat", "React", "Web3.js", "Chainlink VRF"],
      type: "Smart Contract & Frontend Developer"
    },
    {
      title: "ViaxCo Store – Demo eCommerce",
      period: "May 2025 – Jun 2025",
      description: "Developed custom shopping cart features, product grid UI, and responsive layouts. Integrated basic user auth and checkout simulation with Firebase backend.",
      image: ecommerceImage,
      link: "https://viaxco-ecommerce-demo.netlify.app",
      github: "#",
      tags: ["React", "Tailwind", "Firebase", "eCommerce"],
      type: "Frontend Developer"
    },
    {
      title: "AutoBrief – AI Business Report Generator",
      period: "Feb 2021 – Jun 2021",
      description: "Built a SaaS app that auto-generates business reports from structured data. Included PDF export, Slack integration, and team-based user access with OpenAI API pipelines.",
      image: aiImage,
      link: "https://autobrief-ai.vercel.app",
      github: "#",
      tags: ["React", "Python", "Flask", "GPT-4 API", "MongoDB"],
      type: "Full-Stack Developer"
    },
    {
      title: "PixelMint – Digital Marketplace for Creators",
      period: "Mar 2022 – Sep 2022",
      description: "Built a full-stack creator platform with asset uploads, user auth, profile pages, and search. Engineered file handling with IPFS and integrated transaction feedback.",
      image: marketplaceImage,
      link: "https://pixelmint.io",
      github: "#",
      tags: ["Next.js", "IPFS", "Node.js", "MongoDB"],
      type: "Full-Stack Developer"
    },
    {
      title: "CivicChain – Voting App for Community Decisions",
      period: "Jul 2023 – Aug 2023",
      description: "Built a lightweight, transparent voting app with ballot creation, user login, and results dashboards. Optimized for mobile and included Firebase real-time sync.",
      image: votingImage,
      link: "https://civicchain-demo.web.app",
      github: "#",
      tags: ["React", "Firebase", "Web3.js", "Mobile"],
      type: "Full-Stack Developer"
    },
    {
      title: "Blockchain Visualizer",
      period: "Apr 2022 – Jun 2022",
      description: "Assisted in visualizing block mining and hash propagation logic for educational purposes. Extended UI to simulate double-spend scenarios.",
      image: educationImage,
      link: "https://leodinh.github.io/blockchain-demo",
      github: "#",
      tags: ["JavaScript", "HTML/CSS", "Education", "Blockchain"],
      type: "Contributor"
    }
  ];

  return (
    <section id="projects" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <h2 className="section-title text-center mb-16 animate-fade-in">Featured Projects</h2>
        
        <div className="grid lg:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <Card 
              key={index} 
              className="portfolio-card hover-lift group overflow-hidden animate-fade-in-up"
              style={{ animationDelay: `${index * 150}ms` }}
            >
              {/* Project Image */}
              <div className="relative overflow-hidden rounded-lg mb-6">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>

              {/* Project Content */}
              <div className="space-y-4">
                {/* Header */}
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="text-xl font-bold text-primary group-hover:text-primary-glow transition-colors">
                      {project.title}
                    </h3>
                    <div className="flex items-center gap-2 text-sm text-foreground/60">
                      <Calendar className="h-4 w-4" />
                      <span>{project.period}</span>
                    </div>
                  </div>
                  <p className="text-sm text-foreground/60 font-medium mb-3">{project.type}</p>
                </div>

                {/* Description */}
                <p className="text-foreground/80 leading-relaxed text-sm">{project.description}</p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, tIndex) => (
                    <Badge 
                      key={tIndex} 
                      variant="secondary"
                      className="bg-primary/10 text-primary hover:bg-primary/20 transition-colors text-xs"
                    >
                      {tag}
                    </Badge>
                  ))}
                </div>

                {/* Action Buttons */}
                <div className="flex gap-3 pt-4">
                  <Button 
                    size="sm" 
                    className="flex-1 group-hover:glow-effect transition-all"
                    asChild
                  >
                    <a href={project.link} target="_blank" rel="noopener noreferrer">
                      <ExternalLink className="h-4 w-4 mr-2" />
                      Live Demo
                    </a>
                  </Button>
                  <Button 
                    size="sm" 
                    variant="outline"
                    className="hover:bg-primary/10 hover:border-primary transition-all"
                    asChild
                  >
                    <a href={project.github} target="_blank" rel="noopener noreferrer">
                      <Github className="h-4 w-4" />
                    </a>
                  </Button>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;