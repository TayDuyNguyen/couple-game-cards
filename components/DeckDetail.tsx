
import React from 'react';
// Fix: Reference the correct type definitions in the @types directory to avoid importing from empty types.ts.
import { Deck } from '../@types';

interface DeckDetailProps {
  deck: Deck;
  onBack: () => void;
  onPlay: () => void;
}

const DeckDetail: React.FC<DeckDetailProps> = ({ deck, onBack, onPlay }) => {
  return (
    <div className="min-h-screen bg-white">
      <div className={`h-80 md:h-[400px] relative ${deck.colorClass}`}>
        <button 
          onClick={onBack}
          className="absolute top-6 left-6 w-10 h-10 bg-white/20 backdrop-blur rounded-full flex items-center justify-center text-white hover:bg-white/40 transition-colors z-10"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7"></path></svg>
        </button>
        <img src={deck.imageUrl} alt={deck.title} className="w-full h-full object-cover opacity-60" />
        <div className="absolute bottom-0 left-0 right-0 p-8 text-white bg-gradient-to-t from-black/60 to-transparent">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-3xl md:text-5xl font-bold mb-2">{deck.title}</h1>
            <p className="text-lg opacity-90">{deck.cardCount} Lá bài • Phiên bản Digital</p>
          </div>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-6 py-12">
        <div className="grid md:grid-cols-3 gap-12">
          <div className="md:col-span-2">
            <h2 className="text-2xl font-bold mb-4">Mô tả bộ bài</h2>
            <p className="text-gray-600 mb-8 text-lg leading-relaxed">
              {deck.description} Đây là bộ bài được thiết kế tinh tế để giúp bạn và những người xung quanh 
              có những giây phút thực sự ý nghĩa. Từng lá bài là một nấc thang dẫn lối tới sự thấu hiểu và gắn kết.
            </p>

            <h3 className="text-xl font-bold mb-4">Bạn sẽ nhận được gì?</h3>
            <ul className="space-y-4 mb-8">
              {[
                "Bộ câu hỏi được nghiên cứu tâm lý kỹ lưỡng",
                "Giao diện chơi mượt mà trên mọi thiết bị",
                "Không giới hạn thời gian và số người chơi",
                "Cập nhật thêm nội dung định kỳ"
              ].map((item, idx) => (
                <li key={idx} className="flex items-start gap-3">
                  <span className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center text-green-600 text-xs mt-1">✓</span>
                  <span className="text-gray-700">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="md:col-span-1">
            <div className="bg-gray-50 p-8 rounded-3xl sticky top-24 border border-gray-100">
              <div className="text-center mb-6">
                <span className="text-3xl font-bold text-gray-900">{deck.price}</span>
                <p className="text-sm text-gray-500 mt-1">Sở hữu vĩnh viễn</p>
              </div>
              <button 
                onClick={onPlay}
                className="w-full bg-indigo-600 text-white py-4 rounded-2xl font-bold text-lg hover:bg-indigo-700 transition-all shadow-lg active:scale-95 mb-4"
              >
                Chơi ngay miễn phí
              </button>
              <button className="w-full bg-white text-indigo-600 border-2 border-indigo-600 py-4 rounded-2xl font-bold text-lg hover:bg-indigo-50 transition-all active:scale-95">
                Mua làm quà tặng
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DeckDetail;
