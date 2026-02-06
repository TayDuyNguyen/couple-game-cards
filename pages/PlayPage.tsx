
import React, { useState, useEffect, useMemo } from 'react';
// Fix: Import Type from @google/genai to define responseSchema for robust JSON extraction.
import { GoogleGenAI, Type } from "@google/genai";
import { Deck, Card, Player } from '../@types';

interface PlayPageProps {
  deck: Deck;
  onExit: () => void;
}

const PlayPage: React.FC<PlayPageProps> = ({ deck, onExit }) => {
  const [currentCard, setCurrentCard] = useState<Card | null>(null);
  const [isFlipped, setIsFlipped] = useState(false);
  const [isGenerating, setIsGenerating] = useState(false);
  const [isPaused, setIsPaused] = useState(false);
  const [isGameOver, setIsGameOver] = useState(false);
  const [drawnCount, setDrawnCount] = useState(0);
  const [favoritedCardIds, setFavoritedCardIds] = useState<number[]>([]);
  const [history, setHistory] = useState<Card[]>([]);

  // States for specific game logic
  const [llSelection, setLlSelection] = useState<'question' | 'dare' | null>(null);
  const [coupleMood, setCoupleMood] = useState<'sweet' | 'spicy' | 'hot'>('sweet');

  // Initialize AI
  const generateAICard = async (type?: string) => {
    setIsGenerating(true);
    setIsFlipped(false);
    
    try {
      // Fix: Always create a fresh instance of GoogleGenAI before making an API call.
      const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
      const prompt = `Bạn là một chuyên gia tạo nội dung cho board game. 
      Hãy tạo 1 lá bài mới cho bộ bài "${deck.title}". 
      Chủ đề: ${deck.description}.
      ${type ? `Yêu cầu loại bài: ${type}.` : ''}
      ${deck.slug === 'truth-or-dare-couple' ? `Mức độ táo bạo: ${coupleMood}.` : ''}
      
      Hãy tạo nội dung hấp dẫn, sâu sắc và mang tính kết nối cao.`;

      // Fix: Using responseSchema to ensure the AI returns a valid JSON object matching the Card interface.
      const response = await ai.models.generateContent({
        model: 'gemini-3-flash-preview',
        contents: prompt,
        config: { 
          responseMimeType: "application/json",
          responseSchema: {
            type: Type.OBJECT,
            properties: {
              content: {
                type: Type.STRING,
                description: 'Nội dung câu hỏi hoặc thử thách',
              },
              category: {
                type: Type.STRING,
                description: 'Tên category ngắn gọn',
              },
              categoryColor: {
                type: Type.STRING,
                description: 'Mã màu hex pastel phù hợp (ví dụ: #FFD1DC)',
              },
              type: {
                type: Type.STRING,
                description: 'Loại bài: question, dare, rule, hoặc boss',
              },
              followUp: {
                type: Type.STRING,
                description: 'Câu hỏi gợi mở thêm sau khi trả lời (tùy chọn)',
              }
            },
            required: ["content", "category", "categoryColor", "type"],
          }
        }
      });

      // Fix: Access response.text property safely and trim before parsing.
      const text = response.text;
      if (!text) throw new Error("Model returned empty response");
      
      const result = JSON.parse(text.trim());
      const newCard: Card = {
        id: Date.now(),
        ...result
      };

      setTimeout(() => {
        setCurrentCard(newCard);
        setHistory(prev => [newCard, ...prev].slice(0, 5));
        setDrawnCount(prev => prev + 1);
        setIsGenerating(false);
      }, 600);
    } catch (error) {
      console.error("AI Generation failed:", error);
      // Fallback to static cards if AI fails
      const fallback = deck.cards[Math.floor(Math.random() * deck.cards.length)];
      setCurrentCard(fallback);
      setIsGenerating(false);
    }
  };

  useEffect(() => {
    generateAICard();
  }, []);

  const handleNext = () => {
    if (drawnCount >= deck.cardCount) {
      setIsGameOver(true);
    } else {
      generateAICard(llSelection || undefined);
    }
  };

  const toggleFavorite = () => {
    if (!currentCard) return;
    if (favoritedCardIds.includes(currentCard.id)) {
      setFavoritedCardIds(prev => prev.filter(id => id !== currentCard.id));
    } else {
      setFavoritedCardIds(prev => [...prev, currentCard.id]);
    }
  };

  if (isGameOver) {
    return (
      <div className="fixed inset-0 z-[250] bg-brand-wine flex flex-col items-center justify-center p-8 text-center animate-in fade-in duration-700">
        <span className="material-symbols-outlined text-8xl text-brand-magenta mb-6 animate-bounce fill-1">celebration</span>
        <h1 className="text-4xl font-black mb-4">HOÀN THÀNH!</h1>
        <p className="text-white/60 mb-12">Bạn đã khám phá hết {drawnCount} lá bài của bộ {deck.title}.</p>
        <button onClick={onExit} className="bg-brand-magenta px-12 py-4 rounded-2xl font-black shadow-xl neon-shadow">QUAY LẠI TRANG CHỦ</button>
      </div>
    );
  }

  return (
    <div className="fixed inset-0 z-[100] bg-brand-wine bg-wine-gradient flex flex-col items-center justify-center p-6 text-white overflow-hidden font-jakarta">
      {/* Header HUD */}
      <div className="absolute top-0 left-0 right-0 p-8 flex justify-between items-center z-50">
        <button onClick={onExit} className="w-12 h-12 glass-card rounded-2xl flex items-center justify-center hover:bg-white/10 transition-all">
          <span className="material-symbols-outlined">close</span>
        </button>
        <div className="text-center">
          <p className="text-[10px] font-black uppercase tracking-[0.3em] opacity-40 mb-1">LIVE GENERATION</p>
          <p className="font-black text-2xl tracking-tighter text-glow">{deck.title}</p>
        </div>
        <div className="w-12 h-12 glass-card rounded-2xl flex items-center justify-center text-brand-magenta">
          <span className="material-symbols-outlined fill-1">bolt</span>
        </div>
      </div>

      {/* Progress */}
      <div className="w-full max-w-md bg-white/10 h-1.5 rounded-full overflow-hidden mb-12 mt-20">
        <div 
          className="bg-brand-magenta h-full transition-all duration-1000 shadow-[0_0_10px_#FF2D55]" 
          style={{ width: `${(drawnCount / deck.cardCount) * 100}%` }}
        />
      </div>

      {/* Main Card Area */}
      <div className={`relative w-full max-w-sm aspect-[3/4] transition-all duration-500 transform ${isGenerating ? 'scale-95 opacity-50 blur-sm' : 'scale-100 opacity-100 blur-0'}`}>
        <div 
          onClick={() => !isGenerating && !isFlipped && setIsFlipped(true)}
          className={`w-full h-full relative preserve-3d transition-transform duration-700 cursor-pointer ${isFlipped ? 'rotate-y-180' : ''}`}
        >
          {/* Mặt trước */}
          <div className="absolute inset-0 backface-hidden rounded-[3rem] p-1 bg-brand-magenta/20 border border-brand-magenta/30 shadow-2xl overflow-hidden group">
            <div className="w-full h-full glass-card rounded-[2.8rem] flex flex-col items-center justify-center p-12 text-center">
              <div className={`w-24 h-24 bg-brand-magenta/10 rounded-full flex items-center justify-center mb-8 ${isGenerating ? 'animate-spin' : 'animate-pulse'}`}>
                <span className="material-symbols-outlined text-5xl text-brand-magenta">
                  {isGenerating ? 'sync' : 'style'}
                </span>
              </div>
              <p className="text-sm font-black uppercase tracking-[0.3em] opacity-30">
                {isGenerating ? 'Đang tạo bài...' : 'Chạm để lật bài'}
              </p>
            </div>
          </div>

          {/* Mặt sau */}
          <div className="absolute inset-0 backface-hidden rotate-y-180 rounded-[3rem] p-1 bg-white/10 shadow-2xl overflow-hidden">
            <div className={`w-full h-full rounded-[2.8rem] p-1 flex flex-col items-center justify-center text-center relative ${deck.colorClass}`}>
               <div className="w-full h-full bg-black/20 backdrop-blur-md rounded-[2.5rem] p-8 flex flex-col items-center justify-center border border-white/10">
                  {currentCard && (
                    <div className="animate-in fade-in zoom-in duration-500">
                      {currentCard.category && (
                        <span 
                          className="px-4 py-1 rounded-full text-[10px] font-black uppercase tracking-widest mb-6 inline-block"
                          style={{ backgroundColor: currentCard.categoryColor || '#FF2D55', color: '#000' }}
                        >
                          {currentCard.category}
                        </span>
                      )}
                      <p className="text-3xl font-bold leading-tight mb-6 drop-shadow-lg">
                        "{currentCard.content}"
                      </p>
                      {currentCard.followUp && (
                        <p className="text-sm text-white/60 italic border-t border-white/10 pt-4 mt-4">
                          Gợi mở: {currentCard.followUp}
                        </p>
                      )}
                    </div>
                  )}
               </div>
            </div>
          </div>
        </div>
      </div>

      {/* Controls */}
      <div className="mt-16 flex flex-col items-center gap-8 z-50">
        <button 
          onClick={handleNext}
          disabled={isGenerating}
          className={`bg-brand-magenta text-white px-12 py-5 rounded-3xl font-black text-xl transition-all shadow-xl neon-shadow flex items-center gap-4 group ${isGenerating ? 'opacity-50 cursor-not-allowed scale-95' : 'hover:scale-105 active:scale-95'}`}
        >
          {isGenerating ? 'ĐANG TẠO...' : 'RÚT BÀI MỚI'}
          <span className="material-symbols-outlined group-hover:translate-x-1 transition-transform">arrow_forward</span>
        </button>

        <div className="flex gap-6">
          <button 
            onClick={toggleFavorite}
            className={`w-14 h-14 glass-card rounded-full flex items-center justify-center transition-all ${currentCard && favoritedCardIds.includes(currentCard.id) ? 'text-brand-magenta border-brand-magenta' : 'text-white/40'}`}
          >
            <span className={`material-symbols-outlined ${currentCard && favoritedCardIds.includes(currentCard.id) ? 'fill-1' : ''}`}>favorite</span>
          </button>
          <button className="w-14 h-14 glass-card rounded-full flex items-center justify-center text-white/40 hover:text-white">
            <span className="material-symbols-outlined">share</span>
          </button>
        </div>
      </div>

      <style>{`
        .preserve-3d { transform-style: preserve-3d; }
        .backface-hidden { backface-visibility: hidden; }
        .rotate-y-180 { transform: rotateY(180deg); }
        .fill-1 { font-variation-settings: 'FILL' 1; }
      `}</style>
    </div>
  );
};

export default PlayPage;
