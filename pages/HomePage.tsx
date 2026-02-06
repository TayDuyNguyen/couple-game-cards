
import React from 'react';
import Hero from '../components/Hero';
import Features from '../components/Features';
import ProductCard from '../components/ProductCard';
import { Deck } from '../@types';
import { DECKS } from '../utils/constants';

interface HomePageProps {
  onSelectDeck: (deck: Deck) => void;
}

const HomePage: React.FC<HomePageProps> = ({ onSelectDeck }) => {
  return (
    <div className="animate-in fade-in duration-700 bg-brand-wine">
      <Hero />
      <Features />
      <section id="decks" className="py-32 relative">
        <div className="max-w-7xl mx-auto px-4 relative z-10">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Chọn Bộ Bài Của Bạn
            </h2>
            <p className="text-white/40 max-w-xl mx-auto text-lg leading-relaxed">
              Từ những cuộc trò chuyện nhẹ nhàng đến những thử thách kịch tính, chúng tôi có mọi thứ cho cảm xúc của bạn.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10">
            {DECKS.map(deck => (
              <ProductCard 
                key={deck.id} 
                deck={deck} 
                onClick={onSelectDeck}
              />
            ))}
          </div>
        </div>
        {/* Background gradient hint */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-full bg-brand-magenta/5 blur-[120px] rounded-full pointer-events-none"></div>
      </section>
    </div>
  );
};

export default HomePage;
