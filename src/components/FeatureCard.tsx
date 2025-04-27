import React from 'react';
import { DivideIcon as LucideIcon } from 'lucide-react';

interface FeatureCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
}

const FeatureCard: React.FC<FeatureCardProps> = ({ icon: Icon, title, description }) => {
  return (
    <div className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 p-6 rounded-xl border border-gray-800 hover:border-purple-500/30 transition-all group">
      <div className="w-12 h-12 rounded-lg bg-purple-500/10 border border-purple-500/30 flex items-center justify-center mb-4 group-hover:bg-purple-500/20 transition-colors">
        <Icon className="w-6 h-6 text-purple-500" />
      </div>
      <h3 className="text-xl font-bold mb-2">{title}</h3>
      <p className="text-gray-400 leading-relaxed">{description}</p>
    </div>
  );
};

export default FeatureCard;