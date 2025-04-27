import React from 'react';
import { Phone, BrainCircuit, LineChart, ShieldCheck, Clock, Users, HeadphonesIcon, Bot, Zap, Link, Cpu, Database } from 'lucide-react';

const FeaturesPage: React.FC = () => {
  const features = [
    {
      icon: Phone,
      title: "Natural Voice Interaction",
      description: "Our advanced voice synthesis creates natural, human-like speech patterns with appropriate intonation, pauses, and emphasis.",
      color: "from-blue-600 to-blue-400"
    },
    {
      icon: BrainCircuit,
      title: "Context-Aware Understanding",
      description: "Ordi maintains conversation history and context, enabling it to understand references to previous points without repetition.",
      color: "from-purple-600 to-purple-400"
    },
    {
      icon: LineChart,
      title: "Comprehensive Analytics",
      description: "Get detailed insights into call patterns, frequent inquiries, resolution rates, and customer satisfaction metrics.",
      color: "from-pink-600 to-pink-400"
    },
    {
      icon: ShieldCheck,
      title: "Enterprise-Grade Security",
      description: "End-to-end encryption, strict access controls, and compliance with industry standards like GDPR, HIPAA, and PCI DSS.",
      color: "from-green-600 to-green-400"
    },
    {
      icon: Clock,
      title: "24/7 Availability",
      description: "Ordi works around the clock, handling calls during off-hours, holidays, and peak periods without additional staffing.",
      color: "from-orange-600 to-orange-400"
    },
    {
      icon: HeadphonesIcon,
      title: "Seamless Human Handoff",
      description: "When needed, Ordi can transfer calls to human agents with complete context preservation for continuity.",
      color: "from-red-600 to-red-400"
    },
    {
      icon: Users,
      title: "Caller Personalization",
      description: "Recognize returning callers and personalize interactions based on their history and preferences.",
      color: "from-teal-600 to-teal-400"
    },
    {
      icon: Bot,
      title: "Multi-language Support",
      description: "Communicate with customers in multiple languages, dynamically switching based on caller preference.",
      color: "from-indigo-600 to-indigo-400"
    },
    {
      icon: Zap,
      title: "Real-time Processing",
      description: "Ultra-low latency response times that make conversations feel natural and uninterrupted.",
      color: "from-yellow-600 to-yellow-400"
    },
    {
      icon: Link,
      title: "Seamless Integrations",
      description: "Connect with CRM systems, helpdesk software, and other business tools to access and update relevant information.",
      color: "from-cyan-600 to-cyan-400"
    },
    {
      icon: Cpu,
      title: "Advanced NLP Capabilities",
      description: "State-of-the-art natural language processing for understanding complex queries, sentiment, and intent.",
      color: "from-lime-600 to-lime-400"
    },
    {
      icon: Database,
      title: "Knowledge Base Integration",
      description: "Access company documentation and product information to provide accurate, up-to-date responses.",
      color: "from-violet-600 to-violet-400"
    }
  ];

  return (
    <div className="min-h-screen pt-20">
      <section className="py-20 relative overflow-hidden">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-purple-500 to-blue-500">
              Ordi Features
            </h1>
            <p className="text-xl text-gray-300 leading-relaxed">
              Discover the advanced capabilities that make Ordi the leading AI phone assistant for businesses.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <div key={index} className="bg-gray-900/50 rounded-xl p-6 border border-gray-800 hover:border-purple-500/30 transition-all group">
                  <div className={`w-12 h-12 rounded-lg bg-gradient-to-r ${feature.color} flex items-center justify-center mb-4`}>
                    <Icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
                  <p className="text-gray-400">{feature.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>
      
      <section className="py-20 bg-gradient-to-br from-purple-900/20 to-blue-900/20">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-5xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-purple-500 to-blue-500">
                  Technical Excellence
                </h2>
                <p className="text-lg text-gray-300 mb-8">
                  Under the hood, Ordi leverages cutting-edge technology to deliver an exceptional experience.
                </p>
                
                <div className="space-y-6">
                  <div className="flex gap-4">
                    <div className="w-12 h-12 rounded-full bg-purple-500/10 border border-purple-500/30 flex items-center justify-center flex-shrink-0">
                      <Cpu className="w-6 h-6 text-purple-500" />
                    </div>
                    <div>
                      <h3 className="font-bold text-lg">Neural Speech Models</h3>
                      <p className="text-gray-400">
                        Our proprietary neural networks create voice patterns indistinguishable from human speech, with natural rhythm and intonation.
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex gap-4">
                    <div className="w-12 h-12 rounded-full bg-blue-500/10 border border-blue-500/30 flex items-center justify-center flex-shrink-0">
                      <BrainCircuit className="w-6 h-6 text-blue-500" />
                    </div>
                    <div>
                      <h3 className="font-bold text-lg">Context Processing Engine</h3>
                      <p className="text-gray-400">
                        Ordi maintains a dynamic memory model of conversations, tracking entities, intentions, and emotional states in real-time.
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex gap-4">
                    <div className="w-12 h-12 rounded-full bg-green-500/10 border border-green-500/30 flex items-center justify-center flex-shrink-0">
                      <Database className="w-6 h-6 text-green-500" />
                    </div>
                    <div>
                      <h3 className="font-bold text-lg">Adaptive Learning System</h3>
                      <p className="text-gray-400">
                        With each interaction, Ordi learns and improves, adapting to your business vocabulary and caller preferences.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="relative">
                <div className="absolute -top-6 -left-6 w-32 h-32 bg-purple-600/20 rounded-full blur-2xl"></div>
                <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-blue-600/20 rounded-full blur-2xl"></div>
                
                <div className="relative bg-gray-900/70 backdrop-blur-sm rounded-2xl overflow-hidden">
                  <div className="p-1 bg-gradient-to-r from-purple-500 to-blue-500">
                    <div className="bg-gray-900 p-4 flex items-center">
                      <div className="flex space-x-2">
                        <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                        <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                        <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                      </div>
                      <div className="ml-4 font-mono text-sm text-gray-400">ordi-terminal</div>
                    </div>
                  </div>
                  
                  <div className="p-6 font-mono text-sm">
                    <div className="flex">
                      <span className="text-green-400">$</span>
                      <span className="ml-2 text-gray-300">ordi --status</span>
                    </div>
                    <div className="mt-2 text-gray-400">
                      Ordi System Status: <span className="text-green-400">ACTIVE</span><br />
                      Version: 2.4.1<br />
                      Neural Core: ONLINE<br />
                      Speech Processing: OPTIMAL<br />
                      Context Engine: RUNNING<br />
                      API Connections: 16 ACTIVE<br />
                      Call Queue: 0 WAITING<br />
                      Response Time: 0.23ms<br />
                    </div>
                    
                    <div className="mt-4 flex">
                      <span className="text-green-400">$</span>
                      <span className="ml-2 text-gray-300">ordi --performance</span>
                    </div>
                    <div className="mt-2 text-gray-400">
                      Weekly Performance Report:<br />
                      Calls Handled: 5,283<br />
                      Avg. Call Duration: 3m 42s<br />
                      Resolution Rate: 94.7%<br />
                      Handoff Rate: 5.3%<br />
                      Customer Satisfaction: 4.8/5<br />
                      System Uptime: 99.997%<br />
                    </div>
                    
                    <div className="mt-4 flex">
                      <span className="text-green-400">$</span>
                      <span className="ml-2 text-gray-300">_</span>
                      <span className="ml-1 animate-pulse">|</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default FeaturesPage;