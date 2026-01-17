
import React from 'react';
import { Play, Clock, Target } from 'lucide-react';
import { Session } from '../types';

export const Badge: React.FC<{ children: React.ReactNode; variant?: 'primary' | 'secondary' }> = ({ children, variant = 'primary' }) => (
  <span className={`px-2 py-0.5 rounded-full text-[10px] font-bold uppercase tracking-wider ${
    variant === 'primary' ? 'bg-[#00C2FF] text-black' : 'bg-slate-700/50 text-slate-300'
  }`}>
    {children}
  </span>
);

export const SessionCard: React.FC<{ session: Session; orientation?: 'horizontal' | 'vertical' }> = ({ session, orientation = 'vertical' }) => {
  if (orientation === 'horizontal') {
    return (
      <div className="glass rounded-3xl overflow-hidden group cursor-pointer transition-transform active:scale-[0.98]">
        <div className="relative h-48 overflow-hidden">
          <img src={session.imageUrl} alt={session.title} className="w-full h-full object-cover" />
          {session.isPopular && (
            <div className="absolute top-4 left-4">
              <Badge>Popular</Badge>
            </div>
          )}
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
          <div className="absolute bottom-4 left-4">
            <h3 className="text-xl font-bold">{session.title}</h3>
            <p className="text-sm text-slate-300 flex items-center gap-2 mt-1">
              <Clock size={14} /> {session.duration} mins • <Target size={14} /> {session.category}
            </p>
          </div>
          <button className="absolute bottom-4 right-4 bg-[#00C2FF] p-3 rounded-full text-black accent-glow active:scale-90 transition-transform">
            <Play size={20} fill="currentColor" />
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="glass rounded-3xl overflow-hidden min-w-[280px] max-w-[280px] group cursor-pointer transition-transform active:scale-[0.98]">
      <div className="relative h-64 overflow-hidden">
        <img src={session.imageUrl} alt={session.title} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
        <div className="absolute top-3 left-3 flex gap-2">
          <Badge variant="secondary">{session.level}</Badge>
          <Badge variant="secondary">{session.duration} min</Badge>
        </div>
        <div className="absolute inset-0 bg-gradient-to-t from-[#0A1218] via-transparent to-transparent opacity-80" />
        <div className="absolute bottom-4 left-4 pr-12">
          <h4 className="text-lg font-bold leading-tight">{session.title}</h4>
          <p className="text-xs text-slate-400 mt-1">with {session.instructor}</p>
        </div>
        <button className="absolute bottom-4 right-4 bg-[#00C2FF] p-2.5 rounded-full text-black accent-glow">
          <Play size={18} fill="currentColor" />
        </button>
      </div>
    </div>
  );
};
