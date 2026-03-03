import { motion } from "framer-motion";
import heroImage from "@/assets/hero-illustration.png";

const HeroSection = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center overflow-hidden pt-20">
      {/* Background glow orbs */}
      <div className="absolute top-1/4 -left-32 w-96 h-96 rounded-full bg-electric-blue/10 blur-[120px] animate-glow-pulse" />
      <div className="absolute bottom-1/4 -right-32 w-96 h-96 rounded-full bg-violet/10 blur-[120px] animate-glow-pulse" style={{ animationDelay: "1.5s" }} />

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            <span className="inline-block gradient-bg px-4 py-1.5 rounded-full text-xs font-semibold text-primary-foreground mb-6 tracking-wider uppercase">
              Digital Marketing Agency
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold leading-tight mb-6">
              Grow Your Business with{" "}
              <span className="gradient-text">Smarter Marketing</span>
            </h1>
            <p className="text-lg text-muted-foreground max-w-lg mb-8 leading-relaxed">
              We help businesses grow with proven digital marketing strategies. From Google Ads and SEO to Meta Ads and website design — we deliver data-backed results.
            </p>
            <div className="flex flex-wrap gap-4">
              <a
                href="#about"
                className="gradient-bg px-8 py-3.5 rounded-full font-semibold text-primary-foreground glow-mixed hover:opacity-90 transition-all duration-300"
              >
                Read More
              </a>
              <a
                href="#contact"
                className="px-8 py-3.5 rounded-full font-semibold border border-primary/30 text-foreground hover:border-primary/60 transition-all duration-300"
              >
                Contact Us
              </a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative hidden lg:block"
          >
            <div className="relative animate-float">
              <img
                src={heroImage}
                alt="Digital marketing dashboard illustration"
                className="w-full max-w-lg mx-auto drop-shadow-2xl"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent" />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
