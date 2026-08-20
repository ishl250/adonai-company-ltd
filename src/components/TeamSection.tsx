import React from 'react';
import { Phone, MessageSquare } from 'lucide-react';
import { TeamMember } from '../types';

export const TeamSection: React.FC = () => {
  const team: TeamMember[] = [
    {
      id: 'member-1',
      name: 'Adonai Senior Project Director',
      role: 'CIVIL & STRUCTURAL LEAD',
      imageUrl: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=800&auto=format&fit=crop',
      phone: '+250 782 036 988'
    },
    {
      id: 'member-2',
      name: 'Master Finishing Specialist',
      role: 'HOUSE FINISHING & TILING SUPERVISOR',
      imageUrl: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?q=80&w=800&auto=format&fit=crop',
      phone: '+250 788 818 039'
    },
    {
      id: 'member-3',
      name: 'Chief Painter & Designer',
      role: 'INTERIOR & EXTERIOR AESTHETICS',
      imageUrl: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=800&auto=format&fit=crop',
      phone: '+250 782 036 988'
    }
  ];

  return (
    <section id="team" className="py-20 lg:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        {/* Header Centered */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 mb-3 px-3 py-1 rounded-full bg-[#76b82a]/10 border border-[#76b82a]/30">
            <span className="w-2 h-2 bg-[#76b82a] inline-block rounded-full" />
            <span className="text-xs font-black uppercase tracking-wider text-[#68a61e] font-['Outfit',sans-serif]">
              OUR EXPERIENCED CREW
            </span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#071a33] tracking-tight font-['Outfit',sans-serif]">
            Dedicated Craftsmen & Engineers
          </h2>
          <p className="text-slate-600 text-sm sm:text-base mt-2">
            Supervised by experienced professionals on-site every single day.
          </p>
        </div>

        {/* 3 Team Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {team.map((member, idx) => (
            <div
              key={member.id}
              id={`team-member-${idx + 1}`}
              className="group bg-white rounded-2xl overflow-hidden border border-slate-200 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col text-center hover:-translate-y-1"
            >
              {/* Photo */}
              <div className="relative h-80 overflow-hidden bg-slate-100">
                <img
                  src={member.imageUrl}
                  alt={member.name}
                  className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
                />
                
                {/* Contact Overlay */}
                <div className="absolute inset-0 bg-[#071a33]/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-3">
                  <a
                    href={`tel:${member.phone?.replace(/\s+/g, '')}`}
                    className="w-10 h-10 rounded-full bg-white text-[#071a33] hover:bg-[#76b82a] hover:text-white flex items-center justify-center transition-colors shadow"
                    title="Call"
                  >
                    <Phone className="w-4 h-4" />
                  </a>
                  <a
                    href="https://wa.me/250782036988"
                    target="_blank"
                    rel="noreferrer"
                    className="w-10 h-10 rounded-full bg-white text-[#071a33] hover:bg-[#76b82a] hover:text-white flex items-center justify-center transition-colors shadow"
                    title="WhatsApp"
                  >
                    <MessageSquare className="w-4 h-4" />
                  </a>
                </div>
              </div>

              {/* Text Info */}
              <div className="p-6 bg-white border-t border-slate-100">
                <h3 className="text-lg font-black text-[#071a33] font-['Outfit',sans-serif] group-hover:text-[#76b82a] transition-colors mb-1.5">
                  {member.name}
                </h3>
                <p className="text-[11px] font-bold tracking-wider text-[#76b82a] uppercase">
                  {member.role}
                </p>
                <div className="mt-2 text-xs text-slate-500 font-medium">
                  {member.phone}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
