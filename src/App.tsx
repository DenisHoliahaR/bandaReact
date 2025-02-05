import React from 'react';
import Header from './components/layout/Header';
import Footer from './components/layout/Footer';
import { Outlet } from 'react-router-dom';

function App() {
  return (
    <div className="flex flex-col justify-between h-full align-middle overflow-y-auto">
      <Header />
      <Outlet />
      <Footer/>
    </div>
  );
}

export default App;
