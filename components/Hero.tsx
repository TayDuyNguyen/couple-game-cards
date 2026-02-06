
import React from 'react';

const Hero: React.FC = () => {
  return (
    <section className="relative overflow-hidden pt-20 pb-24 lg:pt-32 lg:pb-40">
      <div className="max-w-7xl mx-auto px-4 text-center relative z-10">
        <div className="inline-block px-4 py-1.5 mb-6 border border-brand-magenta/30 rounded-full bg-brand-magenta/10 text-brand-magenta text-xs font-bold tracking-widest uppercase">
          Khám phá không gian kết nối mới
        </div>
        <h1 className="text-5xl md:text-7xl font-extrabold text-white mb-8 leading-tight">
          Bắt nhịp dễ dàng <br />
          <span className="text-brand-magenta">Khơi gợi yêu thương</span>
        </h1>
        <p className="text-xl text-white/60 mb-12 max-w-2xl mx-auto leading-relaxed">
          Tạo không gian riêng tư và ấm áp cho cặp đôi và nhóm bạn. 
          Mỗi lá bài là một chìa khóa mở ra những câu chuyện chân thật nhất.
        </p>
        <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
          <a href="#decks" className="bg-brand-magenta text-white px-10 py-5 rounded-2xl font-bold text-lg hover:scale-105 transition-all shadow-xl shadow-brand-magenta/30 active:scale-95 w-full sm:w-auto neon-shadow">
            BẮT ĐẦU CHƠI
          </a>
          <button className="bg-white/5 text-white border border-white/10 px-10 py-5 rounded-2xl font-bold text-lg hover:bg-white/10 transition-all active:scale-95 w-full sm:w-auto backdrop-blur-sm">
            Xem hướng dẫn
          </button>
        </div>
      </div>

      {/* Decorative Blobs updated for Dark Theme */}
      <div className="absolute top-0 -left-20 w-96 h-96 bg-brand-magenta/10 rounded-full mix-blend-screen filter blur-3xl opacity-40 animate-blob"></div>
      <div className="absolute top-20 -right-20 w-96 h-96 bg-purple-600/10 rounded-full mix-blend-screen filter blur-3xl opacity-40 animate-blob animation-delay-2000"></div>
      <div className="absolute -bottom-40 left-1/2 w-96 h-96 bg-brand-magenta/5 rounded-full mix-blend-screen filter blur-3xl opacity-30 animate-blob animation-delay-4000"></div>
    </section>
  );
};

export default Hero;
