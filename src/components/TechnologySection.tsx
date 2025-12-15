import { motion } from 'framer-motion';
import SubsystemCard from './SubsystemCard';
import { 
  Sun, 
  Thermometer, 
  Wind, 
  Radio, 
  ShieldCheck, 
  Activity,
  Droplets,
  Zap,
  Leaf,
  Heart,
  Cpu
} from 'lucide-react';

const subsystems = [
  {
    icon: Sun,
    title: 'PBM Light Engine',
    description: 'Multi-spectrum photobiomodulation delivering precise wavelengths for cellular energy optimization.',
    specs: ['630nm, 660nm, 810nm, 850nm', '5–100 mW/cm² adjustable', 'Pulse frequencies: 1–500 Hz'],
  },
  {
    icon: Zap,
    title: 'NIR Deep-Tissue Module',
    description: 'Near-infrared penetration for deep tissue regeneration and mitochondrial activation.',
    specs: ['980nm, 1064nm wavelengths', '40–60mm penetration depth', 'Targeted cellular repair'],
  },
  {
    icon: Thermometer,
    title: 'Thermal Cycling System',
    description: 'Programmable temperature oscillation for vascular enhancement and metabolic boost.',
    specs: ['Range: 55°F–128°F', 'Fully programmable cycles', 'Vascular expansion simulation'],
  },
  {
    icon: Wind,
    title: 'Oxygenation Control',
    description: 'Precision atmospheric management for optimal oxygen delivery and cellular respiration.',
    specs: ['O₂ range: 19–28%', 'HEPA/H13 filtration', 'Humidity: 25–70%'],
  },
  {
    icon: Radio,
    title: 'Resonant Frequency Generator',
    description: 'Harmonic frequency entrainment for nervous system balance and cellular coherence.',
    specs: ['0.5 Hz–120 Hz range', 'Anti-inflammatory waveforms', 'Pain-modulation protocols'],
  },
  {
    icon: ShieldCheck,
    title: 'EMF-Shielded Shell',
    description: 'Complete electromagnetic protection creating a pristine healing environment.',
    specs: ['360° shielding coverage', '≤1 mG internal EMF', 'Integrated grounding grid'],
  },
  {
    icon: Activity,
    title: 'Microcirculation Enhancement',
    description: 'Stimulation systems promoting blood flow and nutrient delivery to tissues.',
    specs: ['Pulsed stimulation', 'Capillary optimization', 'Lymphatic support'],
  },
  {
    icon: Droplets,
    title: 'Redox Normalization',
    description: 'Environmental controls supporting cellular redox balance and oxidative stress reduction.',
    specs: ['Antioxidant atmosphere', 'Electron donor enhancement', 'Cellular equilibrium'],
  },
  {
    icon: Leaf,
    title: 'Negative Ion Generation',
    description: 'High-density negative ion output for air quality and mood enhancement.',
    specs: ['High ion concentration', 'Air purification', 'Stress reduction'],
  },
 
];

const TechnologySection = () => {
  return (
    <section id="technology" className="genesis-section relative">
      {/* Background Decoration */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-genesis-gold/3 to-transparent pointer-events-none" />
      
      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-genesis-gold font-medium mb-4 block">Advanced Technology</span>
          <h2 className="genesis-heading mb-6">
            Eleven Integrated
            <span className="block genesis-gradient-text">Therapeutic Systems</span>
          </h2>
          <p className="genesis-subheading mx-auto">
            Each subsystem works in harmony to create the ultimate biological repair environment,
            backed by scientific research and precision engineering.
          </p>
        </motion.div>

        {/* Subsystem Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {subsystems.map((subsystem, index) => (
            <SubsystemCard
              key={index}
              icon={subsystem.icon}
              title={subsystem.title}
              description={subsystem.description}
              specs={subsystem.specs}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default TechnologySection;
