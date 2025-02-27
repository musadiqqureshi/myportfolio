import { motion } from "framer-motion";
import { Card, CardContent } from "./ui/card";

const skillCategories = [
  {
    title: "Programming Languages",
    skills: ["Python", "Java", "C/C++", "HTML", "CSS", "JavaScript"]
  },
  {
    title: "Database Management",
    skills: ["MongoDB", "MySQL", "SQL"]
  },
  {
    title: "Web Development",
    skills: ["Bootstrap", "CSS", "HTML", "PHP", "SQL", "XML"]
  },
  {
    title: "Development Environments",
    skills: ["Android Studio", "Dev C++", "Jupyter Notebook", "NetBeans", "PyCharm", "Replit", "Visual Studio"]
  },
  {
    title: "Machine Learning",
    skills: ["Neural Networks", "Object Classification"]
  }
];

const Skills = () => {
  return (
    <section id="skills" className="py-20 bg-card">
      <div className="container mx-auto px-4">
        <motion.h2
          className="text-3xl font-bold mb-12 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          Technical Skills
        </motion.h2>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: categoryIndex * 0.1 }}
            >
              <Card className="h-full">
                <CardContent className="pt-6">
                  <h3 className="font-semibold text-lg mb-4">{category.title}</h3>
                  <div className="flex flex-wrap gap-2">
                    {category.skills.map((skill, skillIndex) => (
                      <motion.span
                        key={skill}
                        className="px-3 py-1 bg-primary/10 rounded-full text-sm"
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: categoryIndex * 0.1 + skillIndex * 0.05 }}
                      >
                        {skill}
                      </motion.span>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
