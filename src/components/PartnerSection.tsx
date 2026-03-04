import { motion } from "framer-motion";
import haatibanImg from "@/assets/canva-page1.png";
import haatibanImg2 from "@/assets/canva-page2.png";

const analytics = [
  { label: "Social Media Reach", value: "500K+" },
  { label: "Engagement Rate", value: "8.2%" },
  { label: "Content Pieces", value: "200+" },
  { label: "Follower Growth", value: "350%" },
];

const PartnerSection = () => {
  return (
    <section className="py-24 relative section-glow">
      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-sm font-semibold text-primary uppercase tracking-wider">Our Partner</span>
          <h2 className="text-3xl md:text-4xl font-display font-bold mt-3">
            Powering Growth for{" "}
            <span className="gradient-text">Haatiban Resort</span>
          </h2>
          <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
            We proudly manage the complete digital marketing and social media presence for Haatiban Himalayan Height Resort — driving engagement, brand awareness, and bookings through strategic content creation and ad campaigns.
          </p>
        </motion.div>

        {/* Analytics Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
          {analytics.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="glass-card p-6 text-center"
            >
              <p className="text-3xl font-display font-bold gradient-text">{stat.value}</p>
              <p className="text-sm text-muted-foreground mt-2">{stat.label}</p>
            </motion.div>
          ))}
        </div>

        {/* Partner Showcase Images */}
        <div className="grid md:grid-cols-2 gap-8">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="glass-card overflow-hidden"
          >
            <img
              src={haatibanImg}
              alt="Haatiban Resort social media content created by VexEdge"
              className="w-full h-auto object-cover"
            />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="glass-card overflow-hidden"
          >
            <img
              src={haatibanImg2}
              alt="Haatiban Resort digital marketing analytics by VexEdge"
              className="w-full h-auto object-cover"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default PartnerSection;
