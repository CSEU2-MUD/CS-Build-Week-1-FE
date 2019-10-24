import React from 'react';
import { clearLocalStorage } from '../helpers';
import { HeaderContainer } from './styling/header.style';

const Header = () => {
  return (
    <HeaderContainer>
      <h1>MUD-GAME</h1>
      <div onClick={() => clearLocalStorage()}>Logout</div>
    </HeaderContainer>
  );
};

export default Header;
