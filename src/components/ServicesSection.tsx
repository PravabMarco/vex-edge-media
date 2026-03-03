import { motion } from "framer-motion";
import { Search, Monitor, Megaphone, BarChart3, Users, Share2 } from "lucide-react";

const services = [
  {
    icon: BarChart3,
    title: "Google SEO",
    desc: "Drive organic traffic and get to the top of search results with our expert SEO strategies.",
  },
  {
    icon: Search,
    title: "Google Ads",
    desc: "Maximize your ROI with targeted and high-converting PPC campaigns.",
  },
  {
    icon: Monitor,
    title: "Website Design",
    desc: "Build high-performance, visually stunning websites that convert visitors into customers.",
  },
  {
    icon: Megaphone,
    title: "Ad Campaign Management",
    desc: "Strategically plan, optimize, and scale ad campaigns across platforms to maximize ROI.",
  },
  {
    icon: Users,
    title: "Meta Ads",
    desc: "Reach your audience effectively through strategic Facebook and Instagram advertising.",
  },
  {
    icon: Share2,
    title: "Social Media Management",
    desc: "Grow brand presence and interact with customers through engaging content strategies.",
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
            Awesome Services for{" "}
            <span className="gradient-text">Our Customers</span>
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
