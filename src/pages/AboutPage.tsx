import React from 'react';
import { Shield, Zap, Users, BarChart4 } from 'lucide-react';
import AnimatedCircuit from '../components/AnimatedCircuit';

const AboutPage: React.FC = () => {
  return (
    <div className="min-h-screen pt-20">
      <section className="py-20 relative overflow-hidden">
        <AnimatedCircuit />
        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-purple-500 to-blue-500">
              About Ordi
            </h1>
            <p className="text-xl text-gray-300 leading-relaxed">
              We're on a mission to transform business communication through artificial intelligence that sounds and feels human.
            </p>
          </div>
          
          <div className="bg-gray-900/50 rounded-xl p-8 border border-gray-800 max-w-4xl mx-auto">
          <div className="prose prose-invert max-w-none">
  <p>
    Ordi is a startup building AI agents that handle customer service through phone calls, text messages, and online chats. Designed to sound natural and solve real problems, our AI can answer questions, guide users through processes, make proactive calls, and personalize every interaction based on customer history. With Ordi, businesses can offer 24/7 support, reduce costs, and deliver faster, more satisfying experiences, all while keeping the option to transfer to human agents when needed. We’re redefining the future of customer conversations with intelligent, human-like AI.
  </p>
</div>

          </div>
        </div>
      </section>
      
      <section className="py-16 bg-[#0a192f]">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-xl mx-auto text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-purple-500 to-blue-500">
              Our Core Values
            </h2>
            <p className="text-lg text-gray-400">
              The principles that guide everything we do at Ordi.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-5xl mx-auto">
            <div className="bg-gray-900/50 rounded-xl p-6 border border-gray-800">
              <div className="w-12 h-12 rounded-full bg-purple-500/10 border border-purple-500/30 flex items-center justify-center mb-4">
                <Shield className="w-6 h-6 text-purple-500" />
              </div>
              <h3 className="text-xl font-bold mb-2">Trust & Privacy</h3>
              <p className="text-gray-400">
                We handle sensitive information with the utmost care and transparency, ensuring data security at every step.
              </p>
            </div>
            
            <div className="bg-gray-900/50 rounded-xl p-6 border border-gray-800">
              <div className="w-12 h-12 rounded-full bg-blue-500/10 border border-blue-500/30 flex items-center justify-center mb-4">
                <Zap className="w-6 h-6 text-blue-500" />
              </div>
              <h3 className="text-xl font-bold mb-2">Innovation</h3>
              <p className="text-gray-400">
                We continuously push the boundaries of what's possible, investing heavily in R&D to stay ahead of the curve.
              </p>
            </div>
            
            <div className="bg-gray-900/50 rounded-xl p-6 border border-gray-800">
              <div className="w-12 h-12 rounded-full bg-green-500/10 border border-green-500/30 flex items-center justify-center mb-4">
                <Users className="w-6 h-6 text-green-500" />
              </div>
              <h3 className="text-xl font-bold mb-2">Human-Centered</h3>
              <p className="text-gray-400">
                We design technology that enhances human capabilities rather than replacing them, focusing on collaboration.
              </p>
            </div>
            
            <div className="bg-gray-900/50 rounded-xl p-6 border border-gray-800">
              <div className="w-12 h-12 rounded-full bg-orange-500/10 border border-orange-500/30 flex items-center justify-center mb-4">
                <BarChart4 className="w-6 h-6 text-orange-500" />
              </div>
              <h3 className="text-xl font-bold mb-2">Impact</h3>
              <p className="text-gray-400">
                We measure our success by the tangible value we create for businesses and their customers.
              </p>
            </div>
          </div>
        </div>
      </section>
      
      {/*  */}
    </div>
  );
};

export default AboutPage;