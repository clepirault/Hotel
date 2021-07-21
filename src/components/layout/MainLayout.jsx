import React from 'react';
import Header from '../common/header/Header';

function MainLayout({ children }) {
  return (
    <div>
      <Header />
      <main>{children}</main>
    </div>
  );
}

export default MainLayout;
