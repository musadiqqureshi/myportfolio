import { motion } from "framer-motion";
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "./ui/card";
import { useQuery } from "@tanstack/react-query";

const personalProjects = [
  {
    title: "Cinema Booking System",
    description: "Developed a comprehensive booking system with intuitive interfaces for seamless movie ticket reservations.",
    technologies: ["Python", "Database Design", "UI/UX"]
  },
  {
    title: "Hospital Management System",
    description: "Built a robust healthcare management system featuring doctor appointments and patient management capabilities.",
    technologies: ["Python", "Database Management", "Web Development"]
  },
  {
    title: "Air Ticketing System",
    description: "Created an efficient airline booking platform with customer handling and ticket management features.",
    technologies: ["Python", "Database Design", "User Interface"]
  },
  {
    title: "AI Fraud Detection System",
    description: "Developed an advanced system using AI to protect businesses from fraudulent activities with high accuracy.",
    technologies: ["Python", "Machine Learning", "Data Analysis"]
  },
  {
    title: "Restaurant Management System",
    description: "Engineered a comprehensive solution for streamlining restaurant operations and enhancing customer experience.",
    technologies: ["Python", "Database Management", "UI Development"]
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
          className="text-3xl font-bold mb-12 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          Featured Projects
        </motion.h2>

        {/* Personal Projects */}
        <div className="mb-16">
          <h3 className="text-2xl font-semibold mb-8">My Projects</h3>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {personalProjects.map((project, index) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Card className="h-full">
                  <CardHeader>
                    <CardTitle>{project.title}</CardTitle>
                    <CardDescription>
                      {project.technologies.join(" • ")}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">{project.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
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
