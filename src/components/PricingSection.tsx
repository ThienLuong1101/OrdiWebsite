import React, { useState } from 'react';
import { Check, HelpCircle } from 'lucide-react';

interface PlanFeature {
  name: string;
  included: boolean;
  tooltip?: string;
}

interface Plan {
  name: string;
  description: string;
  price: string;
  billing: string;
  features: PlanFeature[];
  highlight?: boolean;
  buttonText: string;
}

const PricingSection: React.FC = () => {
  const [billingCycle, setBillingCycle] = useState<'monthly' | 'yearly'>('monthly');
  
  const plans: Plan[] = [
    {
      name: "Starter",
      description: "Perfect for small businesses just getting started",
      price: billingCycle === 'monthly' ? "$99" : "$79",
      billing: billingCycle === 'monthly' ? "per month" : "per month, billed annually",
      features: [
        { name: "500 call minutes/month", included: true },
        { name: "Basic call analytics", included: true },
        { name: "Email support", included: true },
        { name: "1 phone number", included: true },
        { name: "Standard voice model", included: true },
        { name: "CRM integration", included: false, tooltip: "Connect to your existing CRM systems" },
        { name: "Custom voice training", included: false },
        { name: "Priority support", included: false }
      ],
      buttonText: "Get Started"
    },
    {
      name: "Professional",
      description: "Ideal for growing businesses with higher call volumes",
      price: billingCycle === 'monthly' ? "$249" : "$199",
      billing: billingCycle === 'monthly' ? "per month" : "per month, billed annually",
      features: [
        { name: "2,000 call minutes/month", included: true },
        { name: "Advanced analytics dashboard", included: true },
        { name: "Email and chat support", included: true },
        { name: "Up to 5 phone numbers", included: true },
        { name: "Enhanced voice model", included: true },
        { name: "CRM integration", included: true },
        { name: "Custom voice training", included: false },
        { name: "Priority support", included: false }
      ],
      highlight: true,
      buttonText: "Try Pro"
    },
    {
      name: "Enterprise",
      description: "Custom solutions for large organizations",
      price: "Custom",
      billing: "Contact us for pricing",
      features: [
        { name: "Unlimited call minutes", included: true },
        { name: "Enterprise analytics & reporting", included: true },
        { name: "24/7 dedicated support", included: true },
        { name: "Unlimited phone numbers", included: true },
        { name: "Premium voice model", included: true },
        { name: "Advanced CRM integration", included: true },
        { name: "Custom voice training", included: true },
        { name: "Priority support", included: true }
      ],
      buttonText: "Contact Sales"
    }
  ];

  return (
    <section className="py-20 bg-[#0a192f]">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-xl mx-auto text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-purple-500 to-blue-500">
            Simple, Transparent Pricing
          </h2>
          <p className="text-lg text-gray-400">
            Choose the plan that best fits your business needs.
          </p>
          
          <div className="flex items-center justify-center mt-8">
            <div className="bg-gray-800 p-1 rounded-full flex items-center">
              <button
                onClick={() => setBillingCycle('monthly')}
                className={`px-4 py-2 rounded-full text-sm ${
                  billingCycle === 'monthly' 
                    ? 'bg-gradient-to-r from-purple-600 to-blue-600 text-white' 
                    : 'text-gray-400'
                }`}
              >
                Monthly
              </button>
              
              <button
                onClick={() => setBillingCycle('yearly')}
                className={`px-4 py-2 rounded-full text-sm flex items-center ${
                  billingCycle === 'yearly' 
                    ? 'bg-gradient-to-r from-purple-600 to-blue-600 text-white' 
                    : 'text-gray-400'
                }`}
              >
                Yearly
                <span className="ml-2 text-xs px-2 py-0.5 rounded-full bg-green-500/20 text-green-400">
                  Save 20%
                </span>
              </button>
            </div>
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <div 
              key={index}
              className={`rounded-xl overflow-hidden ${
                plan.highlight 
                  ? 'border-2 border-purple-500 ring-4 ring-purple-500/20' 
                  : 'border border-gray-800'
              }`}
            >
              {plan.highlight && (
                <div className="bg-gradient-to-r from-purple-600 to-blue-600 text-white text-center py-1 text-sm font-medium">
                  Most Popular
                </div>
              )}
              
              <div className="p-6 bg-gray-900/50 h-full flex flex-col">
                <h3 className="text-xl font-bold mb-1">{plan.name}</h3>
                <p className="text-gray-400 text-sm mb-6">{plan.description}</p>
                
                <div className="mb-6">
                  <div className="flex items-end">
                    <span className="text-4xl font-bold">{plan.price}</span>
                    <span className="text-gray-400 ml-2">{plan.billing}</span>
                  </div>
                </div>
                
                <ul className="space-y-3 mb-8 flex-grow">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-start">
                      <div className={`mt-1 ${feature.included ? 'text-green-500' : 'text-gray-600'}`}>
                        <Check className="w-4 h-4" />
                      </div>
                      <span className={`ml-2 text-sm ${feature.included ? 'text-gray-300' : 'text-gray-500'}`}>
                        {feature.name}
                      </span>
                      
                      {feature.tooltip && (
                        <div className="ml-1 group relative">
                          <HelpCircle className="w-4 h-4 text-gray-500" />
                          <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 w-48 p-2 bg-gray-800 rounded text-xs text-gray-300 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
                            {feature.tooltip}
                          </div>
                        </div>
                      )}
                    </li>
                  ))}
                </ul>
                
                <button 
                  className={`w-full py-2 rounded-md transition-all ${
                    plan.highlight 
                      ? 'bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white' 
                      : 'bg-gray-800 hover:bg-gray-700 text-white'
                  }`}
                >
                  {plan.buttonText}
                </button>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-12 bg-gray-900/50 border border-gray-800 rounded-xl p-6 max-w-3xl mx-auto">
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-2/3 mb-6 md:mb-0">
              <h3 className="text-xl font-bold mb-2">Need a custom solution?</h3>
              <p className="text-gray-400">
                Contact our sales team to build a plan that perfectly suits your business needs.
              </p>
            </div>
            <div className="md:w-1/3 md:text-right">
              <button className="bg-gray-800 hover:bg-gray-700 px-4 py-2 rounded-md transition-colors">
                Contact Sales
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PricingSection;