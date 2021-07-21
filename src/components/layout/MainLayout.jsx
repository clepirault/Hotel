import React from 'react';
import Footer from '../common/footer/Footer';
import Header from '../common/header/Header';

function MainLayout({ children }) {
  return (
    <div>
      <Header />
      <main>{children}</main>
      <Footer />
    </div>
  );
}

export default MainLayout;
