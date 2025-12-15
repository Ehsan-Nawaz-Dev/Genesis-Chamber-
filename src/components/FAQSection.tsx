import { motion } from 'framer-motion';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';

const faqs = [
  {
    question: 'What makes the Genesis Chamber™ different from other wellness devices?',
    answer: 'The Genesis Chamber™ is a multimodal biological repair environment integrating eleven distinct therapeutic subsystems. Unlike single-modality devices, it combines photobiomodulation, thermal cycling, oxygenation control, frequency entrainment, EMF shielding, and real-time biometric feedback in one comprehensive system. This integrated approach allows for synergistic therapeutic effects that cannot be achieved with separate devices.',
  },
  {
    question: 'How long is a typical Genesis Chamber™ session?',
    answer: 'Session length varies based on individual needs and the specific therapy protocols selected. Most users experience optimal benefits with sessions ranging from 20 to 45 minutes. The Central Control Unit (CCU) uses AI-powered optimization to recommend session duration based on your biometric feedback and therapeutic goals.',
  },
  {
    question: 'Is the Genesis Chamber™ safe for everyone?',
    answer: 'The Genesis Chamber™ is designed with safety as a priority, featuring hardwired emergency override controls and software kill-switch protocols. It meets FDA general wellness standards, IEC electrical safety compliance, and EMF exposure limits. However, we recommend consulting with a healthcare provider before use, especially for individuals with pacemakers, photosensitivity conditions, or during pregnancy.',
  },
  {
    question: 'What are the installation requirements?',
    answer: 'The Genesis Chamber™ requires a dedicated space of approximately 8x8 feet with standard 220V electrical connection. Our installation team handles complete setup, calibration, and user training. The chamber includes integrated grounding systems and EMF shielding that work with standard residential and commercial electrical systems.',
  },
  {
    question: 'How does the biometric feedback system work?',
    answer: 'The biometric sensor system continuously monitors heart rate, HRV, respiratory rate, peripheral temperature, galvanic skin response, and SpO₂. This data is processed in real-time by the CCU, which adjusts therapy parameters to optimize your session. All session data is logged for trend analysis and can be reviewed through the user dashboard.',
  },
  {
    question: 'What maintenance is required?',
    answer: 'The Genesis Chamber™ features self-diagnostic systems that monitor all subsystems continuously. Routine maintenance includes filter replacement (HEPA/H13) every 6-12 months and periodic calibration checks. Our support team provides remote diagnostics and can schedule preventive maintenance visits as needed.',
  },
  {
    question: 'What is the warranty coverage?',
    answer: 'The Genesis Chamber™ comes with a comprehensive 3-year warranty covering all electronic components, sensors, and therapeutic subsystems. Extended warranty options are available. Our support team provides lifetime technical assistance and software updates.',
  },
  {
    question: 'Can the Genesis Chamber™ be customized for specific therapeutic needs?',
    answer: 'Yes, the modular architecture allows for customization of therapy protocols, wavelength combinations, frequency patterns, and thermal cycles. Healthcare practitioners can program specific protocols, and the AI-powered CCU can create personalized therapy sequences based on individual biometric data and therapeutic goals.',
  },
];

const FAQSection = () => {
  return (
    <section id="faq" className="genesis-section bg-card">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-genesis-gold font-medium mb-4 block">Common Questions</span>
          <h2 className="genesis-heading mb-6">
            Frequently Asked
            <span className="block genesis-gradient-text">Questions</span>
          </h2>
          <p className="genesis-subheading mx-auto">
            Find answers to common questions about the Genesis Chamber™ technology,
            safety, and implementation.
          </p>
        </motion.div>

        {/* FAQ Accordion */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto"
        >
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="genesis-card px-6 border-none"
              >
                <AccordionTrigger className="text-left font-serif text-lg hover:text-genesis-gold transition-colors py-6 hover:no-underline">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground leading-relaxed pb-6">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </motion.div>
      </div>
    </section>
  );
};

export default FAQSection;
