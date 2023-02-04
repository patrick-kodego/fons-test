import React from 'react';
import './app.css';
import Sidebar from '../components/Sidebar';
import Maindash from '../components/maindash/maindash';
import RightSide from '../components/RightSide/RightSide';

function Home() {
  const handleClick = () => {
    localStorage.removeItem('signUp');
    window.location.reload();
  };

  return (
    <div className='App'>
      <div className='AppGlass'>
        <Sidebar />
        <Maindash />
        <RightSide />
      </div>
    </div>
  );
}

export default Home;
