import { motion } from "framer-motion";

const works = [
  {
    title: "E-Commerce Platform",
    category: "Full-Stack",
    desc: "Built a complete MERN e-commerce app with Stripe payments, real-time inventory, and admin dashboard.",
    stat: "10K+ Users",
  },
  {
    title: "SaaS Dashboard",
    category: "React",
    desc: "Developed a multi-tenant analytics dashboard with React, Chart.js, and real-time WebSocket data streaming.",
    stat: "99.9% Uptime",
  },
  {
    title: "Social Media App",
    category: "Full-Stack",
    desc: "Real-time social platform with React, Socket.io, MongoDB, and JWT auth — supporting 50K concurrent users.",
    stat: "50K Users",
  },
  {
    title: "REST API Architecture",
    category: "Backend",
    desc: "Designed a microservices API with Node.js, Express, and MongoDB handling 1M+ requests per day.",
    stat: "1M+ Req/Day",
  },
  {
    title: "Admin Panel System",
    category: "React",
    desc: "Feature-rich admin panel with role-based access, data tables, charts, and CRUD operations using React Query.",
    stat: "200+ Components",
  },
  {
    title: "Real-Time Chat App",
    category: "Full-Stack",
    desc: "End-to-end encrypted chat application with Socket.io, React, and MongoDB for instant messaging.",
    stat: "<50ms Latency",
  },
];

const PortfolioSection = () => {
  return (
    <section id="portfolio" className="py-24 relative">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-sm font-semibold text-primary uppercase tracking-wider">Our Works</span>
          <h2 className="text-3xl md:text-4xl font-display font-bold mt-3">
            Turning Ideas into{" "}
            <span className="gradient-text">Production Apps</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {works.map((work, i) => (
            <motion.div
              key={work.title}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              className="glass-card p-6 group hover:glow-mixed transition-all duration-300 relative overflow-hidden"
            >
              <div className="absolute top-4 right-4">
                <span className="text-2xl font-display font-bold gradient-text">{work.stat}</span>
              </div>
              <span className="text-xs font-medium text-violet uppercase tracking-wider">{work.category}</span>
              <h3 className="text-lg font-display font-semibold mt-2 mb-3 text-foreground">{work.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">{work.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PortfolioSection;
