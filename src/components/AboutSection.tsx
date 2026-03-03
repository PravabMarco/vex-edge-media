import { motion } from "framer-motion";
import { Check } from "lucide-react";

const features = [
  "Innovative Strategies",
  "Professional Staff",
  "24/7 Support",
  "Custom Solutions",
];

const AboutSection = () => {
  return (
    <section id="about" className="py-24 relative section-glow">
      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="text-sm font-semibold text-primary uppercase tracking-wider">About Us</span>
            <h2 className="text-3xl md:text-4xl font-display font-bold mt-3 mb-6">
              Your Partner in{" "}
              <span className="gradient-text">Digital Growth</span>
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-8">
              At VexEdge, we bring experience, innovation, and performance-driven results to businesses looking to thrive online. With a high-ranking eBay store, Shopify sales nearing $1M, and 50K+ Amazon items sold, we know what works in digital marketing.
            </p>

            <div className="grid grid-cols-2 gap-4 mb-8">
              {features.map((f) => (
                <div key={f} className="flex items-center gap-2">
                  <div className="w-5 h-5 rounded-full gradient-bg flex items-center justify-center flex-shrink-0">
                    <Check size={12} className="text-primary-foreground" />
                  </div>
                  <span className="text-sm font-medium text-foreground">{f}</span>
                </div>
              ))}
            </div>

            <a
              href="#services"
              className="gradient-bg px-6 py-3 rounded-full font-semibold text-primary-foreground inline-block hover:opacity-90 transition-opacity"
            >
              Our Services
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative"
          >
            <div className="glass-card p-8 space-y-6">
              <div className="flex items-center gap-4">
                <div className="w-16 h-16 rounded-2xl gradient-bg flex items-center justify-center text-2xl font-display font-bold text-primary-foreground">
                  $1M
                </div>
                <div>
                  <p className="font-semibold text-foreground">Shopify Sales</p>
                  <p className="text-sm text-muted-foreground">Revenue generated</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-16 h-16 rounded-2xl bg-violet/20 border border-violet/30 flex items-center justify-center text-2xl font-display font-bold text-violet">
                  50K+
                </div>
                <div>
                  <p className="font-semibold text-foreground">Amazon Items Sold</p>
                  <p className="text-sm text-muted-foreground">In 2024 alone</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-16 h-16 rounded-2xl bg-primary/20 border border-primary/30 flex items-center justify-center text-2xl font-display font-bold text-primary">
                  #1
                </div>
                <div>
                  <p className="font-semibold text-foreground">eBay Store Ranking</p>
                  <p className="text-sm text-muted-foreground">Top-performing seller</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
