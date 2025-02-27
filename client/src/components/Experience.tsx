import { motion } from "framer-motion";
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "./ui/card";

const experiences = [
  {
    period: "Dec 2022 - Present",
    title: "Software Engineer",
    company: "Tech Solutions",
    location: "Lahore",
    type: "Part-time",
    description: "Working as a Software Engineer, focusing on back-end development and integration with web services.",
    achievements: [
      "Developing robust back-end components for various applications",
      "Connecting applications with other web services",
      "Supporting front-end developers in project implementation",
      "Implementing server-side logic and database integrations"
    ]
  },
  {
    period: "Ongoing",
    title: "Freelance Developer",
    company: "Self-employed",
    location: "Remote",
    type: "Contract",
    description: "Working on various freelance projects in software development and web development.",
    achievements: [
      "Developing custom software solutions for clients",
      "Creating web applications with modern technologies",
      "Implementing database solutions for various business needs",
      "Providing technical consultation and support"
    ]
  }
];

const Experience = () => {
  return (
    <section id="experience" className="py-20 bg-card">
      <div className="container mx-auto px-4">
        <motion.h2
          className="text-3xl font-bold mb-12 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          Professional Experience
        </motion.h2>

        <div className="max-w-4xl mx-auto">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className="mb-8 last:mb-0"
            >
              <Card>
                <CardHeader>
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2">
                    <div>
                      <CardTitle className="text-xl">{exp.title}</CardTitle>
                      <CardDescription>
                        {exp.company} • {exp.location} • {exp.type}
                      </CardDescription>
                    </div>
                    <div className="text-sm text-muted-foreground">
                      {exp.period}
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="mb-4 text-muted-foreground">{exp.description}</p>
                  <ul className="list-disc pl-5 space-y-2 text-muted-foreground">
                    {exp.achievements.map((achievement, i) => (
                      <li key={i}>{achievement}</li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
