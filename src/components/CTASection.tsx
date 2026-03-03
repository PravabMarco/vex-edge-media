import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

const CTASection = () => {
  return (
    <section className="py-24 relative overflow-hidden">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative rounded-3xl gradient-bg p-12 md:p-16 overflow-hidden"
        >
          <div className="absolute -top-20 -right-20 w-60 h-60 rounded-full bg-primary-foreground/10 blur-3xl" />
          <div className="absolute -bottom-20 -left-20 w-60 h-60 rounded-full bg-primary-foreground/5 blur-3xl" />

          <div className="relative z-10 max-w-2xl">
            <h2 className="text-3xl md:text-4xl font-display font-bold text-primary-foreground mb-4">
              Ready to Build Your Next App?
            </h2>
            <p className="text-primary-foreground/80 text-lg mb-8 leading-relaxed">
              Let's turn your idea into a scalable MERN stack application. From concept to deployment — we handle the full development lifecycle.
            </p>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 bg-background text-foreground px-8 py-3.5 rounded-full font-semibold hover:opacity-90 transition-opacity"
            >
              Start Your Project
              <ArrowRight size={18} />
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CTASection;
