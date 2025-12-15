import { motion } from 'framer-motion';
import { LucideIcon } from 'lucide-react';

interface SubsystemCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  specs: string[];
  index: number;
}

const SubsystemCard = ({ icon: Icon, title, description, specs, index }: SubsystemCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className="group genesis-card p-6 lg:p-8 relative overflow-hidden"
    >
      {/* Gradient Overlay on Hover */}
      <div className="absolute inset-0 bg-gradient-to-br from-genesis-gold/5 to-genesis-teal/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      
      {/* Icon */}
      <div className="relative z-10 mb-6">
        <div className="w-14 h-14 rounded-xl bg-genesis-gold/10 flex items-center justify-center group-hover:bg-genesis-gold/20 transition-colors duration-300">
          <Icon className="w-7 h-7 text-genesis-gold" />
        </div>
      </div>

      {/* Content */}
      <div className="relative z-10">
        <h3 className="text-xl font-bold text-foreground mb-3 font-serif">{title}</h3>
        <p className="text-muted-foreground mb-4 leading-relaxed">{description}</p>
        
        {/* Specs */}
        <div className="space-y-2">
          {specs.map((spec, i) => (
            <div key={i} className="flex items-center gap-2 text-sm">
              <div className="w-1.5 h-1.5 rounded-full bg-genesis-gold" />
              <span className="text-foreground/80">{spec}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Corner Accent */}
      <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-bl from-genesis-gold/10 to-transparent rounded-bl-full opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
    </motion.div>
  );
};

export default SubsystemCard;
