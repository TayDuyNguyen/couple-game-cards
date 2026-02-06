
import React from 'react';

const FEATURE_ITEMS = [
  { icon: '✨', text: 'Bắt nhịp dễ dàng' },
  { icon: '😂', text: 'Cười thả ga' },
  { icon: '❤️', text: 'Khơi gợi yêu thương' },
  { icon: '🤝', text: 'Gia tăng kết nối' },
  { icon: '🔥', text: 'Làm mới tình yêu' }
];

const Features: React.FC = () => {
  return (
    <section className="py-16 bg-brand-wine">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-6">
          {FEATURE_ITEMS.map((item, idx) => (
            <div key={idx} className="flex flex-col items-center p-8 glass-card rounded-3xl transition-all hover:-translate-y-2 hover:bg-white/10 group">
              <span className="text-4xl mb-4 group-hover:scale-125 transition-transform duration-300">{item.icon}</span>
              <span className="text-sm font-bold text-white/80 text-center tracking-wide">{item.text}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
