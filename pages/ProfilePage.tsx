
import React from 'react';
import { GameSession, Achievement } from '../@types';

const ACHIEVEMENTS: Achievement[] = [
  { id: '1', title: 'Người lắng nghe', description: 'Chơi 10 câu hỏi Truth đầu tiên.', icon: 'hearing', isUnlocked: true },
  { id: '2', title: 'Kẻ liều lĩnh', description: 'Hoàn thành 10 thử thách Dare.', icon: 'bolt', isUnlocked: false },
  { id: '3', title: 'Tâm giao', description: 'Chơi 5 ván liên tiếp cùng một người.', icon: 'favorite', isUnlocked: true },
  { id: '4', title: 'Nhà thám hiểm', description: 'Khám phá tất cả 4 bộ bài.', icon: 'explore', isUnlocked: false },
];

const MOCK_HISTORY: GameSession[] = [
  { id: 's1', deckId: 'deck-1', deckTitle: 'Hẹn', date: '12/03/2024', cardsDrawn: 25, playTimeMinutes: 40, favoritedCards: [1, 5] },
  { id: 's2', deckId: 'deck-3', deckTitle: 'Truth or Dare Couple', date: '10/03/2024', cardsDrawn: 50, playTimeMinutes: 75, favoritedCards: [3, 10, 15] },
];

interface ProfilePageProps {
  onBack: () => void;
}

const ProfilePage: React.FC<ProfilePageProps> = ({ onBack }) => {
  return (
    <div className="min-h-screen bg-brand-wine animate-in fade-in duration-500 pt-24 pb-20 px-6 font-jakarta">
      <div className="max-w-4xl mx-auto">
        <div className="flex items-center gap-4 mb-12">
          <button onClick={onBack} className="w-12 h-12 glass-card rounded-2xl flex items-center justify-center hover:bg-brand-magenta transition-all">
            <span className="material-symbols-outlined">arrow_back</span>
          </button>
          <h1 className="text-4xl font-black tracking-tight text-glow">LỊCH SỬ CHƠI</h1>
        </div>

        {/* User Stats Card */}
        <div className="glass-card rounded-[2.5rem] p-10 border border-white/10 mb-12 flex flex-col md:flex-row items-center gap-10">
          <div className="relative">
            <div className="w-32 h-32 rounded-[2rem] bg-brand-magenta/20 p-1">
              <img 
                src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?q=80&w=200&auto=format&fit=crop" 
                className="w-full h-full object-cover rounded-[1.8rem]"
                alt="Profile"
              />
            </div>
            <div className="absolute -bottom-2 -right-2 bg-brand-magenta text-white text-[10px] font-black px-3 py-1 rounded-full shadow-lg neon-shadow">
              LV. 12
            </div>
          </div>
          <div className="flex-grow text-center md:text-left">
            <h2 className="text-3xl font-black mb-2">Khôi Nguyên</h2>
            <p className="text-white/40 mb-6 italic">"Hành trình kết nối những tâm hồn"</p>
            <div className="grid grid-cols-3 gap-6">
              <div>
                <p className="text-[10px] font-black uppercase text-white/30 tracking-widest mb-1">TRẬN ĐẤU</p>
                <p className="text-2xl font-black">24</p>
              </div>
              <div>
                <p className="text-[10px] font-black uppercase text-white/30 tracking-widest mb-1">LÁ BÀI</p>
                <p className="text-2xl font-black text-brand-magenta">152</p>
              </div>
              <div>
                <p className="text-[10px] font-black uppercase text-white/30 tracking-widest mb-1">THÀNH TỰU</p>
                <p className="text-2xl font-black">8/12</p>
              </div>
            </div>
          </div>
        </div>

        {/* Achievements Section */}
        <h3 className="text-xl font-black mb-6 flex items-center gap-3">
          <span className="material-symbols-outlined text-brand-magenta">military_tech</span> DANH HIỆU
        </h3>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-16">
          {ACHIEVEMENTS.map(ach => (
            <div key={ach.id} className={`glass-card p-6 rounded-3xl border border-white/5 flex flex-col items-center text-center group transition-all ${ach.isUnlocked ? 'opacity-100' : 'opacity-30 grayscale'}`}>
              <div className={`w-14 h-14 rounded-2xl flex items-center justify-center mb-4 transition-all ${ach.isUnlocked ? 'bg-brand-magenta/10 text-brand-magenta group-hover:scale-110' : 'bg-white/5'}`}>
                <span className="material-symbols-outlined text-3xl">{ach.icon}</span>
              </div>
              <p className="text-xs font-black uppercase tracking-wider mb-1">{ach.title}</p>
              <p className="text-[10px] text-white/40 leading-tight">{ach.description}</p>
            </div>
          ))}
        </div>

        {/* History List */}
        <h3 className="text-xl font-black mb-6 flex items-center gap-3">
          <span className="material-symbols-outlined text-brand-magenta">history</span> CÁC VÁN GẦN ĐÂY
        </h3>
        <div className="space-y-4">
          {MOCK_HISTORY.map(session => (
            <div key={session.id} className="glass-card p-6 rounded-3xl border border-white/5 flex items-center justify-between group hover:bg-white/10 transition-all">
              <div className="flex items-center gap-6">
                <div className="w-12 h-12 bg-brand-magenta/10 rounded-2xl flex items-center justify-center text-brand-magenta">
                  <span className="material-symbols-outlined">style</span>
                </div>
                <div>
                  <h4 className="font-bold text-lg">{session.deckTitle}</h4>
                  <p className="text-xs text-white/40">{session.date} • {session.playTimeMinutes} phút chơi</p>
                </div>
              </div>
              <div className="text-right hidden sm:block">
                <p className="text-xs font-black uppercase text-white/30 mb-1">KẾT QUẢ</p>
                <p className="text-sm font-bold text-brand-magenta">{session.cardsDrawn} lá bài</p>
              </div>
              <button className="w-10 h-10 rounded-full flex items-center justify-center text-white/20 hover:text-white transition-colors">
                <span className="material-symbols-outlined">chevron_right</span>
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;
