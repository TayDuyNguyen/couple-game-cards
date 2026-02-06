
import React, { useState } from 'react';
import { Deck, GameSetup } from '../@types';

interface DetailPageProps {
  deck: Deck;
  onBack: () => void;
  onPlay: () => void;
}

const DetailPage: React.FC<DetailPageProps> = ({ deck, onBack, onPlay }) => {
  const [activeTab, setActiveTab] = useState<'intro' | 'content' | 'review'>('intro');
  const [setup, setSetup] = useState<GameSetup>({
    mode: 'couple',
    player1: '',
    player2: '',
    soundEnabled: true,
    animationEnabled: true,
  });

  const handleStart = () => {
    if (!setup.player1 || !setup.player2) {
      alert("Vui lòng nhập tên người chơi để bắt đầu!");
      return;
    }
    onPlay();
  };

  return (
    <div className="min-h-screen bg-brand-wine animate-in slide-in-from-right duration-500 pb-32">
      {/* Breadcrumb */}
      <nav className="max-w-7xl mx-auto px-6 py-6 flex items-center gap-2 text-sm font-medium text-white/40">
        <button onClick={onBack} className="hover:text-brand-magenta transition-colors">Trang chủ</button>
        <span className="material-symbols-outlined text-xs">chevron_right</span>
        <span className="text-brand-magenta/80">{deck.title}</span>
      </nav>

      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          
          {/* Left: Product Hero */}
          <div className="lg:col-span-7 space-y-6">
            <div className="aspect-[4/3] rounded-[2rem] overflow-hidden border border-white/10 relative group bg-brand-wineLight">
              <img 
                src={deck.imageUrl} 
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" 
                alt={deck.title} 
              />
              <div className="absolute top-6 right-6">
                <span className="px-4 py-2 bg-brand-magenta rounded-full text-xs font-black tracking-widest uppercase shadow-xl neon-shadow">
                  {deck.cardCount} LÁ BÀI
                </span>
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-brand-wine via-transparent to-transparent opacity-60"></div>
            </div>

            <div className="grid grid-cols-4 gap-4">
              {[1, 2, 3, 4].map((i) => (
                <div key={i} className={`aspect-square rounded-2xl border ${i === 1 ? 'border-brand-magenta border-2' : 'border-white/10'} overflow-hidden cursor-pointer opacity-70 hover:opacity-100 transition-all`}>
                  <img src={`${deck.imageUrl}?sig=${i}`} className="w-full h-full object-cover" alt="Thumbnail" />
                </div>
              ))}
            </div>
          </div>

          {/* Right: Info Area */}
          <div className="lg:col-span-5 flex flex-col">
            <div className="mb-8">
              <h1 className="text-5xl font-black mb-4 tracking-tight leading-none">{deck.title}</h1>
              <p className="text-xl text-white/50 font-light leading-relaxed italic">
                "{deck.description}"
              </p>
            </div>

            {/* Stats Bar */}
            <div className="grid grid-cols-4 p-6 rounded-3xl glass-card mb-10 text-center">
              <div>
                <span className="material-symbols-outlined text-brand-magenta mb-1">style</span>
                <p className="text-[10px] font-black uppercase text-white/40">{deck.cardCount} Lá</p>
              </div>
              <div className="border-l border-white/10">
                <span className="material-symbols-outlined text-brand-magenta mb-1">schedule</span>
                <p className="text-[10px] font-black uppercase text-white/40">{deck.playTime}</p>
              </div>
              <div className="border-l border-white/10">
                <span className="material-symbols-outlined text-brand-magenta mb-1">groups</span>
                <p className="text-[10px] font-black uppercase text-white/40">{deck.playersRange}</p>
              </div>
              <div className="border-l border-white/10">
                <span className="material-symbols-outlined text-brand-magenta mb-1">no_adult_content</span>
                <p className="text-[10px] font-black uppercase text-white/40">{deck.minAge}</p>
              </div>
            </div>

            {/* Tabs */}
            <div className="flex-grow">
              <div className="flex border-b border-white/10 mb-6">
                <button 
                  onClick={() => setActiveTab('intro')}
                  className={`px-6 py-3 text-sm font-bold transition-all border-b-2 ${activeTab === 'intro' ? 'text-brand-magenta border-brand-magenta' : 'text-white/40 border-transparent'}`}
                >
                  Giới thiệu
                </button>
                <button 
                  onClick={() => setActiveTab('content')}
                  className={`px-6 py-3 text-sm font-bold transition-all border-b-2 ${activeTab === 'content' ? 'text-brand-magenta border-brand-magenta' : 'text-white/40 border-transparent'}`}
                >
                  Nội dung
                </button>
                <button 
                  onClick={() => setActiveTab('review')}
                  className={`px-6 py-3 text-sm font-bold transition-all border-b-2 ${activeTab === 'review' ? 'text-brand-magenta border-brand-magenta' : 'text-white/40 border-transparent'}`}
                >
                  Đánh giá
                </button>
              </div>

              <div className="text-white/60 leading-relaxed min-h-[150px]">
                {activeTab === 'intro' && (
                  <div className="animate-in fade-in slide-in-from-bottom-2 duration-300">
                    <p className="mb-4">{deck.longDescription}</p>
                    <div className="flex flex-wrap gap-2">
                      <span className="px-3 py-1 bg-white/5 rounded-lg text-xs font-bold">#ketnoi</span>
                      <span className="px-3 py-1 bg-white/5 rounded-lg text-xs font-bold">#langman</span>
                      <span className="px-3 py-1 bg-white/5 rounded-lg text-xs font-bold">#couplegoal</span>
                    </div>
                  </div>
                )}
                {activeTab === 'content' && (
                  <div className="animate-in fade-in slide-in-from-bottom-2 duration-300 grid grid-cols-2 gap-4">
                    {deck.cards.slice(0, 4).map(card => (
                      <div key={card.id} className="p-4 rounded-xl border border-white/10 bg-white/5 text-xs italic">
                        "{card.content}"
                      </div>
                    ))}
                  </div>
                )}
                {activeTab === 'review' && (
                  <div className="animate-in fade-in slide-in-from-bottom-2 duration-300 text-center py-8">
                    <div className="flex justify-center gap-1 text-brand-magenta mb-2">
                      <span className="material-symbols-outlined fill-1">star</span>
                      <span className="material-symbols-outlined fill-1">star</span>
                      <span className="material-symbols-outlined fill-1">star</span>
                      <span className="material-symbols-outlined fill-1">star</span>
                      <span className="material-symbols-outlined fill-1">star_half</span>
                    </div>
                    <p className="text-sm font-bold">4.8/5.0 (128 Đánh giá)</p>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* FIXED SETUP PANEL */}
      <div className="fixed bottom-0 left-0 right-0 glass-panel z-50">
        <div className="max-w-7xl mx-auto px-6 py-6 lg:py-8 flex flex-col lg:flex-row items-center justify-between gap-8">
          
          <div className="flex flex-wrap items-center gap-10">
            {/* Mode Selection */}
            <div className="space-y-3">
              <p className="text-[10px] font-black uppercase tracking-[0.2em] text-brand-magenta ml-1">CHẾ ĐỘ CHƠI</p>
              <div className="flex bg-white/5 p-1 rounded-full border border-white/10">
                <button 
                  onClick={() => setSetup({...setup, mode: 'couple'})}
                  className={`px-6 py-2 rounded-full text-xs font-bold transition-all flex items-center gap-2 ${setup.mode === 'couple' ? 'bg-brand-magenta text-white' : 'text-white/40'}`}
                >
                  <span className="material-symbols-outlined text-sm">favorite</span> Couple
                </button>
                <button 
                  onClick={() => setSetup({...setup, mode: 'group'})}
                  className={`px-6 py-2 rounded-full text-xs font-bold transition-all flex items-center gap-2 ${setup.mode === 'group' ? 'bg-brand-magenta text-white' : 'text-white/40'}`}
                >
                  <span className="material-symbols-outlined text-sm">group</span> Group
                </button>
              </div>
            </div>

            {/* Player Inputs */}
            <div className="flex items-end gap-4">
              <div className="space-y-3">
                <p className="text-[10px] font-black uppercase tracking-[0.2em] text-white/40 ml-1">NGƯỜI CHƠI 1</p>
                <input 
                  type="text" 
                  value={setup.player1}
                  onChange={(e) => setSetup({...setup, player1: e.target.value})}
                  className="bg-white/5 border border-white/10 rounded-xl px-4 py-2.5 text-sm w-40 focus:ring-1 focus:ring-brand-magenta transition-all outline-none"
                  placeholder="Nhập tên..."
                />
              </div>
              <div className="mb-3 text-white/20">
                <span className="material-symbols-outlined">close</span>
              </div>
              <div className="space-y-3">
                <p className="text-[10px] font-black uppercase tracking-[0.2em] text-white/40 ml-1">NGƯỜI CHƠI 2</p>
                <input 
                  type="text" 
                  value={setup.player2}
                  onChange={(e) => setSetup({...setup, player2: e.target.value})}
                  className="bg-white/5 border border-white/10 rounded-xl px-4 py-2.5 text-sm w-40 focus:ring-1 focus:ring-brand-magenta transition-all outline-none"
                  placeholder="Nhập tên..."
                />
              </div>
            </div>

            {/* Toggles */}
            <div className="flex items-center gap-6 border-l border-white/10 pl-10 hidden md:flex">
              <button 
                onClick={() => setSetup({...setup, soundEnabled: !setup.soundEnabled})}
                className={`flex items-center gap-3 transition-opacity ${setup.soundEnabled ? 'opacity-100' : 'opacity-30'}`}
              >
                <span className="material-symbols-outlined text-white">volume_up</span>
                <div className={`w-10 h-5 rounded-full relative ${setup.soundEnabled ? 'bg-brand-magenta' : 'bg-white/10'}`}>
                  <div className={`absolute top-0.5 size-4 bg-white rounded-full transition-all ${setup.soundEnabled ? 'right-0.5' : 'left-0.5'}`}></div>
                </div>
              </button>
              <button 
                onClick={() => setSetup({...setup, animationEnabled: !setup.animationEnabled})}
                className={`flex items-center gap-3 transition-opacity ${setup.animationEnabled ? 'opacity-100' : 'opacity-30'}`}
              >
                <span className="material-symbols-outlined text-white">auto_fix_high</span>
                <div className={`w-10 h-5 rounded-full relative ${setup.animationEnabled ? 'bg-brand-magenta' : 'bg-white/10'}`}>
                  <div className={`absolute top-0.5 size-4 bg-white rounded-full transition-all ${setup.animationEnabled ? 'right-0.5' : 'left-0.5'}`}></div>
                </div>
              </button>
            </div>
          </div>

          {/* Start CTA */}
          <button 
            onClick={handleStart}
            className="bg-brand-magenta text-white px-12 py-5 rounded-full font-black text-sm tracking-[0.15em] flex items-center gap-3 transition-all hover:scale-105 active:scale-95 neon-shadow group"
          >
            BẮT ĐẦU CHƠI
            <span className="material-symbols-outlined group-hover:translate-x-1 transition-transform">rocket_launch</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default DetailPage;
