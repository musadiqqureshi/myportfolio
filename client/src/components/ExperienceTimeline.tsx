import { motion } from "framer-motion";
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";

const experiences = [
  {
    title: "Software Engineer",
    company: "Tech Solutions",
    period: "12/2022 - Present",
    type: "Part-time",
    location: "Lahore",
    description: "Working on various software development projects and solutions."
  }
];

const projects = [
  {
    title: "Cinema Booking System",
    description: "Developed featuring intuitive booking interfaces, ensuring a seamless reservation process for users."
  },
  {
    title: "Hospital Management System",
    description: "Developed featuring Doctor Appointments, engaging user interface, patients managements."
  },
  {
    title: "Air Ticketing System",
    description: "Developed featuring customers handling, Tickets booking management."
  },
  {
    title: "AI Fraud Detection System",
    description: "Developed an advanced system to protect businesses from fraudulent activities with exceptional accuracy and efficiency."
  },
  {
    title: "Restaurant Management System",
    description: "Created a comprehensive system aimed at streamlining operations and improving customer experiences."
  }
];

export function ExperienceTimeline() {
  return (
    <div className="space-y-12">
      {/* Work Experience */}
      <div>
        <h3 className="text-2xl font-semibold mb-6">Work Experience</h3>
        {experiences.map((exp, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.2 }}
          >
            <Card className="mb-6">
              <CardHeader>
                <CardTitle>{exp.title}</CardTitle>
                <CardDescription>{exp.company} • {exp.location} • {exp.type}</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">{exp.description}</p>
                <p className="text-sm text-muted-foreground mt-2">{exp.period}</p>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>

      {/* Projects */}
      <div>
        <h3 className="text-2xl font-semibold mb-6">Notable Projects</h3>
        <div className="grid gap-6 md:grid-cols-2">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">{project.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{project.description}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
