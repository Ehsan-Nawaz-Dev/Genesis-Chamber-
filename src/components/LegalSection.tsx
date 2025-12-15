import { motion } from 'framer-motion';
import { useState } from 'react';
import { Shield, FileText, Award, X } from 'lucide-react';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog';

const legalCards = [
  {
    id: 'privacy',
    icon: Shield,
    title: 'Privacy Policy',
    description: 'How we collect, use, and protect your personal information.',
    content: `
## Privacy Policy

**Effective Date: January 1, 2024**

### 1. Information We Collect

Genesis Chamber™ collects information you provide directly, including:
- Name, email address, phone number, and billing information when you make a purchase
- Health and wellness preferences when using our products
- Communication preferences and feedback

### 2. How We Use Your Information

We use collected information to:
- Process orders and deliver products
- Provide customer support and respond to inquiries
- Send important updates about your purchase or product
- Improve our products and services
- Comply with legal obligations

### 3. Data Protection

We implement industry-standard security measures to protect your data:
- SSL encryption for all data transmission
- Secure data storage with restricted access
- Regular security audits and updates
- Employee training on data protection

### 4. Third-Party Sharing

We do not sell your personal information. We may share data with:
- Payment processors to complete transactions
- Shipping partners to deliver products
- Service providers who assist our operations (under strict confidentiality agreements)

### 5. Your Rights

You have the right to:
- Access your personal data
- Request correction of inaccurate data
- Request deletion of your data
- Opt-out of marketing communications

### 6. Cookies

Our website uses cookies to enhance your experience. You can manage cookie preferences through your browser settings.

### 7. Contact Us

For privacy-related inquiries, contact us at privacy@genesischamber.com
    `,
  },
  {
    id: 'terms',
    icon: FileText,
    title: 'Terms of Service',
    description: 'Terms and conditions governing your use of our products and services.',
    content: `
## Terms of Service

**Last Updated: January 1, 2024**

### 1. Acceptance of Terms

By purchasing or using the Genesis Chamber™, you agree to these Terms of Service. If you do not agree, please do not use our products or services.

### 2. Product Description

The Genesis Chamber™ is a wellness device designed to support general health and well-being. It is not a medical device and is not intended to diagnose, treat, cure, or prevent any disease.

### 3. Purchase Terms

- All prices are in USD unless otherwise stated
- Payment is required in full at time of purchase
- Financing options may be available through third-party providers
- Delivery timelines are estimates and may vary

### 4. Installation

- Professional installation is included with your purchase
- You are responsible for providing suitable installation space
- Electrical requirements must be met before installation
- Installation scheduling is subject to availability

### 5. Intellectual Property

All content, designs, and technology related to Genesis Chamber™ are protected by intellectual property laws. Unauthorized reproduction or distribution is prohibited.

### 6. Limitation of Liability

Genesis Chamber™ and its affiliates shall not be liable for:
- Indirect, incidental, or consequential damages
- Loss of profits or data
- Personal injury from misuse of the product

### 7. Indemnification

You agree to indemnify Genesis Chamber™ against any claims arising from your misuse of the product or violation of these terms.

### 8. Governing Law

These terms are governed by the laws of the State of California, USA.

### 9. Modifications

We reserve the right to modify these terms at any time. Continued use constitutes acceptance of updated terms.
    `,
  },
  {
    id: 'warranty',
    icon: Award,
    title: 'Warranty',
    description: 'Comprehensive coverage and protection for your Genesis Chamber™.',
    content: `
## Warranty Coverage

**Genesis Chamber™ Limited Warranty**

### Standard Coverage (3 Years)

Your Genesis Chamber™ includes a comprehensive 3-year limited warranty covering:

**Covered Components:**
- Central Control Unit (CCU)
- PBM Light Engine and NIR Module
- Thermal Cycling System
- Oxygenation Control Module
- Resonant Frequency Generator
- EMF Shielding Components
- Biometric Sensor Array
- Microcirculation Enhancement System
- All electronic components and wiring

### What's Covered

- Manufacturing defects in materials and workmanship
- Component failure under normal use
- Software malfunctions and updates
- Sensor calibration issues
- Electrical system failures

### What's Not Covered

- Damage from misuse, abuse, or unauthorized modifications
- Cosmetic damage (scratches, dents) not affecting function
- Damage from power surges or improper electrical supply
- Normal wear and tear
- Damage from failure to follow installation requirements

### Extended Warranty Options

**5-Year Extended Protection** - $4,999
- Extends all coverage for additional 2 years
- Priority service scheduling
- One free comprehensive maintenance visit

**Lifetime Premium Protection** - $12,999
- Unlimited warranty coverage
- Priority 24/7 support line
- Annual maintenance visits included
- Component upgrade eligibility

### Claim Process

1. Contact our support team at warranty@genesischamber.com
2. Provide your unit serial number and purchase date
3. Describe the issue in detail
4. Our technician will diagnose remotely or schedule a visit
5. Covered repairs are completed at no charge

### Service Response Times

- Remote diagnosis: Within 24 hours
- On-site service: Within 5 business days
- Emergency support: Same-day response available

### Contact

Warranty Support: 1-888-555-0123
Email: warranty@genesischamber.com
    `,
  },
];

const LegalSection = () => {
  const [selectedCard, setSelectedCard] = useState<string | null>(null);

  const selectedContent = legalCards.find((card) => card.id === selectedCard);

  return (
    <section className="genesis-section bg-card">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-genesis-gold font-medium mb-4 block">Legal Information</span>
          <h2 className="genesis-heading mb-6">
            Policies &
            <span className="block genesis-gradient-text">Protection</span>
          </h2>
          <p className="genesis-subheading mx-auto">
            Review our policies and warranty coverage to understand your rights
            and our commitments to you.
          </p>
        </motion.div>

        {/* Cards Grid */}
        <div className="grid md:grid-cols-3 gap-6 lg:gap-8 max-w-5xl mx-auto">
          {legalCards.map((card, index) => (
            <motion.div
              key={card.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              onClick={() => setSelectedCard(card.id)}
              className="group genesis-card p-8 text-center cursor-pointer hover:border-genesis-gold/50 transition-all"
            >
              <div className="w-16 h-16 rounded-2xl bg-genesis-gold/10 flex items-center justify-center mx-auto mb-6 group-hover:bg-genesis-gold/20 transition-colors">
                <card.icon className="w-8 h-8 text-genesis-gold" />
              </div>
              <h3 className="text-xl font-bold text-foreground mb-3 font-serif group-hover:text-genesis-gold transition-colors">
                {card.title}
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                {card.description}
              </p>
              <div className="mt-6">
                <span className="text-sm font-medium text-genesis-gold group-hover:underline">
                  Read More →
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Modal */}
      <Dialog open={!!selectedCard} onOpenChange={() => setSelectedCard(null)}>
        <DialogContent className="max-w-3xl max-h-[80vh] overflow-y-auto bg-card border-border">
          <DialogHeader>
            <DialogTitle className="flex items-center gap-3 text-2xl font-serif">
              {selectedContent && (
                <>
                  <div className="w-10 h-10 rounded-lg bg-genesis-gold/10 flex items-center justify-center">
                    <selectedContent.icon className="w-5 h-5 text-genesis-gold" />
                  </div>
                  {selectedContent.title}
                </>
              )}
            </DialogTitle>
          </DialogHeader>
          <div className="prose prose-sm max-w-none mt-4">
            {selectedContent && (
              <div className="text-foreground/80 space-y-4">
                {selectedContent.content.split('\n').map((line, i) => {
                  if (line.startsWith('## ')) {
                    return (
                      <h2 key={i} className="text-xl font-bold text-foreground mt-6 mb-4 font-serif">
                        {line.replace('## ', '')}
                      </h2>
                    );
                  }
                  if (line.startsWith('### ')) {
                    return (
                      <h3 key={i} className="text-lg font-semibold text-foreground mt-5 mb-2">
                        {line.replace('### ', '')}
                      </h3>
                    );
                  }
                  if (line.startsWith('**') && line.endsWith('**')) {
                    return (
                      <p key={i} className="font-semibold text-foreground">
                        {line.replace(/\*\*/g, '')}
                      </p>
                    );
                  }
                  if (line.startsWith('- ')) {
                    return (
                      <li key={i} className="ml-4 text-muted-foreground">
                        {line.replace('- ', '')}
                      </li>
                    );
                  }
                  if (line.trim()) {
                    return (
                      <p key={i} className="text-muted-foreground leading-relaxed">
                        {line}
                      </p>
                    );
                  }
                  return null;
                })}
              </div>
            )}
          </div>
        </DialogContent>
      </Dialog>
    </section>
  );
};

export default LegalSection;
