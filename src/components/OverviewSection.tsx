import { motion } from 'framer-motion';
import { ArrowRight, Play } from 'lucide-react';
import heroChamber from '@/assets/hero-chamber.jpg';

const OverviewSection = () => {
  return (
    <section id="overview" className="genesis-section relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-card" />

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-genesis-gold font-medium mb-4 block">System Overview</span>
          <h2 className="genesis-heading mb-6">
            Phase-Based Modular
            <span className="block genesis-gradient-text">Biological Platform</span>
          </h2>
          <p className="genesis-subheading mx-auto">
            Genesis Chamber™ is built as a platform of 14+ integrated biological modules that work
            together across four structured phases, rather than a single one-off therapy room.
          </p>
        </motion.div>

        {/* Main Content */}
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left - Video/Image Placeholder */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <div className="aspect-video rounded-2xl overflow-hidden relative group cursor-pointer">
              {/* Chamber Image */}
              <img 
                src={heroChamber} 
                alt="Genesis Chamber™ - Advanced Biological Repair Technology" 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              
              {/* Overlay */}
              <div className="absolute inset-0 bg-genesis-teal/30 group-hover:bg-genesis-teal/20 transition-colors duration-300" />
              
      
            </div>

            {/* Floating Cards */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="absolute -bottom-6 -right-6 lg:-right-12 genesis-card p-4 shadow-xl"
            >
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-lg bg-genesis-gold/10 flex items-center justify-center">
                  <span className="text-2xl font-bold text-genesis-gold">14+</span>
                </div>
                <div>
                  <p className="font-bold text-foreground">Subsystems</p>
                  <p className="text-sm text-muted-foreground">Integrated</p>
                </div>
              </div>
            </motion.div>
          </motion.div>

          {/* Right - Content */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="text-3xl font-bold text-foreground mb-6 font-serif">
              What the Genesis Chamber™ Actually Is
            </h3>
            <p className="text-muted-foreground mb-4 leading-relaxed">
              Genesis Chamber™ is an integrated biological system. It is built as a platform of
              coordinated modules and phases that shape light, sound, temperature, atmosphere,
              vibration and environmental chemistry around the human body.
            </p>
            <p className="text-muted-foreground mb-4 leading-relaxed font-semibold">
              It is <span className="underline decoration-genesis-gold/70 decoration-2 underline-offset-4">not</span> a single device.
              It is <span className="underline decoration-genesis-gold/70 decoration-2 underline-offset-4">not</span> a spa room.
              It is <span className="underline decoration-genesis-gold/70 decoration-2 underline-offset-4">not</span> one therapy.
            </p>
            <p className="text-muted-foreground mb-8 leading-relaxed">
              Instead of switching one machine on and off, Genesis runs as four predictable phases –
              from priming to consolidation – so the nervous system, immune system and cellular
              machinery are signalled in a planned sequence rather than shocked with random input.
            </p>

            {/* Feature List */}
            <div className="space-y-4 mb-8">
              {[
                'Phase-based architecture instead of single on/off sessions',
                '14+ named modules including Salt Serenity™ and Forest Immersion™',
                'Designed biometric and software layer for adaptive control',
                'Fully EMF-shielded, controllable internal environment',
              ].map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="flex items-center gap-3"
                >
                  <ArrowRight className="w-5 h-5 text-genesis-gold flex-shrink-0" />
                  <span className="text-foreground">{feature}</span>
                </motion.div>
              ))}
            </div>

            <a href="#technology" className="genesis-button-primary inline-flex">
              Explore All Systems
              <ArrowRight className="w-5 h-5 ml-2" />
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default OverviewSection;
