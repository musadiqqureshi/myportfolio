import { motion } from "framer-motion";
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "./ui/card";
import { ExternalLink, Github } from "lucide-react";
import { useQuery } from "@tanstack/react-query";

const personalProjects = [
  {
    title: "Cinema Booking System",
    description: "Developed a Cinema Booking System featuring intuitive booking interfaces, ensuring a seamless reservation process for users.",
    tags: ["Python", "Database", "UI/UX"],
    image: "https://images.unsplash.com/photo-1517604931442-7e0c8ed2963c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1170&q=80"
  },
  {
    title: "Hospital Management System",
    description: "Developed Hospital Management System featuring doctor appointments, engaging user interface, and patient management.",
    tags: ["Python", "Database", "Healthcare"],
    image: "https://images.unsplash.com/photo-1516549655169-df83a0774514?ixlib=rb-4.0.3&auto=format&fit=crop&w=1170&q=80"
  },
  {
    title: "Air Ticketing System",
    description: "Developed Air ticketing system featuring customer handling and ticket booking management.",
    tags: ["Python", "Database", "Booking System"],
    image: "https://images.unsplash.com/photo-1436491865332-7a61a109cc05?ixlib=rb-4.0.3&auto=format&fit=crop&w=1174&q=80"
  },
  {
    title: "AI Fraud Detection System",
    description: "Developed an advanced AI Fraud Detection System to protect businesses from fraudulent activities with exceptional accuracy and efficiency.",
    tags: ["AI", "Machine Learning", "Security"],
    image: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?ixlib=rb-4.0.3&auto=format&fit=crop&w=1170&q=80"
  },
  {
    title: "Restaurant Management System",
    description: "Created a comprehensive Restaurant Management System aimed at streamlining operations and improving customer experiences in the food service industry.",
    tags: ["Python", "Database", "UI/UX"],
    image: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?ixlib=rb-4.0.3&auto=format&fit=crop&w=1170&q=80"
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
          Here are some of the projects I've worked on. Each project demonstrates my skills in different areas of software development.
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
                    <a 
                      href="#" 
                      className="text-primary hover:text-primary/80 flex items-center text-sm font-medium transition-colors"
                    >
                      <ExternalLink size={16} className="mr-1" /> View Project
                    </a>
                    <a 
                      href="#" 
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
        <div>
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