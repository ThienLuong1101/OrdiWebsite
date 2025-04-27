import React, { useEffect, useRef } from 'react';
import { ArrowRight, Play } from 'lucide-react';
import AnimatedCircuit from './AnimatedCircuit';

const HeroSection: React.FC = () => {
  const audioVisualizerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!audioVisualizerRef.current) return;
    const bars = audioVisualizerRef.current.querySelectorAll('.audio-bar');

    // Animate audio visualizer bars
    const animate = () => {
      bars.forEach((bar) => {
        const height = Math.random() * 100;
        (bar as HTMLElement).style.height = `${height}%`;
      });
    };

    const interval = setInterval(animate, 100);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative pt-28 pb-20 md:pt-36 md:pb-32 overflow-hidden">
      <AnimatedCircuit />
      
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
          <div className="lg:w-1/2 space-y-6">
            <div className="inline-flex items-center px-3 py-1 rounded-full border border-purple-500/30 bg-purple-500/10 text-sm text-purple-300 mb-4">
              <span className="animate-pulse mr-2 h-2 w-2 rounded-full bg-purple-500"></span>
              Revolutionizing Business Communication
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight tracking-tighter">
              Your AI Phone <br />
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-500 to-blue-500">
                Call Assistant
              </span>
            </h1>
            
            <p className="text-lg md:text-xl text-gray-300 max-w-xl">
              Ordi handles your business calls with human-like precision, saving time and enhancing customer satisfaction.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <button className="bg-gradient-to-r from-purple-600 to-blue-600 px-6 py-3 rounded-md text-base font-medium hover:from-purple-700 hover:to-blue-700 transition-all shadow-lg hover:shadow-purple-500/20 flex items-center justify-center">
                Get Started <ArrowRight className="ml-2 w-4 h-4" />
              </button>
              
              <button className="border border-gray-700 bg-gray-800/50 hover:bg-gray-800 px-6 py-3 rounded-md text-base font-medium transition-all flex items-center justify-center">
                <Play className="mr-2 w-4 h-4" /> Watch Demo
              </button>
            </div>
            
            {/* <div className="pt-8 flex items-center gap-8">
              <div className="flex -space-x-2">
                <img src="https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="User" className="w-8 h-8 rounded-full border-2 border-[#0a192f]" />
                <img src="https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="User" className="w-8 h-8 rounded-full border-2 border-[#0a192f]" />
                <img src="https://images.pexels.com/photos/3775534/pexels-photo-3775534.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="User" className="w-8 h-8 rounded-full border-2 border-[#0a192f]" />
              </div>
              <p className="text-sm text-gray-400">Trusted by <span className="text-white font-medium">500+</span> companies worldwide</p>
            </div> */}
          </div>
          
          <div className="lg:w-1/2 relative">
            <div className="relative bg-gradient-to-br from-purple-900/20 to-blue-900/20 p-1 rounded-2xl border border-purple-500/10 backdrop-blur-sm">
              <div className="absolute inset-0 bg-purple-500/5 rounded-2xl"></div>
              
              <div className="relative bg-gray-900/80 rounded-xl p-6 flex flex-col h-[400px]">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                    <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                    <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                  </div>
                  <div className="px-3 py-1 rounded-full bg-gray-800 text-xs font-mono text-gray-400">
                    Ordi AI Assistant
                  </div>
                </div>
                
                <div className="flex-grow overflow-hidden flex flex-col gap-4">
                  <div className="flex items-start gap-3">
                    <div className="w-8 h-8 rounded-full bg-blue-600 flex items-center justify-center text-xs font-bold">C</div>
                    <div className="bg-gray-800 rounded-lg rounded-tl-none p-3 text-sm max-w-[80%]">
                      Hello, I'd like to know more about your software development services.
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-3 self-end">
                    <div className="bg-purple-600/20 border border-purple-500/30 rounded-lg rounded-tr-none p-3 text-sm max-w-[80%]">
                      Thank you for your interest! I'd be happy to tell you about our software development services. We specialize in web applications, mobile apps, and enterprise solutions. What kind of project are you looking to build?
                    </div>
                    <div className="w-8 h-8 rounded-full bg-gradient-to-r from-purple-600 to-blue-600 flex items-center justify-center text-xs font-bold">AI</div>
                  </div>
                </div>
                
                <div ref={audioVisualizerRef} className="h-12 mt-4 flex items-end gap-[2px]">
                  {Array.from({ length: 60 }).map((_, index) => (
                    <div 
                      key={index} 
                      className="audio-bar w-1 bg-gradient-to-t from-purple-600 to-blue-400 rounded-t opacity-80"
                      style={{ height: `${Math.random() * 100}%` }}
                    ></div>
                  ))}
                </div>
              </div>
            </div>
            
            <div className="absolute -bottom-6 -right-6 w-24 h-24 bg-purple-600/20 rounded-full blur-2xl"></div>
            <div className="absolute -top-6 -left-6 w-32 h-32 bg-blue-600/20 rounded-full blur-2xl"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;