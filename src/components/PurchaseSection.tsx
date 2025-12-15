import { motion } from 'framer-motion';
import { Check, ShoppingCart, Shield, Truck, Headphones } from 'lucide-react';

const features = [
  'Complete Genesis Chamber™ Unit',
  'All 11 Therapeutic Subsystems',
  'Central Control Unit (CCU)',
  'Biometric Sensor Array',
  'Professional Installation',
  'User Training Session',
  '3-Year Comprehensive Warranty',
  'Lifetime Software Updates',
  'Priority Technical Support',
];

const benefits = [
  { icon: Shield, label: 'Secure Payment' },
  { icon: Truck, label: 'White Glove Delivery' },
  { icon: Headphones, label: '24/7 Support' },
];

const PurchaseSection = () => {
  const handlePurchase = () => {
    // Redirect to Stripe payment link (replace with actual Stripe link)
    window.open('https://buy.stripe.com/YOUR_STRIPE_LINK', '_blank');
  };

  return (
    <section id="purchase" className="genesis-section bg-gradient-to-b from-genesis-teal to-genesis-forest relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 60, repeat: Infinity, ease: 'linear' }}
          className="absolute -top-1/2 -right-1/2 w-full h-full opacity-10"
          style={{
            background: 'conic-gradient(from 0deg, transparent, hsl(var(--genesis-gold)), transparent)',
          }}
        />
      </div>

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <div className="max-w-5xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Left Content */}
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <span className="inline-block px-4 py-2 rounded-full bg-genesis-gold/20 text-genesis-gold text-sm font-medium mb-6">
                Limited Availability
              </span>
              <h2 className="text-4xl md:text-5xl font-bold text-primary-foreground mb-6 font-serif">
                Transform Your
                <span className="block text-genesis-gold">Wellness Journey</span>
              </h2>
              <p className="text-lg text-primary-foreground/80 mb-8 leading-relaxed">
                Invest in your health with the Genesis Chamber™ — the most advanced multimodal
                biological repair system available. Experience the future of therapeutic technology.
              </p>

              {/* Features List */}
              <div className="grid sm:grid-cols-2 gap-3 mb-8">
                {features.map((feature, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.05 }}
                    className="flex items-center gap-3"
                  >
                    <div className="w-5 h-5 rounded-full bg-genesis-gold/20 flex items-center justify-center flex-shrink-0">
                      <Check className="w-3 h-3 text-genesis-gold" />
                    </div>
                    <span className="text-sm text-primary-foreground/90">{feature}</span>
                  </motion.div>
                ))}
              </div>

              {/* Benefits */}
              <div className="flex flex-wrap gap-6">
                {benefits.map((benefit, index) => (
                  <div key={index} className="flex items-center gap-2 text-primary-foreground/70">
                    <benefit.icon className="w-5 h-5 text-genesis-gold" />
                    <span className="text-sm">{benefit.label}</span>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Right - Pricing Card */}
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative"
            >
              <div className="absolute inset-0 bg-genesis-gold/20 rounded-3xl blur-xl" />
              <div className="relative bg-card rounded-2xl p-8 lg:p-10 shadow-2xl">
               

                <div className="space-y-4 mb-8">
                  <div className="flex justify-between py-3 border-b border-border">
                    <span className="text-muted-foreground">Chamber Unit</span>
                    <span className="font-medium text-foreground">Included</span>
                  </div>
                  <div className="flex justify-between py-3 border-b border-border">
                    <span className="text-muted-foreground">Installation</span>
                    <span className="font-medium text-foreground">Included</span>
                  </div>
                  <div className="flex justify-between py-3 border-b border-border">
                    <span className="text-muted-foreground">Training</span>
                    <span className="font-medium text-foreground">Included</span>
                  </div>
                  <div className="flex justify-between py-3">
                    <span className="text-muted-foreground">Warranty</span>
                    <span className="font-medium text-foreground">3 Years</span>
                  </div>
                </div>

                <motion.button
                  onClick={handlePurchase}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="genesis-button-primary w-full text-lg py-5"
                >
                  <ShoppingCart className="w-5 h-5 mr-2" />
                  Purchase Now
                </motion.button>

                <p className="text-center text-sm text-muted-foreground mt-4">
                  Secure checkout powered by Stripe
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PurchaseSection;
