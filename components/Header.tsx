
import React from 'react';
import { Page } from '../@types';

interface HeaderProps {
  onNavigate: (page: Page) => void;
}

const Header: React.FC<HeaderProps> = ({ onNavigate }) => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-brand-wine/80 backdrop-blur-xl border-b border-white/10 shadow-lg font-jakarta">
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        <div 
          className="flex items-center gap-3 cursor-pointer group" 
          onClick={() => onNavigate(Page.Home)}
        >
          <div className="w-10 h-10 bg-brand-magenta rounded-xl flex items-center justify-center text-white font-black group-hover:scale-110 transition-transform shadow-lg shadow-brand-magenta/20 text-xl tracking-tighter">
            H
          </div>
          <span className="text-2xl font-black tracking-tighter text-white">Card Hub</span>
        </div>
        
        <nav className="hidden md:flex items-center gap-10 text-[10px] font-black uppercase tracking-[0.2em] text-white/50">
          <button onClick={() => onNavigate(Page.Home)} className="hover:text-brand-magenta transition-colors">Trang chủ</button>
          <button className="hover:text-brand-magenta transition-colors">Cửa hàng</button>
          <button className="hover:text-brand-magenta transition-colors">Liên hệ</button>
          <button onClick={() => onNavigate(Page.Profile)} className="hover:text-brand-magenta transition-colors flex items-center gap-2">
            <span className="material-symbols-outlined text-sm">person</span> Hồ sơ
          </button>
        </nav>

        <div className="flex items-center gap-4">
          <button 
            onClick={() => onNavigate(Page.Profile)}
            className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center md:hidden"
          >
            <span className="material-symbols-outlined text-white/60">person</span>
          </button>
          <button className="bg-brand-magenta text-white px-6 py-3 rounded-2xl text-[10px] font-black uppercase tracking-widest hover:bg-opacity-90 transition-all shadow-lg neon-shadow active:scale-95 whitespace-nowrap">
            TẢI APP
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
