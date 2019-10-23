import React from 'react';
import './styling/header.css';
import { clearLocalStorage } from '../helpers';

const Header = () => {
  return (
    <header>
      <h1>MUD-GAME</h1>
      <div onClick={() => clearLocalStorage()}>Logout</div>
    </header>
  );
};

export default Header;
