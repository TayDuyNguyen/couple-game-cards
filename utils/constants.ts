
import { Deck } from '../@types';

export const DECKS: Deck[] = [
  {
    id: 'deck-1',
    title: 'Hẹn',
    slug: 'hen',
    description: 'Phá tan sự ngại ngùng ban đầu và tìm thấy nhịp điệu chung.',
    longDescription: 'Bộ bài "Hẹn" được thiết kế đặc biệt cho những buổi gặp gỡ đầu tiên. Từng lá bài là một nấc thang nhẹ nhàng dẫn lối bạn vào thế giới nội tâm của đối phương một cách tinh tế nhất.',
    cardCount: 50,
    price: '199.000đ',
    playTime: '30-45 Phút',
    playersRange: '2 Người',
    minAge: '16+',
    imageUrl: 'https://images.unsplash.com/photo-1518199266791-5375a83190b7?q=80&w=800&auto=format&fit=crop',
    colorClass: 'bg-gradient-to-br from-pink-200 via-emerald-100 to-yellow-100 text-gray-800',
    cards: [
      { id: 1, content: "Ấn tượng đầu tiên của bạn về người đối diện là gì?", category: "Tình yêu", categoryColor: "#FFC0CB", followUp: "Tại sao bạn lại cảm thấy như vậy?" },
      { id: 2, content: "Nếu có 1 ngày không lo về tiền bạc, bạn sẽ làm gì?", category: "Ước mơ", categoryColor: "#FFF9C4" },
      { id: 3, content: "Kỷ niệm thơ ấu nào khiến bạn mỉm cười mỗi khi nhớ lại?", category: "Tuổi thơ", categoryColor: "#E0F2F1" },
      { id: 4, content: "Điều gì ở đối phương khiến bạn cảm thấy tò mò nhất hiện tại?", category: "Khám phá", categoryColor: "#E1F5FE" }
    ]
  },
  {
    id: 'deck-2',
    title: 'Lói hay Lèm',
    slug: 'loi-hay-lem',
    description: 'Vui vẻ, nhẹ nhàng cho những buổi tụ tập nhóm bạn.',
    longDescription: 'Kết hợp giữa những câu hỏi "thật thà" và những thử thách "lầy lội", bộ bài này đảm bảo mang lại những tràng cười sảng khoái.',
    cardCount: 30,
    price: '189.000đ',
    playTime: '45-60 Phút',
    playersRange: '3-6 Người',
    minAge: '12+',
    imageUrl: 'https://images.unsplash.com/photo-1529156069898-49953e39b3ac?q=80&w=800&auto=format&fit=crop',
    colorClass: 'bg-gradient-to-br from-pink-300 to-emerald-200 text-gray-800',
    cards: [
      { id: 1, content: "Hãy bắt chước điệu cười của người bên trái bạn.", type: 'dare', difficulty: 1 },
      { id: 2, content: "Kể về một lần bạn 'nói dối' mà không bị phát hiện.", type: 'question', difficulty: 2 },
      { id: 3, content: "Hát một bài hát bất kỳ bằng giọng trẻ con.", type: 'dare', difficulty: 2 },
      { id: 4, content: "Ai là người có gu ăn mặc tệ nhất trong nhóm này?", type: 'question', difficulty: 3 }
    ]
  },
  {
    id: 'deck-3',
    title: 'Truth or Dare Couple',
    slug: 'truth-or-dare-couple',
    description: 'Kịch tính và hâm nóng tình cảm đôi lứa.',
    longDescription: 'Đã đến lúc hâm nóng mối quan hệ bằng những thử thách kịch tính hơn. Càng về sau, mức độ "nóng" sẽ càng tăng lên.',
    cardCount: 50,
    price: '249.000đ',
    playTime: '60+ Phút',
    playersRange: '2 Người',
    minAge: '18+',
    imageUrl: 'https://images.unsplash.com/photo-1516589174184-c685266e48ec?q=80&w=800&auto=format&fit=crop',
    colorClass: 'bg-gradient-to-br from-blue-600 to-red-800 text-white',
    cards: [
      { id: 1, content: "Khoảnh khắc nào bạn biết mình đã yêu đối phương?", type: 'question', mood: 'sweet' },
      { id: 2, content: "Hôn người ấy vào vị trí mà bạn thích nhất trên mặt.", type: 'dare', mood: 'sweet' },
      { id: 3, content: "Hãy kể về một tưởng tượng lãng mạn mà bạn chưa dám thực hiện.", type: 'question', mood: 'spicy' },
      { id: 4, content: "Thực hiện một điệu nhảy quyến rũ trước mặt đối phương.", type: 'dare', mood: 'hot' }
    ]
  },
  {
    id: 'deck-4',
    title: 'Mệt (Party)',
    slug: 'met-party',
    description: 'Không khí lễ hội, gia tăng kết nối cực mạnh.',
    longDescription: 'Dành cho những buổi party thâu đêm. Càng chơi càng cuốn, càng mệt càng vui!',
    cardCount: 60,
    price: '219.000đ',
    playTime: 'Thoải mái',
    playersRange: 'Nhóm bạn',
    minAge: '18+',
    imageUrl: 'https://images.unsplash.com/photo-1492684223066-81342ee5ff30?q=80&w=800&auto=format&fit=crop',
    colorClass: 'bg-gradient-to-br from-orange-500 via-purple-600 to-pink-500 text-white',
    cards: [
      { id: 1, content: "Ai là người uống khỏe nhất trong bàn này? Người đó phải uống 1 ly.", type: 'rule' },
      { id: 2, content: "Mọi người cùng thực hiện một cú 'cheers' thật lớn nào!", type: 'event' },
      { id: 3, content: "Boss: Thách đấu người đối diện oẳn tù tì, ai thua uống 2 ly.", type: 'boss' },
      { id: 4, content: "Quy tắc mới: Không được dùng điện thoại cho đến hết lượt chơi này.", type: 'rule' }
    ]
  }
];
