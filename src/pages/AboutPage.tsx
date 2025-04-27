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
                Founded in 2023, Ordi emerged from a simple yet powerful insight: businesses were spending countless hours and resources on phone calls that could be handled more efficiently with the right technology.
              </p>
              
              <p>
                Our team of AI researchers, linguists, and customer experience experts came together to create a solution that wouldn't just automate calls but would enhance the entire communication experience for both businesses and their customers.
              </p>
              
              <p>
                Unlike other voice AI systems that feel robotic and impersonal, Ordi is designed to create natural, flowing conversations that respect the nuances of human communication. We've developed proprietary technology that understands context, detects emotion, and responds appropriately in real-time.
              </p>
              
              <p>
                Today, Ordi handles thousands of calls daily for businesses across industries, from healthcare and financial services to retail and hospitality. We're constantly learning, improving, and pushing the boundaries of what's possible in AI-driven communication.
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