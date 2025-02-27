import { motion } from "framer-motion";
import { Card, CardContent } from "./ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";

const testimonials = [
  {
    name: "John Doe",
    role: "CTO at TechCorp",
    content: "Mussaddiq delivered exceptional work on our project. His technical expertise and attention to detail were outstanding.",
    image: "https://api.dicebear.com/7.x/avataaars/svg?seed=John"
  },
  {
    name: "Sarah Smith",
    role: "Product Manager",
    content: "Working with Mussaddiq was a great experience. He understood our requirements perfectly and delivered high-quality solutions.",
    image: "https://api.dicebear.com/7.x/avataaars/svg?seed=Sarah"
  },
  {
    name: "Mike Johnson",
    role: "Startup Founder",
    content: "Mussaddiq's work on our database management system was crucial for our business. Highly recommended!",
    image: "https://api.dicebear.com/7.x/avataaars/svg?seed=Mike"
  }
];

const Testimonials = () => {
  return (
    <section id="testimonials" className="py-20 bg-card">
      <div className="container px-4 mx-auto">
        <motion.h2
          className="text-3xl font-bold mb-12 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          Client Testimonials
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
            >
              <Card className="h-full">
                <CardContent className="pt-6">
                  <div className="flex items-center mb-4">
                    <Avatar className="h-12 w-12">
                      <AvatarImage src={testimonial.image} alt={testimonial.name} />
                      <AvatarFallback>{testimonial.name[0]}</AvatarFallback>
                    </Avatar>
                    <div className="ml-4">
                      <h3 className="font-semibold">{testimonial.name}</h3>
                      <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                    </div>
                  </div>
                  <p className="text-muted-foreground">{testimonial.content}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
