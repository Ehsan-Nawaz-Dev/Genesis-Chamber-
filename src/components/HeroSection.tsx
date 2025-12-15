import { motion } from 'framer-motion';
import { ChevronDown, Sparkles, Shield, Zap } from 'lucide-react';

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Animated Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-genesis-teal/5 via-transparent to-genesis-gold/5" />
      
      {/* Floating Orbs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          animate={{ y: [-20, 20, -20], x: [-10, 10, -10] }}
          transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
          className="absolute top-1/4 left-1/4 w-64 h-64 bg-genesis-gold/10 rounded-full blur-3xl"
        />
        <motion.div
          animate={{ y: [20, -20, 20], x: [10, -10, 10] }}
          transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut' }}
          className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-genesis-teal/10 rounded-full blur-3xl"
        />
      </div>

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            className="text-center lg:text-left"
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-genesis-gold/10 border border-genesis-gold/30 mb-6"
            >
              <Sparkles className="w-4 h-4 text-genesis-gold" />
              <span className="text-sm font-medium text-genesis-gold">Revolutionary Wellness Technology</span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="genesis-heading mb-6"
            >
              The Future of
              <span className="block genesis-gradient-text">Biological Repair</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="genesis-subheading mx-auto lg:mx-0 mb-8"
            >
              Experience the Genesis Chamber™ — a multimodal biological repair environment integrating 
              eleven advanced therapeutic systems for complete cellular regeneration.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
            >
              <a href="#technology" className="genesis-button-primary">
                Explore Technology
              </a>
              <a href="#purchase" className="genesis-button-secondary">
                Get Your Chamber
              </a>
            </motion.div>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="grid grid-cols-3 gap-6 mt-12"
            >
              {[
                { icon: Zap, value: '11', label: 'Subsystems' },
                { icon: Shield, value: '360°', label: 'EMF Shield' },
                { icon: Sparkles, value: '100%', label: 'Cellular Focus' },
              ].map((stat, index) => (
                <div key={index} className="text-center lg:text-left">
                  <div className="flex items-center gap-2 justify-center lg:justify-start mb-1">
                    <stat.icon className="w-5 h-5 text-genesis-gold" />
                    <span className="text-2xl md:text-3xl font-bold text-foreground">{stat.value}</span>
                  </div>
                  <span className="text-sm text-muted-foreground">{stat.label}</span>
                </div>
              ))}
            </motion.div>
          </motion.div>

          {/* Right - Chamber Visualization */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, ease: 'easeOut', delay: 0.3 }}
            className="relative flex items-center justify-center"
          >
            <div className="relative w-full max-w-lg aspect-square">
              {/* Glow Effect */}
              <div className="absolute inset-0 genesis-glow rounded-full" />
              
              {/* Chamber Visual Representation */}
              <motion.div
                animate={{ rotateY: [0, 360] }}
                transition={{ duration: 30, repeat: Infinity, ease: 'linear' }}
                className="relative w-full h-full"
              >
                {/* Outer Ring */}
                <div className="absolute inset-4 rounded-full border-4 border-genesis-gold/30 animate-pulse-soft" />
                <div className="absolute inset-8 rounded-full border-2 border-genesis-teal/40" />
                <div className="absolute inset-12 rounded-full border border-genesis-gold/20" />
                
                {/* Core */}
                <div className="absolute inset-16 rounded-full bg-gradient-to-br from-genesis-teal to-genesis-forest flex items-center justify-center shadow-2xl">
                  <motion.div
                    animate={{ rotateY: [0, -360] }}
                    transition={{ duration: 30, repeat: Infinity, ease: 'linear' }}
                    className="text-center text-primary-foreground p-4"
                  >
                    <motion.div
                      animate={{ scale: [1, 1.1, 1] }}
                      transition={{ duration: 3, repeat: Infinity }}
                    >
                      <Sparkles className="w-12 h-12 mx-auto mb-2 text-genesis-gold" />
                    </motion.div>
                    <p className="text-sm font-medium">Genesis</p>
                    <p className="text-xs opacity-80">Chamber™</p>
                  </motion.div>
                </div>

                {/* Orbiting Elements */}
                {[0, 60, 120, 180, 240, 300].map((angle, index) => (
                  <motion.div
                    key={index}
                    className="absolute w-4 h-4 bg-genesis-gold rounded-full shadow-lg"
                    style={{
                      top: '50%',
                      left: '50%',
                      transform: `rotate(${angle}deg) translateX(140px) translateY(-50%)`,
                    }}
                    animate={{ opacity: [0.5, 1, 0.5] }}
                    transition={{ duration: 2, repeat: Infinity, delay: index * 0.3 }}
                  />
                ))}
              </motion.div>

              {/* Pulse Rings */}
              <motion.div
                animate={{ scale: [1, 1.5], opacity: [0.5, 0] }}
                transition={{ duration: 3, repeat: Infinity }}
                className="absolute inset-0 rounded-full border-2 border-genesis-gold/30"
              />
            </div>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="flex flex-col items-center gap-2 text-muted-foreground"
          >
            <span className="text-sm">Scroll to Explore</span>
            <ChevronDown className="w-5 h-5" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
