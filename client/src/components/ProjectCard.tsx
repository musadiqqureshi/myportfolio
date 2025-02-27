import { useQuery } from "@tanstack/react-query";
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";
import { motion } from "framer-motion";

export function ProjectCard() {
  const { data: projects, isLoading } = useQuery({
    queryKey: ['github-trending'],
    queryFn: async () => {
      const res = await fetch('https://api.github.com/search/repositories?q=stars:>1&sort=stars&order=desc&per_page=10');
      return res.json();
    }
  });

  if (isLoading) {
    return Array(6).fill(0).map((_, i) => (
      <Card key={i} className="overflow-hidden">
        <CardHeader>
          <Skeleton className="h-6 w-3/4" />
          <Skeleton className="h-4 w-1/2" />
        </CardHeader>
        <CardContent>
          <Skeleton className="h-20" />
        </CardContent>
      </Card>
    ));
  }

  return projects?.items?.map((project: any) => (
    <motion.div
      key={project.id}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      whileHover={{ scale: 1.02 }}
      transition={{ duration: 0.3 }}
    >
      <Card className="h-full">
        <CardHeader>
          <CardTitle className="text-xl">
            <a href={project.html_url} target="_blank" rel="noopener noreferrer" className="hover:text-primary">
              {project.name}
            </a>
          </CardTitle>
          <CardDescription>{project.language}</CardDescription>
        </CardHeader>
        <CardContent>
          <p className="text-muted-foreground">{project.description}</p>
          <div className="mt-4 flex items-center gap-4 text-sm text-muted-foreground">
            <span>⭐ {project.stargazers_count}</span>
            <span>🔄 {project.forks_count}</span>
          </div>
        </CardContent>
      </Card>
    </motion.div>
  ));
}
