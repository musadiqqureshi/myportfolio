import { motion } from "framer-motion";
import { Github, Linkedin, Mail } from "lucide-react";
import { Button } from "./ui/button";

const Hero = () => {
  return (
    <section id="hero" className="relative h-screen flex items-center bg-background">
      <div className="container mx-auto px-4 flex flex-col md:flex-row items-center">
        <div className="md:w-1/2 mb-10 md:mb-0">
          <motion.h1 
            className="text-4xl md:text-5xl font-bold mb-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            Muhammad Mussaddiq Ahmed Qureshi
          </motion.h1>
          <motion.h2 
            className="text-2xl md:text-3xl text-muted-foreground mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            Software Engineer
          </motion.h2>
          <motion.p 
            className="text-lg mb-8 text-muted-foreground"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            Building robust and scalable applications with modern technologies.
          </motion.p>
          <motion.div 
            className="flex space-x-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.6 }}
          >
            <Button asChild>
              <a href="#contact">Contact Me</a>
            </Button>
            <Button variant="outline" asChild>
              <a href="#projects">View Projects</a>
            </Button>
          </motion.div>
          <motion.div 
            className="flex mt-8 space-x-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.8 }}
          >
            <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-foreground transition-colors">
              <Github size={24} />
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-foreground transition-colors">
              <Linkedin size={24} />
            </a>
            <a href="mailto:muzzammilkhan7890@gmail.com" className="text-muted-foreground hover:text-foreground transition-colors">
              <Mail size={24} />
            </a>
          </motion.div>
        </div>
        <motion.div 
          className="md:w-1/2 flex justify-center"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
        >
          <img 
            src="https://lh3.googleusercontent.com/p/AF1QipObPTuDOMp8u8a1jTB4OLZvx6y6fU73KBqswA5L=s1360-w1360-h1020" 
            alt="Muhammad Mussaddiq Ahmed Qureshi" 
            className="w-72 h-72 object-cover rounded-full border-4 border-primary shadow-xl"
          />
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
