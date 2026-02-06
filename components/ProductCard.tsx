
import React from 'react';
import { Deck } from '../@types';

interface ProductCardProps {
  deck: Deck;
  onClick: (deck: Deck) => void;
}

const ProductCard: React.FC<ProductCardProps> = ({ deck, onClick }) => {
  return (
    <div 
      className="group glass-card rounded-[2.5rem] overflow-hidden transition-all duration-500 flex flex-col cursor-pointer hover:border-brand-magenta/40"
      onClick={() => onClick(deck)}
    >
      <div className="relative h-72 overflow-hidden">
        <img 
          src={deck.imageUrl} 
          alt={deck.title}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-brand-wine via-transparent to-transparent opacity-60"></div>
        <div className="absolute top-5 left-5 bg-black/40 backdrop-blur-md py-1.5 px-4 rounded-full text-xs font-bold text-white/90 border border-white/10 shadow-sm">
          {deck.cardCount} LÁ BÀI
        </div>
      </div>
      
      <div className="p-8 flex flex-col flex-grow">
        <h3 className="text-2xl font-bold mb-3 text-white group-hover:text-brand-magenta transition-colors">{deck.title}</h3>
        <p className="text-sm text-white/50 mb-8 line-clamp-2 leading-relaxed">{deck.description}</p>
        
        <div className="mt-auto flex items-center justify-between">
          <span className="text-white font-bold text-xl">{deck.price}</span>
          <button className="bg-brand-magenta text-white w-12 h-12 rounded-2xl flex items-center justify-center hover:scale-110 transition-all shadow-lg neon-shadow">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4v16m8-8H4"></path></svg>
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
