import React from 'react';
import { Mail, MessageCircle, Phone } from 'lucide-react';

const ContactSection: React.FC = () => {
  return (
    <section className="py-20 bg-[#0a192f]">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-purple-500 to-blue-500">
            Get In Touch
          </h2>
          <p className="text-lg text-gray-400">
            Have questions or ready to get started? Reach out to our team.
          </p>
        </div>
        
        {/* <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
          <div className="bg-gray-900/50 rounded-xl p-6 border border-gray-800 flex flex-col items-center text-center">
            <div className="w-12 h-12 rounded-full bg-purple-500/10 border border-purple-500/30 flex items-center justify-center mb-4">
              <Phone className="w-6 h-6 text-purple-500" />
            </div>
            <h3 className="text-xl font-bold mb-2">Call Us</h3>
            <p className="text-gray-400 mb-4">We're available Mon-Fri, 9am-6pm ET</p>
            <a href="tel:+18001234567" className="text-purple-400 hover:text-purple-300 transition-colors font-medium">
              +1 (800) 123-4567
            </a>
          </div>
          
          <div className="bg-gray-900/50 rounded-xl p-6 border border-gray-800 flex flex-col items-center text-center">
            <div className="w-12 h-12 rounded-full bg-purple-500/10 border border-purple-500/30 flex items-center justify-center mb-4">
              <Mail className="w-6 h-6 text-purple-500" />
            </div>
            <h3 className="text-xl font-bold mb-2">Email Us</h3>
            <p className="text-gray-400 mb-4">We'll respond within 24 hours</p>
            <a href="mailto:info@ordiapi.com" className="text-purple-400 hover:text-purple-300 transition-colors font-medium">
              info@ordiapi.com
            </a>
          </div>
          
          <div className="bg-gray-900/50 rounded-xl p-6 border border-gray-800 flex flex-col items-center text-center">
            <div className="w-12 h-12 rounded-full bg-purple-500/10 border border-purple-500/30 flex items-center justify-center mb-4">
              <MessageCircle className="w-6 h-6 text-purple-500" />
            </div>
            <h3 className="text-xl font-bold mb-2">Live Chat</h3>
            <p className="text-gray-400 mb-4">Chat with our support team</p>
            <button className="text-purple-400 hover:text-purple-300 transition-colors font-medium">
              Start Chat
            </button>
          </div>
        </div> */}
        
        <div className="mt-16 max-w-3xl mx-auto bg-gray-900/50 rounded-xl p-8 border border-gray-800">
          <h3 className="text-2xl font-bold mb-6 text-center">Send Us a Message</h3>
          
          <form className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-400 mb-1">
                  Your Name
                </label>
                <input
                  type="text"
                  id="name"
                  className="w-full bg-gray-800 border border-gray-700 rounded-md px-4 py-2 text-white focus:outline-none focus:ring-2 focus:ring-purple-500"
                  placeholder="John Doe"
                />
              </div>
              
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-400 mb-1">
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  className="w-full bg-gray-800 border border-gray-700 rounded-md px-4 py-2 text-white focus:outline-none focus:ring-2 focus:ring-purple-500"
                  placeholder="you@example.com"
                />
              </div>
            </div>
            
            <div>
              <label htmlFor="subject" className="block text-sm font-medium text-gray-400 mb-1">
                Subject
              </label>
              <input
                type="text"
                id="subject"
                className="w-full bg-gray-800 border border-gray-700 rounded-md px-4 py-2 text-white focus:outline-none focus:ring-2 focus:ring-purple-500"
                placeholder="How can we help?"
              />
            </div>
            
            <div>
              <label htmlFor="message" className="block text-sm font-medium text-gray-400 mb-1">
                Message
              </label>
              <textarea
                id="message"
                rows={4}
                className="w-full bg-gray-800 border border-gray-700 rounded-md px-4 py-2 text-white focus:outline-none focus:ring-2 focus:ring-purple-500"
                placeholder="Your message here..."
              ></textarea>
            </div>
            
            <div className="flex items-center">
              <input
                type="checkbox"
                id="privacy"
                className="h-4 w-4 rounded border-gray-700 text-purple-600 focus:ring-purple-500 bg-gray-800"
              />
              <label htmlFor="privacy" className="ml-2 block text-sm text-gray-400">
                I agree to the <a href="#" className="text-purple-400 hover:underline">Privacy Policy</a>
              </label>
            </div>
            
            <button
              type="submit"
              className="w-full bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white font-medium py-2 px-4 rounded-md transition-colors"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;