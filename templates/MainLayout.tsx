
import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { Page } from '../@types';

interface MainLayoutProps {
  children: React.ReactNode;
  onNavigate: (page: Page) => void;
  hideFooter?: boolean;
  hideHeader?: boolean;
}

const MainLayout: React.FC<MainLayoutProps> = ({ children, onNavigate, hideFooter, hideHeader }) => {
  return (
    <div className="min-h-screen flex flex-col bg-brand-wine font-jakarta">
      {!hideHeader && <Header onNavigate={onNavigate} />}
      <main className="flex-grow">
        {children}
      </main>
      {!hideFooter && <Footer />}
    </div>
  );
};

export default MainLayout;
