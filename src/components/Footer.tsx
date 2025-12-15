import { motion } from 'framer-motion';
import { ArrowUp, Target } from 'lucide-react';
import logo from '@/assets/logo.png';

const footerLinks = {
  product: [
    { name: 'Overview', href: '#overview' },
    { name: 'Technology', href: '#technology' },
    { name: 'Specifications', href: '#specifications' },
    { name: 'Research', href: '#research' },
  ],
  support: [
    { name: 'FAQ', href: '#faq' },
    { name: 'Contact', href: '#contact' },
    { name: 'Global Policy', href: './GB-1.pdf', Target: '_blank' },
  ],
  legal: [
    { name: 'Privacy Policy', href: '#legal' },
    { name: 'Terms of Service', href: '#legal ' },
    { name: 'Warranty', href: '#legal' },

  ],
};

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-genesis-teal text-primary-foreground">
      <div className="container mx-auto px-4 lg:px-8 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-12 lg:gap-8">
          {/* Brand */}
          <div className="lg:col-span-2">
            <img src={logo} alt="Genesis Chamber" className="h-16 mb-6 brightness-20 " />
            <p className="text-primary-foreground/50 mb-6 max-w-sm leading-relaxed">
              The Genesis Chamber™ represents the pinnacle of multimodal therapeutic technology,
              designed to optimize human health at the cellular level.
            </p>
            <p className="text-sm text-primary-foreground/50">
              © {new Date().getFullYear()} Genesis Chamber™. All rights reserved.
            </p>
          </div>

          {/* Product Links */}
          <div>
            <h4 className="font-bold text-genesis-gold mb-4">Product</h4>
            <ul className="space-y-3">
              {footerLinks.product.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-primary-foreground/70 hover:text-genesis-gold transition-colors"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Support Links */}
          <div>
            <h4 className="font-bold text-genesis-gold mb-4">Support</h4>
            <ul className="space-y-3">
              {footerLinks.support.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-primary-foreground/70 hover:text-genesis-gold transition-colors"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal Links */}
          <div>
            <h4 className="font-bold text-genesis-gold mb-4">Legal</h4>
            <ul className="space-y-3">
              {footerLinks.legal.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-primary-foreground/70 hover:text-genesis-gold transition-colors"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-primary-foreground/10 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-primary-foreground/50 text-center md:text-left">
            Genesis Chamber™ is a registered trademark. Patent pending.
          </p>
          <motion.button
            onClick={scrollToTop}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="w-10 h-10 rounded-full bg-genesis-gold/20 flex items-center justify-center hover:bg-genesis-gold/30 transition-colors"
            aria-label="Scroll to top"
          >
            <ArrowUp className="w-5 h-5 text-genesis-gold" />
          </motion.button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
