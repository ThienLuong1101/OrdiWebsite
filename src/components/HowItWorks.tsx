import React from 'react';
import { PhoneCall, MessageSquare, Zap, CheckCircle } from 'lucide-react';

const HowItWorks: React.FC = () => {
  const steps = [
    {
      icon: PhoneCall,
      title: "Incoming Call",
      description: "Ordi answers incoming calls instantly, greeting callers with a personalized message.",
      color: "from-blue-600 to-blue-400"
    },
    {
      icon: MessageSquare,
      title: "Natural Conversation",
      description: "Using advanced NLP, Ordi engages in natural-sounding conversation to understand caller needs.",
      color: "from-purple-600 to-purple-400"
    },
    {
      icon: Zap,
      title: "Intelligent Processing",
      description: "AI processes the request in real-time, accessing relevant information from your systems.",
      color: "from-pink-600 to-pink-400"
    },
    {
      icon: CheckCircle,
      title: "Resolution & Follow-up",
      description: "Ordi resolves inquiries or routes complex issues to the right team with full context.",
      color: "from-green-600 to-green-400"
    }
  ];

  return (
    <section className="py-20 bg-[#0a192f] relative">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-purple-500 to-blue-500">
            How Ordi Works
          </h2>
          <p className="text-lg text-gray-400">
            Our AI-powered solution handles calls with precision and care in four simple steps.
          </p>
        </div>

        <div className="relative">
          {/* Connecting Line */}
          <div className="absolute top-1/2 left-0 right-0 h-1 bg-gray-800 -translate-y-1/2 hidden md:block"></div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 relative z-10">
            {steps.map((step, index) => {
              const Icon = step.icon;
              return (
                <div key={index} className="flex flex-col items-center">
                  <div className={`w-16 h-16 rounded-full bg-gradient-to-r ${step.color} flex items-center justify-center mb-6 relative shadow-lg`}>
                    <Icon className="w-8 h-8 text-white" />
                    
                    {/* Step Number */}
                    <div className="absolute -top-2 -right-2 w-6 h-6 rounded-full bg-white text-gray-900 flex items-center justify-center text-xs font-bold">
                      {index + 1}
                    </div>
                  </div>
                  
                  <h3 className="text-xl font-bold mb-2 text-center">{step.title}</h3>
                  <p className="text-gray-400 text-center">{step.description}</p>
                </div>
              );
            })}
          </div>
        </div>
        
        <div className="mt-16 text-center">
          <button className="bg-gradient-to-r from-purple-600 to-blue-600 px-6 py-3 rounded-md text-base font-medium hover:from-purple-700 hover:to-blue-700 transition-all shadow-lg">
            Schedule a Demo
          </button>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;