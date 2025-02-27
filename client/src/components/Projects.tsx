import { motion } from "framer-motion";
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "./ui/card";
import { ExternalLink, Github } from "lucide-react";
import { useQuery } from "@tanstack/react-query";

const personalProjects = [
  {
    title: "GPT-4 Powered Code Assistant",
    description: "Built an advanced AI code assistant using GPT-4 API that helps developers write better code with intelligent suggestions and automated refactoring capabilities.",
    tags: ["Python", "OpenAI API", "LLM", "NLP"],
    image: "https://images.unsplash.com/photo-1555949963-ff9fe0c870eb?auto=format&fit=crop&w=1170&q=80",
    github: "https://github.com/yourusername/gpt4-code-assistant",
    demo: "https://code-assistant-demo.vercel.app"
  },
  {
    title: "Real-time Object Detection System",
    description: "Developed a real-time object detection system using YOLO v8 that can identify and track multiple objects in video streams with high accuracy.",
    tags: ["Python", "Computer Vision", "YOLO", "Deep Learning"],
    image: "https://images.unsplash.com/photo-1507146426996-ef05306b995a?auto=format&fit=crop&w=1170&q=80",
    github: "https://github.com/yourusername/realtime-object-detection"
  },
  {
    title: "Neural Style Transfer App",
    description: "Created an artistic style transfer application using deep neural networks to apply the style of one image to the content of another.",
    tags: ["PyTorch", "CNN", "Neural Networks", "Flask"],
    image: "https://images.unsplash.com/photo-1579783902614-a3fb3927b6a5?auto=format&fit=crop&w=1170&q=80",
    github: "https://github.com/yourusername/neural-style-transfer"
  },
  {
    title: "Sentiment Analysis Dashboard",
    description: "Built a real-time sentiment analysis dashboard for social media posts using BERT and transformers, with interactive visualizations.",
    tags: ["NLP", "BERT", "React", "Python"],
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1170&q=80",
    github: "https://github.com/yourusername/sentiment-dashboard"
  },
  {
    title: "Language Translation Model",
    description: "Implemented a neural machine translation system using transformer architecture for multiple language pairs with attention mechanism.",
    tags: ["PyTorch", "NLP", "Transformers", "Deep Learning"],
    image: "https://images.unsplash.com/photo-1456518563096-0ff5ee08204e?auto=format&fit=crop&w=1170&q=80",
    github: "https://github.com/yourusername/neural-translation"
  },
  {
    title: "Medical Image Analysis System",
    description: "Developed an AI-powered medical image analysis system for detecting abnormalities in X-rays and MRI scans using deep learning.",
    tags: ["TensorFlow", "Medical AI", "CNN", "Healthcare"],
    image: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&w=1170&q=80",
    github: "https://github.com/yourusername/medical-image-ai"
  },
  {
    title: "Autonomous Drone Navigation",
    description: "Created a deep reinforcement learning system for autonomous drone navigation in complex environments using PPO algorithm.",
    tags: ["Reinforcement Learning", "PyTorch", "Robotics"],
    image: "https://images.unsplash.com/photo-1527977966376-1c8408f9f108?auto=format&fit=crop&w=1170&q=80",
    github: "https://github.com/yourusername/drone-rl"
  },
  {
    title: "Smart Traffic Management System",
    description: "Implemented an intelligent traffic management system using computer vision and deep learning for real-time traffic analysis.",
    tags: ["Computer Vision", "TensorFlow", "IoT"],
    image: "https://images.unsplash.com/photo-1449965408869-eaa3f722e40d?auto=format&fit=crop&w=1170&q=80",
    github: "https://github.com/yourusername/smart-traffic"
  },
  {
    title: "Voice Recognition Assistant",
    description: "Built a custom voice recognition assistant using deep learning models for speech recognition and natural language understanding.",
    tags: ["Speech Recognition", "NLP", "PyTorch"],
    image: "https://images.unsplash.com/photo-1589254065878-42c9da997008?auto=format&fit=crop&w=1170&q=80",
    github: "https://github.com/yourusername/voice-assistant"
  },
  {
    title: "Generative Art AI",
    description: "Developed a creative AI system using GANs to generate unique artwork and musical compositions based on training data.",
    tags: ["GAN", "Creative AI", "PyTorch"],
    image: "https://images.unsplash.com/photo-1561373725-307434d910cd?auto=format&fit=crop&w=1170&q=80",
    github: "https://github.com/yourusername/generative-art-ai"
  },
  {
    title: "Cinema Booking System",
    description: "Developed a Cinema Booking System featuring intuitive booking interfaces, ensuring a seamless reservation process for users.",
    tags: ["Python", "Database", "UI/UX"],
    image: "https://images.unsplash.com/photo-1517604931442-7e0c8ed2963c?auto=format&fit=crop&w=1170&q=80",
    github: "https://github.com/yourusername/cinema-booking"
  },
  {
    title: "Hospital Management System",
    description: "Developed Hospital Management System featuring doctor appointments, engaging user interface, and patient management.",
    tags: ["Python", "Database", "Healthcare"],
    image: "https://images.unsplash.com/photo-1516549655169-df83a0774514?auto=format&fit=crop&w=1170&q=80",
    github: "https://github.com/yourusername/hospital-management"
  },
  {
    title: "Air Ticketing System",
    description: "Developed Air ticketing system featuring customer handling and ticket booking management.",
    tags: ["Python", "Database", "Booking System"],
    image: "https://images.unsplash.com/photo-1436491865332-7a61a109cc05?auto=format&fit=crop&w=1174&q=80",
    github: "https://github.com/yourusername/air-ticketing"
  },
  {
    title: "AI Fraud Detection System",
    description: "Developed an advanced AI Fraud Detection System to protect businesses from fraudulent activities with exceptional accuracy and efficiency.",
    tags: ["AI", "Machine Learning", "Security"],
    image: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?auto=format&fit=crop&w=1170&q=80",
    github: "https://github.com/yourusername/fraud-detection"
  },
  {
    title: "Restaurant Management System",
    description: "Created a comprehensive Restaurant Management System aimed at streamlining operations and improving customer experiences.",
    tags: ["Python", "Database", "UI/UX"],
    image: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=1170&q=80",
    github: "https://github.com/yourusername/restaurant-management"
  }
];

const Projects = () => {
  const { data: trendingProjects, isLoading } = useQuery({
    queryKey: ['/api/github-trending'],
    queryFn: async () => {
      const response = await fetch('https://api.github.com/search/repositories?q=stars:>1&sort=stars&order=desc&per_page=5');
      if (!response.ok) throw new Error('Failed to fetch trending projects');
      return response.json();
    }
  });

  return (
    <section id="projects" className="py-20">
      <div className="container mx-auto px-4">
        <motion.h2
          className="text-3xl font-bold mb-4 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          My Projects
        </motion.h2>
        <motion.p
          className="text-center text-muted-foreground mb-12 max-w-3xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          Showcasing my expertise in AI, Machine Learning, and Full-Stack Development through innovative projects.
        </motion.p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {personalProjects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <Card className="h-full overflow-hidden hover:shadow-xl transition-shadow border-primary/20">
                <div className="h-48 overflow-hidden">
                  <img 
                    src={project.image} 
                    alt={project.title} 
                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                  />
                </div>
                <CardHeader>
                  <CardTitle className="text-xl">{project.title}</CardTitle>
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag, tagIndex) => (
                      <span 
                        key={tagIndex} 
                        className="bg-primary/10 text-primary px-2 py-1 rounded-full text-xs font-medium"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4">{project.description}</p>
                  <div className="flex justify-between">
                    {project.demo ? (
                      <a 
                        href={project.demo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-primary hover:text-primary/80 flex items-center text-sm font-medium transition-colors"
                      >
                        <ExternalLink size={16} className="mr-1" /> Live Demo
                      </a>
                    ) : (
                      <a 
                        href="#"
                        className="text-primary hover:text-primary/80 flex items-center text-sm font-medium transition-colors"
                      >
                        <ExternalLink size={16} className="mr-1" /> View Details
                      </a>
                    )}
                    <a 
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-primary hover:text-primary/80 flex items-center text-sm font-medium transition-colors"
                    >
                      <Github size={16} className="mr-1" /> Source Code
                    </a>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>


        {/* Trending GitHub Projects */}
        <div className="mt-20">
          <h3 className="text-2xl font-semibold mb-8">Trending on GitHub</h3>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {trendingProjects?.items?.slice(0, 6).map((project: any, index: number) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Card className="h-full">
                  <CardHeader>
                    <CardTitle>
                      <a 
                        href={project.html_url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:text-primary transition-colors"
                      >
                        {project.name}
                      </a>
                    </CardTitle>
                    <CardDescription>{project.language}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground mb-4">{project.description}</p>
                    <div className="flex items-center gap-4 text-sm text-muted-foreground">
                      <span>⭐ {project.stargazers_count.toLocaleString()}</span>
                      <span>🔄 {project.forks_count.toLocaleString()}</span>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;