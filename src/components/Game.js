import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import Header from './Header';
import Map from './Map';
import Buttons from './Buttons';
import Sidebar from './Sidebar';
import './styling/game.css';
import { initialize } from '../actions/game';

const Game = props => {
  useEffect(() => {
    props.initialize();
  });

  return (
    <div className="game-container">
      <Header />
      <main>
        <section>
          <Map />
          <Buttons />
        </section>
        <Sidebar />
      </main>
    </div>
  );
};

export default connect(
  null,
  { initialize }
)(Game);
