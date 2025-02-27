import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";

const skills = {
  "Programming Languages": ["C", "C++", "HTML", "Java", "Python"],
  "Database Management": ["MongoDB", "MySQL"],
  "Web Development": ["Bootstrap", "CSS", "HTML", "PHP", "SQL", "XML"],
  "IDEs": ["Android Studio", "Dev C++", "Jupyter Notebook", "NetBeans", "PyCharm", "Replit", "Visual Studio"],
  "Machine Learning": ["Neural Network", "Object Classification"]
};

export function SkillsGrid() {
  return (
    <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
      {Object.entries(skills).map(([category, skillList], categoryIndex) => (
        <motion.div
          key={category}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: categoryIndex * 0.1 }}
        >
          <Card className="h-full">
            <CardContent className="pt-6">
              <h3 className="font-semibold text-lg mb-4">{category}</h3>
              <div className="flex flex-wrap gap-2">
                {skillList.map((skill, skillIndex) => (
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
  );
}
