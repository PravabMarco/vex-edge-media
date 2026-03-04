import { motion } from "framer-motion";

const works = [
  {
    title: "SEO Growth",
    category: "Advertisement",
    desc: "Boosted an e-commerce brand's organic traffic by 250% with keyword optimization and link-building.",
    stat: "250% Traffic",
  },
  {
    title: "Website Design Excellence",
    category: "Design",
    desc: "Transformed a startup's website into a sleek, high-performance platform. Bounce rate dropped by 45%, engagement surged by 60%.",
    stat: "60% Engagement",
  },
  {
    title: "Google Ads Performance",
    category: "Advertisement",
    desc: "Scaled a Shopify store's revenue 3X with data-driven ad strategies, increasing ROAS from 2.5 to 6.0.",
    stat: "6.0 ROAS",
  },
  {
    title: "Ad Campaign Management",
    category: "Advertisement",
    desc: "Optimized targeting, ad creatives, and budget allocation to drive higher ROAS, lower costs, and increased conversions.",
    stat: "3X Revenue",
  },
  {
    title: "Meta Ads Scaling",
    category: "Advertisement",
    desc: "Drove a 4.2X ROAS for a fashion brand by optimizing Facebook and Instagram ad campaigns.",
    stat: "4.2X ROAS",
  },
  {
    title: "Social Media Growth",
    category: "Design",
    desc: "Increased a brand's followers by 120% in 3 months, tripling engagement rates through interactive content.",
    stat: "120% Growth",
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
            <span className="gradient-text">Growth</span>
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
              <span className="text-xs font-medium text-accent uppercase tracking-wider">{work.category}</span>
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
