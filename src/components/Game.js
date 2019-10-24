import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import Header from './Header';
import Map from './Map';
import Buttons from './Buttons';
import Sidebar from './Sidebar';
import { initialize, getRooms } from '../actions/game';
import { GameContainer } from './styling/game.style';

const Game = props => {
  useEffect(() => {
    props.initialize();
    props.getRooms();
  });

  return (
    <GameContainer>
      <Header />
      <main>
        <section>
          <Map />
          <Buttons />
        </section>
        <Sidebar />
      </main>
    </GameContainer>
  );
};

export default connect(
  null,
  { initialize, getRooms }
)(Game);
