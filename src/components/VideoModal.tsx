import React from 'react';
import { X, Play, Award, CheckCircle } from 'lucide-react';

interface VideoModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const VideoModal: React.FC<VideoModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-sm animate-fadeIn">
      <div className="bg-[#071a33] border border-slate-700 rounded-2xl shadow-2xl max-w-3xl w-full overflow-hidden relative text-white">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-20 p-2 bg-black/60 hover:bg-black text-white rounded-full transition-colors"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Video showcase */}
        <div className="relative aspect-video w-full bg-slate-900 overflow-hidden flex items-center justify-center">
          <img
            src="https://images.unsplash.com/photo-1541888946425-d0fbb180c5f5?q=80&w=1600&auto=format&fit=crop"
            alt="Adonai Construction Video Tour"
            className="w-full h-full object-cover opacity-60"
          />

          <div className="absolute inset-0 bg-gradient-to-t from-[#071a33] via-transparent to-transparent" />

          <div className="absolute text-center px-4">
            <div className="w-20 h-20 bg-[#76b82a] rounded-full flex items-center justify-center mx-auto mb-4 shadow-xl hover:scale-110 transition-transform cursor-pointer">
              <Play className="w-8 h-8 fill-white ml-1" />
            </div>
            <h4 className="text-xl sm:text-2xl font-black font-['Outfit',sans-serif]">
              Adonai Company Ltd on Site
            </h4>
            <p className="text-xs text-slate-300 max-w-md mx-auto mt-2">
              Virtual site walkthrough showcasing our House Finishing, House Building, Painting & Designing in Gasabo, Kimironko.
            </p>
          </div>
        </div>

        {/* Video Highlights */}
        <div className="p-6 sm:p-8 grid grid-cols-1 sm:grid-cols-3 gap-4 text-xs">
          <div className="flex items-center gap-2.5">
            <CheckCircle className="w-4 h-4 text-[#82c324] shrink-0" />
            <span>Quality Workmanship</span>
          </div>
          <div className="flex items-center gap-2.5">
            <CheckCircle className="w-4 h-4 text-[#82c324] shrink-0" />
            <span>Professional Team</span>
          </div>
          <div className="flex items-center gap-2.5">
            <Award className="w-4 h-4 text-[#82c324] shrink-0" />
            <span>Customer Satisfaction</span>
          </div>
        </div>
      </div>
    </div>
  );
};
