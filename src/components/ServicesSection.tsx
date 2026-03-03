import { motion } from "framer-motion";
import { Code2, Monitor, Server, Database, Layers, GitBranch } from "lucide-react";

const services = [
  {
    icon: Code2,
    title: "React Development",
    desc: "Build dynamic, component-driven UIs with React, Redux, and modern state management for seamless user experiences.",
  },
  {
    icon: Server,
    title: "Node.js & Express APIs",
    desc: "Design and develop RESTful and GraphQL APIs with Express.js, handling authentication, validation, and real-time data.",
  },
  {
    icon: Database,
    title: "MongoDB & Database Design",
    desc: "Architect efficient NoSQL schemas with MongoDB, Mongoose ODM, aggregation pipelines, and optimized queries.",
  },
  {
    icon: Monitor,
    title: "Full-Stack Web Apps",
    desc: "End-to-end MERN stack applications — from responsive frontends to scalable backends, deployed and production-ready.",
  },
  {
    icon: Layers,
    title: "UI/UX & Frontend Design",
    desc: "Pixel-perfect interfaces using Tailwind CSS, Framer Motion, and modern design systems for stunning user experiences.",
  },
  {
    icon: GitBranch,
    title: "DevOps & Deployment",
    desc: "CI/CD pipelines, Docker containerization, AWS/Vercel deployments, and monitoring for reliable production systems.",
  },
];

const ServicesSection = () => {
  return (
    <section id="services" className="py-24 relative section-glow">
      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-sm font-semibold text-primary uppercase tracking-wider">Our Services</span>
          <h2 className="text-3xl md:text-4xl font-display font-bold mt-3">
            Full-Stack Solutions with{" "}
            <span className="gradient-text">MERN Stack</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, i) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              className="glass-card p-8 group cursor-pointer transition-all duration-300"
            >
              <div className="w-14 h-14 rounded-xl gradient-bg flex items-center justify-center mb-5 group-hover:glow-mixed transition-shadow duration-300">
                <service.icon size={24} className="text-primary-foreground" />
              </div>
              <h3 className="text-xl font-display font-semibold mb-3 text-foreground">
                {service.title}
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                {service.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
