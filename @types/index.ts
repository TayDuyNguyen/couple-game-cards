
export interface Card {
  id: number;
  content: string;
  type?: 'question' | 'dare' | 'rule' | 'event' | 'boss';
  category?: string;
  categoryColor?: string;
  difficulty?: 1 | 2 | 3;
  followUp?: string;
  mood?: 'sweet' | 'spicy' | 'hot';
}

export interface Player {
  id: string;
  name: string;
  score: number;
  drinks: number;
}

export interface GameSession {
  id: string;
  deckId: string;
  deckTitle: string;
  date: string;
  cardsDrawn: number;
  playTimeMinutes: number;
  favoritedCards: number[];
}

export interface Achievement {
  id: string;
  title: string;
  description: string;
  icon: string;
  isUnlocked: boolean;
}

export interface Deck {
  id: string;
  title: string;
  slug: string;
  description: string;
  cardCount: number;
  price: string;
  imageUrl: string;
  colorClass: string;
  cards: Card[];
  playTime: string;
  playersRange: string;
  minAge: string;
  longDescription?: string;
}

export enum Page {
  Home = 'home',
  DeckDetail = 'detail',
  Play = 'play',
  Profile = 'profile'
}

export interface GameSetup {
  mode: 'couple' | 'group';
  player1: string;
  player2: string;
  soundEnabled: boolean;
  animationEnabled: boolean;
}
