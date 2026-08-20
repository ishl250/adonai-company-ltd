import React from 'react';
import { Award, ShieldCheck, Clock, ThumbsUp } from 'lucide-react';

export const BrandLogos: React.FC = () => {
  const highlights = [
    {
      icon: Award,
      title: 'Quality Work',
      subtitle: 'Guaranteed Standards'
    },
    {
      icon: ShieldCheck,
      title: 'Professional Team',
      subtitle: 'Experienced Specialists'
    },
    {
      icon: Clock,
      title: 'On-Time Delivery',
      subtitle: 'Strict Milestones'
    },
    {
      icon: ThumbsUp,
      title: 'Customer Satisfaction',
      subtitle: 'Our Core Priority'
    }
  ];

  return (
    <section id="brand-pillars" className="bg-[#76b82a] py-8 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 items-center justify-items-center">
          {highlights.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div key={idx} className="flex items-center gap-3 text-center sm:text-left">
                <div className="w-11 h-11 rounded-xl bg-[#071a33]/20 flex items-center justify-center shrink-0 border border-white/20">
                  <Icon className="w-5 h-5 text-white" />
                </div>
                <div>
                  <div className="text-sm font-black tracking-wide font-['Outfit',sans-serif] uppercase">
                    {item.title}
                  </div>
                  <div className="text-[11px] text-lime-100 font-medium">
                    {item.subtitle}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
