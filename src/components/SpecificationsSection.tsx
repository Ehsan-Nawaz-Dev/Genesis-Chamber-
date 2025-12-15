import { motion } from 'framer-motion';
import { Check } from 'lucide-react';

const specifications = {
  photonThermal: {
    title: 'Photon & Thermal Engineering',
    items: [
      { label: 'PBM Wavelength Bands', value: '630nm, 660nm, 810nm, 850nm' },
      { label: 'Output Intensity', value: '5–100 mW/cm² adjustable' },
      { label: 'Pulse Frequencies', value: '1–500 Hz' },
      { label: 'NIR Wavelengths', value: '980nm, 1064nm' },
      { label: 'Penetration Depth', value: '40–60 mm' },
      { label: 'Thermal Range', value: '55°F–128°F' },
    ],
  },
  atmospheric: {
    title: 'Atmospheric Control',
    items: [
      { label: 'Oxygen Concentration', value: '19–28%' },
      { label: 'CO₂ Scrubbing', value: 'Built-in active system' },
      { label: 'Humidity Control', value: '25–70%' },
      { label: 'Filtration', value: 'HEPA/H13 grade' },
      { label: 'Airflow', value: 'Controlled cycling' },
    ],
  },
  frequency: {
    title: 'Frequency & EMF',
    items: [
      { label: 'Harmonic Range', value: '0.5 Hz–120 Hz' },
      { label: 'Waveform Types', value: 'Anti-inflammatory, Pain-modulation, Coherence' },
      { label: 'EMF Shielding', value: '360° coverage' },
      { label: 'Internal EMF', value: '≤ 1 mG target' },
      { label: 'Grounding', value: 'Integrated grid system' },
    ],
  },
  biometric: {
    title: 'Biometric Sensors',
    items: [
      { label: 'Heart Rate', value: 'Real-time monitoring' },
      { label: 'HRV Analysis', value: 'Continuous tracking' },
      { label: 'SpO₂', value: 'Oxygen saturation' },
      { label: 'Temperature', value: 'Peripheral monitoring' },
      { label: 'GSR', value: 'Galvanic skin response' },
      { label: 'Respiratory Rate', value: 'Breath tracking' },
    ],
  },
};

const certifications = [
  'FDA General Wellness Standard Alignment',
  'IEC Electrical Safety Compliance',
  'EMF Exposure Limits Certified',
  'Thermal Safety Tolerances Met',
  'Internal Software Kill-Switch Protocols',
];

const SpecificationsSection = () => {
  return (
    <section id="specifications" className="genesis-section bg-card relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, hsl(var(--genesis-gold) / 0.2) 1px, transparent 0)`,
          backgroundSize: '40px 40px',
        }} />
      </div>

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-genesis-gold font-medium mb-4 block">Technical Specifications</span>
          <h2 className="genesis-heading mb-6">
            Engineering
            <span className="block genesis-gradient-text">Excellence</span>
          </h2>
          <p className="genesis-subheading mx-auto">
            Every component of the Genesis Chamber™ is engineered to the highest standards
            for optimal therapeutic outcomes.
          </p>
        </motion.div>

        {/* Specs Grid */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {Object.entries(specifications).map(([key, section], index) => (
            <motion.div
              key={key}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="genesis-card p-6 lg:p-8"
            >
              <h3 className="text-xl font-bold text-foreground mb-6 font-serif flex items-center gap-3">
                <div className="w-2 h-8 bg-genesis-gold rounded-full" />
                {section.title}
              </h3>
              <div className="space-y-4">
                {section.items.map((item, i) => (
                  <div key={i} className="flex justify-between items-center py-2 border-b border-border/50 last:border-0">
                    <span className="text-muted-foreground">{item.label}</span>
                    <span className="font-medium text-foreground">{item.value}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Certifications */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="genesis-card p-8 lg:p-12"
        >
          <h3 className="text-2xl font-bold text-foreground mb-8 font-serif text-center">
            Safety & Compliance Certifications
          </h3>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {certifications.map((cert, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="flex items-center gap-3 p-4 rounded-lg bg-genesis-gold/5 border border-genesis-gold/20"
              >
                <div className="w-6 h-6 rounded-full bg-genesis-gold/20 flex items-center justify-center flex-shrink-0">
                  <Check className="w-4 h-4 text-genesis-gold" />
                </div>
                <span className="text-sm text-foreground">{cert}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default SpecificationsSection;
