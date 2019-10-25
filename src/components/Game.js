import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import Map from './Map';
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
      <main>
        <Map />
        <Sidebar />
      </main>
    </GameContainer>
  );
};

export default connect(
  null,
  { initialize, getRooms }
)(Game);
