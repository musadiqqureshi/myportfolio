import { motion } from "framer-motion";
import { Card, CardContent } from "./ui/card";

const About = () => {
  return (
    <section id="about" className="py-20 bg-card">
      <div className="container mx-auto px-4">
        <motion.h2
          className="text-3xl font-bold mb-12 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          About Me
        </motion.h2>
        
        <motion.div
          className="max-w-3xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
        >
          <Card>
            <CardContent className="pt-6">
              <p className="text-lg mb-6">
                To join a dynamic and progressive organization offering better opportunities for diversified experience, and seeking a position which will allow for continued professional growth, offering an environment in which advancement is based on strength of individual contributions to the realization of organizational goals.
              </p>
              
              <div className="space-y-4">
                <div>
                  <h3 className="text-xl font-semibold mb-2">Professional Overview</h3>
                  <p className="text-muted-foreground">
                    Structured Python Developer bringing about 2 years of comprehensive experience developing back-end components, connecting applications with other web services and supporting front-end developers. Tech-savvy and methodical professional possessing strong understanding of front-end technologies. Familiar with server-side template languages.
                  </p>
                </div>
                
                <div>
                  <h3 className="text-xl font-semibold mb-2">Contact Information</h3>
                  <p className="text-muted-foreground">
                    📍 55 Nawab Town Main Boulevard, Lahore, Punjab<br />
                    📞 03086994758<br />
                    ✉️ muzzammilkhan7890@gmail.com
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
