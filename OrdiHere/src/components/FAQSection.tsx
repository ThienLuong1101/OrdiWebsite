import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

interface FAQItem {
  question: string;
  answer: string;
}

const FAQSection: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  
  const faqs: FAQItem[] = [
    {
      question: "How accurate is Ordi's voice recognition?",
      answer: "Ordi achieves over 98% accuracy in voice recognition across various accents and environments. Our AI is continuously trained on diverse speech patterns to ensure high performance even in challenging acoustic conditions."
    },
    {
      question: "Can Ordi integrate with our existing systems?",
      answer: "Yes, Ordi offers seamless integration with popular CRM systems, helpdesk software, and telephony infrastructure. We provide APIs and pre-built connectors for platforms like Salesforce, Zendesk, HubSpot, and more."
    },
    {
      question: "What languages does Ordi support?",
      answer: "Ordi currently supports English, Spanish, French, German, Mandarin, Japanese, and Portuguese. We're continuously adding more languages to our portfolio based on customer demand."
    },
    {
      question: "How does Ordi handle complex customer inquiries?",
      answer: "Ordi is designed to handle a wide range of inquiries using contextual understanding and knowledge base integration. For particularly complex issues, Ordi can smoothly transfer the call to a human agent with complete context preservation."
    },
    {
      question: "Is Ordi compliant with privacy regulations?",
      answer: "Yes, Ordi is designed with privacy in mind and complies with regulations like GDPR, CCPA, and HIPAA. We implement end-to-end encryption, data minimization practices, and provide tools for data retention management."
    },
    {
      question: "Can we customize Ordi's voice and responses?",
      answer: "Absolutely. You can customize Ordi's voice, tone, speaking style, and response patterns to align with your brand identity. Our enterprise plans include voice cloning capabilities to create a truly unique experience."
    }
  ];
  
  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-20 bg-gradient-to-br from-gray-900 to-[#0a192f]">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-purple-500 to-blue-500">
            Frequently Asked Questions
          </h2>
          <p className="text-lg text-gray-400">
            Find answers to common questions about Ordi and its capabilities.
          </p>
        </div>
        
        <div className="max-w-3xl mx-auto">
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div 
                key={index}
                className={`border rounded-xl overflow-hidden transition-all ${
                  openIndex === index 
                    ? 'border-purple-500/30 bg-purple-900/10' 
                    : 'border-gray-800 bg-gray-900/30'
                }`}
              >
                <button
                  className="flex justify-between items-center w-full p-4 text-left"
                  onClick={() => toggleFAQ(index)}
                >
                  <span className="font-medium text-lg">{faq.question}</span>
                  {openIndex === index ? (
                    <ChevronUp className="w-5 h-5 text-purple-500" />
                  ) : (
                    <ChevronDown className="w-5 h-5 text-gray-400" />
                  )}
                </button>
                
                {openIndex === index && (
                  <div className="p-4 pt-0 text-gray-400">
                    {faq.answer}
                  </div>
                )}
              </div>
            ))}
          </div>
          
          <div className="mt-12 text-center">
            <p className="text-gray-400 mb-4">Still have questions?</p>
            <button className="bg-gradient-to-r from-purple-600 to-blue-600 px-6 py-3 rounded-md text-base font-medium hover:from-purple-700 hover:to-blue-700 transition-all shadow-lg">
              Contact Support
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;