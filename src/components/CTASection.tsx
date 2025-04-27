import React from 'react';
import { ArrowRight } from 'lucide-react';

const CTASection: React.FC = () => {
  return (
    <section className="py-20 bg-gradient-to-r from-purple-900/30 to-blue-900/30 relative overflow-hidden">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-purple-600/20 rounded-full blur-3xl opacity-50"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-blue-600/20 rounded-full blur-3xl opacity-50"></div>
      </div>

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="max-w-4xl mx-auto bg-gray-900/70 backdrop-blur-sm rounded-2xl p-8 md:p-12 border border-purple-500/20 shadow-xl">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-purple-500 to-blue-500">
                Ready to Transform Your Business?
              </h2>
              <p className="text-lg text-gray-300 mb-6">
                Join thousands of businesses already using Ordi to handle their calls with precision and care.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <button className="bg-gradient-to-r from-purple-600 to-blue-600 px-6 py-3 rounded-md text-base font-medium hover:from-purple-700 hover:to-blue-700 transition-all shadow-lg flex items-center justify-center">
                  Start Free Trial <ArrowRight className="ml-2 w-4 h-4" />
                </button>
                <button className="border border-purple-500/30 bg-purple-500/10 hover:bg-purple-500/20 px-6 py-3 rounded-md text-base font-medium transition-all">
                  Schedule Demo
                </button>
              </div>
              <p className="text-sm text-gray-400 mt-4">
                No credit card required. 14-day free trial.
              </p>
            </div>
            
            <div className="relative">
              <div className="bg-gradient-to-br from-purple-500/10 to-blue-500/10 p-6 rounded-xl border border-purple-500/20">
                <div className="space-y-4">
                  <div className="flex items-center">
                    <div className="w-8 h-8 rounded-full bg-green-500/20 border border-green-500/30 flex items-center justify-center mr-3">
                      <svg className="w-4 h-4 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <span className="text-gray-300">Reduce call handling costs by up to 80%</span>
                  </div>
                  
                  <div className="flex items-center">
                    <div className="w-8 h-8 rounded-full bg-green-500/20 border border-green-500/30 flex items-center justify-center mr-3">
                      <svg className="w-4 h-4 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <span className="text-gray-300">Increase customer satisfaction by 35%</span>
                  </div>
                  
                  <div className="flex items-center">
                    <div className="w-8 h-8 rounded-full bg-green-500/20 border border-green-500/30 flex items-center justify-center mr-3">
                      <svg className="w-4 h-4 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <span className="text-gray-300">24/7 availability without additional staffing</span>
                  </div>
                  
                  <div className="flex items-center">
                    <div className="w-8 h-8 rounded-full bg-green-500/20 border border-green-500/30 flex items-center justify-center mr-3">
                      <svg className="w-4 h-4 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <span className="text-gray-300">Setup in minutes, not months</span>
                  </div>
                </div>
                
                {/* <div className="mt-6 pt-6 border-t border-gray-800">
                  <div className="flex items-center">
                    <img src="https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="CEO" className="w-12 h-12 rounded-full object-cover mr-4" />
                    <div>
                      <p className="text-sm italic text-gray-300">
                        "Ordi has revolutionized how we handle customer calls. It's like having a perfect receptionist who never takes a day off."
                      </p>
                      <p className="text-sm font-medium mt-1">David Kim, CEO at Quantum Retail</p>
                    </div>
                  </div>
                </div> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;