
import React, { useState } from 'react';
import MainLayout from './templates/MainLayout';
import HomePage from './pages/HomePage';
import DetailPage from './pages/DetailPage';
import PlayPage from './pages/PlayPage';
import ProfilePage from './pages/ProfilePage';
import { Page, Deck } from './@types';

// Fix: Restoring App component to App.tsx to resolve "Already included file name ... differs only in casing" error.
const App: React.FC = () => {
  const [currentPage, setCurrentPage] = useState<Page>(Page.Home);
  const [selectedDeck, setSelectedDeck] = useState<Deck | null>(null);

  const navigateToHome = () => {
    setCurrentPage(Page.Home);
    setSelectedDeck(null);
    window.scrollTo(0, 0);
  };

  const navigateToDetail = (deck: Deck) => {
    setSelectedDeck(deck);
    setCurrentPage(Page.DeckDetail);
    window.scrollTo(0, 0);
  };

  const navigateToPlay = () => {
    setCurrentPage(Page.Play);
  };

  const navigateToProfile = () => {
    setCurrentPage(Page.Profile);
    window.scrollTo(0, 0);
  };

  const renderContent = () => {
    switch (currentPage) {
      case Page.Home:
        return <HomePage onSelectDeck={navigateToDetail} />;
      case Page.DeckDetail:
        return selectedDeck ? (
          <DetailPage 
            deck={selectedDeck} 
            onBack={navigateToHome} 
            onPlay={navigateToPlay} 
          />
        ) : null;
      case Page.Play:
        return selectedDeck ? (
          <PlayPage 
            deck={selectedDeck} 
            onExit={navigateToHome} 
          />
        ) : null;
      case Page.Profile:
        return <ProfilePage onBack={navigateToHome} />;
      default:
        return <div>Trang không tồn tại</div>;
    }
  };

  return (
    <MainLayout 
      onNavigate={setCurrentPage}
      hideFooter={currentPage === Page.Play}
      hideHeader={currentPage === Page.Play}
    >
      {renderContent()}
    </MainLayout>
  );
};

export default App;
