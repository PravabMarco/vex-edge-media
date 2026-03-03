import { Mail, MapPin, Phone } from "lucide-react";

const Footer = () => {
  return (
    <footer id="contact" className="border-t border-border py-16">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <span className="text-2xl font-display font-bold gradient-text">VEX</span>
              <span className="text-sm font-display font-medium text-muted-foreground tracking-widest">EDGE</span>
            </div>
            <p className="text-muted-foreground text-sm leading-relaxed">
              Helping businesses grow with proven digital marketing strategies and data-driven results.
            </p>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-display font-semibold text-foreground mb-4">Services</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li className="hover:text-foreground transition-colors cursor-pointer">Google SEO</li>
              <li className="hover:text-foreground transition-colors cursor-pointer">Google Ads</li>
              <li className="hover:text-foreground transition-colors cursor-pointer">Website Design</li>
              <li className="hover:text-foreground transition-colors cursor-pointer">Meta Ads</li>
              <li className="hover:text-foreground transition-colors cursor-pointer">Social Media</li>
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-display font-semibold text-foreground mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><a href="#home" className="hover:text-foreground transition-colors">Home</a></li>
              <li><a href="#about" className="hover:text-foreground transition-colors">About</a></li>
              <li><a href="#services" className="hover:text-foreground transition-colors">Services</a></li>
              <li><a href="#portfolio" className="hover:text-foreground transition-colors">Portfolio</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-display font-semibold text-foreground mb-4">Contact</h4>
            <ul className="space-y-3 text-sm text-muted-foreground">
              <li className="flex items-center gap-2">
                <Mail size={14} className="text-primary" />
                info@vexedge.com
              </li>
              <li className="flex items-center gap-2">
                <Phone size={14} className="text-primary" />
                +1 (555) 123-4567
              </li>
              <li className="flex items-center gap-2">
                <MapPin size={14} className="text-primary" />
                New York, USA
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-border mt-12 pt-8 text-center text-sm text-muted-foreground">
          © {new Date().getFullYear()} VexEdge Ads. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
