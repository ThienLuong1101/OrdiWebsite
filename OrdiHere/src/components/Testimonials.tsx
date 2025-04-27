import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Quote } from 'lucide-react';

interface Testimonial {
  id: number;
  text: string;
  author: string;
  role: string;
  company: string;
  image: string;
}

const testimonials: Testimonial[] = [
  {
    id: 1,
    text: "Ordi has transformed our customer service department. Our call handling efficiency has increased by 67% while maintaining high satisfaction rates.",
    author: "Sarah Johnson",
    role: "Director of Customer Experience",
    company: "TechVision Inc.",
    image: "https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
  },
  {
    id: 2,
    text: "The AI voice assistant is so natural that many callers don't realize they're speaking with AI. It's saved us thousands of hours in call handling time.",
    author: "Michael Chen",
    role: "CTO",
    company: "Nexus Solutions",
    image: "https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
  },
  {
    id: 3,
    text: "Implementing Ordi allowed us to provide 24/7 support without hiring additional staff. The ROI has been exceptional in just the first quarter.",
    author: "Elena Rodriguez",
    role: "Operations Manager",
    company: "Global Retail Alliance",
    image: "https://images.pexels.com/photos/3775534/pexels-photo-3775534.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
  }
];

const Testimonials: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  const nextTestimonial = () => {
    setCurrentIndex((currentIndex + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((currentIndex - 1 + testimonials.length) % testimonials.length);
  };

  useEffect(() => {
    if (!isAutoPlaying) return;
    
    const interval = setInterval(() => {
      nextTestimonial();
    }, 5000);
    
    return () => clearInterval(interval);
  }, [currentIndex, isAutoPlaying]);

  const handleUserInteraction = () => {
    setIsAutoPlaying(false);
    // Restart auto play after 10 seconds of inactivity
    setTimeout(() => setIsAutoPlaying(true), 10000);
  };

  return (
    <section className="py-20 bg-gradient-to-br from-purple-900/20 to-blue-900/20 relative">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-purple-500 to-blue-500">
            What Our Clients Say
          </h2>
          <p className="text-lg text-gray-400">
            Discover how Ordi is transforming business communication for companies worldwide.
          </p>
        </div>
        
        <div className="max-w-4xl mx-auto relative">
          <div className="absolute -top-10 -left-10 text-purple-500/20">
            <Quote className="w-20 h-20" />
          </div>
          
          <div className="bg-gray-900/50 backdrop-blur-sm rounded-xl p-8 border border-purple-500/10 relative z-10">
            {testimonials.map((testimonial, index) => (
              <div 
                key={testimonial.id}
                className={`transition-opacity duration-500 ${
                  index === currentIndex ? 'opacity-100' : 'opacity-0 absolute inset-0'
                }`}
              >
                <p className="text-xl md:text-2xl font-light italic mb-8 text-gray-300">
                  "{testimonial.text}"
                </p>
                
                <div className="flex items-center">
                  <img 
                    src={testimonial.image} 
                    alt={testimonial.author} 
                    className="w-14 h-14 rounded-full object-cover mr-4 border-2 border-purple-500"
                  />
                  <div>
                    <h4 className="font-bold text-lg">{testimonial.author}</h4>
                    <p className="text-gray-400">{testimonial.role}, {testimonial.company}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          <div className="absolute -bottom-6 -right-6 w-24 h-24 bg-purple-600/20 rounded-full blur-2xl"></div>
          
          <div className="flex justify-center mt-8 space-x-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => {
                  setCurrentIndex(index);
                  handleUserInteraction();
                }}
                className={`w-3 h-3 rounded-full transition-colors ${
                  index === currentIndex ? 'bg-purple-500' : 'bg-gray-700 hover:bg-gray-600'
                }`}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>
          
          <div className="flex justify-between mt-6">
            <button
              onClick={() => {
                prevTestimonial();
                handleUserInteraction();
              }}
              className="p-2 rounded-full bg-gray-800 hover:bg-gray-700 transition-colors"
              aria-label="Previous testimonial"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>
            
            <button
              onClick={() => {
                nextTestimonial();
                handleUserInteraction();
              }}
              className="p-2 rounded-full bg-gray-800 hover:bg-gray-700 transition-colors"
              aria-label="Next testimonial"
            >
              <ChevronRight className="w-6 h-6" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;