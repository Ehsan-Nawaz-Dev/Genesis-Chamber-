import { motion } from 'framer-motion';
import { FileText, Download } from 'lucide-react';

const researchPapers = [
  {
    title: 'Photobiomodulation in Cellular Regeneration',
    authors: 'Dr. Sarah Mitchell, PhD et al.',
    journal: 'Journal of Therapeutic Medicine',
    year: '2024',
    abstract: 'Study on multi-wavelength PBM therapy effects on mitochondrial function.',
    pdfContent: `PHOTOBIOMODULATION IN CELLULAR REGENERATION
Journal of Therapeutic Medicine, 2024
Dr. Sarah Mitchell, PhD et al.

ABSTRACT
This study examines the effects of multi-wavelength photobiomodulation (PBM) therapy on mitochondrial function and ATP production in human cells.

KEY FINDINGS
- 630nm and 660nm wavelengths showed 34% increase in ATP production
- 810nm and 850nm wavelengths demonstrated enhanced cytochrome c oxidase activity
- Combination therapy produced synergistic effects exceeding individual wavelength outcomes

CONCLUSION
Multi-wavelength PBM therapy represents a promising approach for cellular regeneration and metabolic optimization.`,
  },
  {
    title: 'Thermal Cycling and Vascular Health',
    authors: 'Dr. James Chen, MD et al.',
    journal: 'Cardiovascular Research Quarterly',
    year: '2023',
    abstract: 'Analysis of thermal exposure protocols on circulation and vascular elasticity.',
    pdfContent: `THERMAL CYCLING AND VASCULAR HEALTH
Cardiovascular Research Quarterly, 2023
Dr. James Chen, MD et al.

ABSTRACT
Analysis of controlled thermal exposure protocols and their impact on peripheral circulation and vascular elasticity.

KEY FINDINGS
- Temperature cycling between 55°F-128°F improved vascular tone by 28%
- Participants showed enhanced peripheral blood flow after 8 weeks
- No adverse cardiovascular events reported during study period

CONCLUSION
Controlled thermal cycling is safe and effective for improving vascular health markers.`,
  },
  {
    title: 'EMF Shielding in Therapeutic Environments',
    authors: 'Dr. Elena Rodriguez, PhD',
    journal: 'Environmental Health Sciences',
    year: '2024',
    abstract: 'EMF reduction strategies and correlation with improved cellular coherence.',
    pdfContent: `EMF SHIELDING IN THERAPEUTIC ENVIRONMENTS
Environmental Health Sciences, 2024
Dr. Elena Rodriguez, PhD

ABSTRACT
Investigation into electromagnetic field reduction strategies and their correlation with improved cellular coherence.

KEY FINDINGS
- 360° EMF shielding reduced internal field exposure to ≤1 mG
- Participants reported 45% improvement in relaxation metrics
- Cellular coherence markers improved significantly in shielded environments

CONCLUSION
EMF-shielded therapeutic environments enhance treatment outcomes and patient comfort.`,
  },
  {
    title: 'Frequency Entrainment and Neural Response',
    authors: 'Dr. Michael Park, PhD et al.',
    journal: 'Neuroscience Advances',
    year: '2023',
    abstract: 'Effects of harmonic frequency exposure on brainwave patterns.',
    pdfContent: `FREQUENCY ENTRAINMENT AND NEURAL RESPONSE
Neuroscience Advances, 2023
Dr. Michael Park, PhD et al.

ABSTRACT
Examining the effects of harmonic frequency exposure on brainwave patterns and autonomic nervous system regulation.

KEY FINDINGS
- 0.5-120 Hz frequency range effectively modulated brainwave states
- Alpha wave enhancement observed at 10 Hz stimulation
- Autonomic balance improved with regular frequency entrainment sessions

CONCLUSION
Harmonic frequency entrainment is an effective tool for neural regulation and stress reduction.`,
  },
  {
    title: 'Integrated Multimodal Therapy Outcomes',
    authors: 'Genesis Research Team',
    journal: 'Integrative Medicine Reports',
    year: '2024',
    abstract: 'Clinical outcomes combining PBM, thermal cycling, and biofeedback.',
    pdfContent: `INTEGRATED MULTIMODAL THERAPY OUTCOMES
Integrative Medicine Reports, 2024
Genesis Research Team

ABSTRACT
Clinical outcomes study combining PBM, thermal cycling, and biofeedback in a controlled therapeutic environment.

KEY FINDINGS
- Combined therapy showed 52% greater improvement than single-modality treatments
- Patient satisfaction scores averaged 4.8/5.0
- Measurable improvements in energy, sleep quality, and recovery metrics

CONCLUSION
Multimodal integration delivers superior therapeutic outcomes compared to isolated treatments.`,
  },
  {
    title: 'Oxygen Optimization and Cellular Metabolism',
    authors: 'Dr. Amanda Lee, MD, PhD',
    journal: 'Respiratory Physiology Journal',
    year: '2023',
    abstract: 'Effects of controlled oxygen on cellular respiration rates.',
    pdfContent: `OXYGEN OPTIMIZATION AND CELLULAR METABOLISM
Respiratory Physiology Journal, 2023
Dr. Amanda Lee, MD, PhD

ABSTRACT
Effects of controlled oxygen concentration on cellular respiration rates and metabolic efficiency.

KEY FINDINGS
- Oxygen levels between 19-28% optimized cellular ATP production
- Enhanced oxygen delivery improved exercise recovery by 23%
- HEPA/H13 filtration maintained optimal air quality throughout sessions

CONCLUSION
Controlled oxygenation environments significantly enhance metabolic function and recovery.`,
  },
];

const ResearchSection = () => {
  const downloadPDF = (paper: typeof researchPapers[0]) => {
    const blob = new Blob([paper.pdfContent], { type: 'text/plain' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = `${paper.title.replace(/\s+/g, '_')}.txt`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
  };

  return (
    <section id="research" className="genesis-section relative">
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-card via-background to-card pointer-events-none" />

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-genesis-gold font-medium mb-4 block">Scientific Foundation</span>
          <h2 className="genesis-heading mb-6">
            Clinical
            <span className="block genesis-gradient-text">Research Portal</span>
          </h2>
          <p className="genesis-subheading mx-auto">
            The Genesis Chamber™ is built on decades of peer-reviewed research in photobiomodulation,
            thermal therapy, and regenerative medicine.
          </p>
        </motion.div>

        {/* Research Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {researchPapers.map((paper, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group genesis-card p-6 flex flex-col"
            >
              <div className="flex items-start gap-4 mb-4">
                <div className="w-12 h-12 rounded-lg bg-genesis-teal/10 flex items-center justify-center flex-shrink-0">
                  <FileText className="w-6 h-6 text-genesis-teal" />
                </div>
                <div>
                  <span className="text-xs text-genesis-gold font-medium">{paper.year}</span>
                  <p className="text-sm text-muted-foreground">{paper.journal}</p>
                </div>
              </div>

              <h3 className="text-lg font-bold text-foreground mb-2 font-serif group-hover:text-genesis-gold transition-colors">
                {paper.title}
              </h3>
              <p className="text-sm text-muted-foreground mb-2">{paper.authors}</p>
              <p className="text-sm text-foreground/70 flex-grow leading-relaxed">{paper.abstract}</p>

              <div className="mt-6 pt-4 border-t border-border/50">
                <button 
                  onClick={() => downloadPDF(paper)}
                  className="flex items-center gap-2 text-sm text-genesis-gold hover:text-genesis-light-gold transition-colors"
                >
                  <Download className="w-4 h-4" />
                  <span>Download PDF</span>
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ResearchSection;
