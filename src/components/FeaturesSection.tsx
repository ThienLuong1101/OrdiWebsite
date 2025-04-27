import React from 'react';
import FeatureCard from './FeatureCard';
import { Phone, BrainCircuit, LineChart, ShieldCheck, Clock, Users, HeadphonesIcon, Bot } from 'lucide-react';

const FeaturesSection: React.FC = () => {
  return (
    <section className="py-20 bg-gray-900/50 relative">
      <div className="absolute top-0 inset-x-0 h-40 bg-gradient-to-b from-[#0a192f] to-transparent"></div>
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="max-w-xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-purple-500 to-blue-500">
            State-of-the-Art Features
          </h2>
          <p className="text-lg text-gray-400">
            Ordi combines advanced AI technologies to deliver a seamless, intelligent phone call experience.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          <FeatureCard 
            icon={Phone}
            title="Natural Conversations"
            description="Engage in fluid, natural conversations with customers using our advanced natural language processing."
          />
          
          <FeatureCard 
            icon={BrainCircuit}
            title="Context Awareness"
            description="Ordi understands context and remembers details from current and previous conversations."
          />
          
          <FeatureCard 
            icon={LineChart}
            title="Analytics Dashboard"
            description="Get insights from every call with our comprehensive analytics and reporting tools."
          />
          
          <FeatureCard 
            icon={ShieldCheck}
            title="Enterprise Security"
            description="End-to-end encryption and compliance with industry standards keep your data safe."
          />
          
          <FeatureCard 
            icon={Clock}
            title="24/7 Availability"
            description="Never miss a call with round-the-clock service that doesn't require breaks or time off."
          />
          
          <FeatureCard 
            icon={HeadphonesIcon}
            title="Seamless Handoff"
            description="Easily transfer calls to human agents when needed with full context preservation."
          />
          
          <FeatureCard 
            icon={Users}
            title="Personalization"
            description="Customize interactions based on caller history and preferences for a tailored experience."
          />
          
          <FeatureCard 
            icon={Bot}
            title="Multi-language Support"
            description="Communicate with customers in multiple languages to expand your global reach."
          />
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;