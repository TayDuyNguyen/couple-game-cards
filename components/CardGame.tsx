
import React, { useState } from 'react';
// Fix: Reference the correct type definitions in the @types directory to avoid importing from empty types.ts.
import { Deck, Card } from '../@types';

interface CardGameProps {
  deck: Deck;
  onExit: () => void;
}

const CardGame: React.FC<CardGameProps> = ({ deck, onExit }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [history, setHistory] = useState<number[]>([]);

  const handleNext = () => {
    setHistory([...history, currentIndex]);
    const nextIndex = Math.floor(Math.random() * deck.cards.length);
    setCurrentIndex(nextIndex);
  };

  const handleBack = () => {
    if (history.length > 0) {
      const prev = history[history.length - 1];
      setCurrentIndex(prev);
      setHistory(history.slice(0, -1));
    }
  };

  const currentCard = deck.cards[currentIndex];

  return (
    <div className="fixed inset-0 z-[100] bg-gray-900 flex flex-col items-center justify-center p-6 text-white overflow-hidden">
      {/* HUD */}
      <div className="absolute top-0 left-0 right-0 p-6 flex justify-between items-center bg-gradient-to-b from-black/40 to-transparent">
        <button onClick={onExit} className="p-2 hover:bg-white/10 rounded-full transition-colors">
          <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path></svg>
        </button>
        <div className="text-center">
          <p className="text-xs uppercase tracking-widest opacity-60 font-bold">Đang chơi bộ bài</p>
          <p className="font-bold text-lg">{deck.title}</p>
        </div>
        <div className="w-12"></div>
      </div>

      {/* Card Container */}
      <div className="relative w-full max-w-sm aspect-[3/4] group perspective-1000">
        <div className={`w-full h-full rounded-[2.5rem] p-1 shadow-2xl transition-all duration-500 transform ${deck.colorClass}`}>
          <div className="w-full h-full bg-white/10 backdrop-blur-sm rounded-[2.3rem] flex flex-col items-center justify-center p-8 text-center border border-white/20">
            <span className="text-4xl mb-6 opacity-80">✦</span>
            <p className="text-2xl md:text-3xl font-bold leading-snug drop-shadow-md">
              "{currentCard.content}"
            </p>
            <div className="absolute bottom-10 left-0 right-0 opacity-40 text-xs font-bold uppercase tracking-widest">
              Lá bài #{currentCard.id}
            </div>
          </div>
        </div>
      </div>

      {/* Controls */}
      <div className="mt-16 flex items-center gap-8">
        <button 
          onClick={handleBack}
          disabled={history.length === 0}
          className={`p-4 rounded-full border-2 border-white/20 transition-all active:scale-90 ${history.length === 0 ? 'opacity-20 cursor-not-allowed' : 'hover:bg-white hover:text-gray-900'}`}
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 19l-7-7 7-7"></path></svg>
        </button>
        
        <button 
          onClick={handleNext}
          className="bg-white text-gray-900 px-10 py-5 rounded-3xl font-bold text-xl hover:scale-105 transition-all shadow-xl active:scale-95 flex items-center gap-2"
        >
          Lá tiếp theo
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7-7 7"></path></svg>
        </button>
      </div>

      <p className="mt-12 text-sm text-white/40 animate-pulse">
        Hãy thay phiên nhau đọc và trả lời thật lòng nhé!
      </p>
    </div>
  );
};

export default CardGame;
