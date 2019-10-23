import React from 'react';
import { connect } from 'react-redux';
import './styling/sidebar.css';

const Description = ({ player, currentRoom }) => {
  return (
    <div className="sub-container border">
      <h2 className="header">Room Description</h2>
      <div className="content">
        {player ? (
          <p>
            Hello, {player} <br />
            You are in {currentRoom.title} <br />
            {currentRoom.description}
          </p>
        ) : (
          <p>Welcome to MUD Game</p>
        )}
      </div>
    </div>
  );
};

const Players = ({ players }) => {
  return (
    <div className="sub-container player-container border">
      <h2 className="header">Players in Current Room</h2>
      <div className="content">
        {players.length > 0 ? (
          players.map((player, index) => (
            <p key={`${player}-${index}`}>{player}</p>
          ))
        ) : (
          <p>There is no Player in Current Room</p>
        )}
      </div>
    </div>
  );
};

const Sidebar = ({ players, player, currentRoom }) => {
  return (
    <div className="sidebar-container border">
      <Description player={player} currentRoom={currentRoom} />
      <Players players={players} />
    </div>
  );
};

const mapStateToProps = ({ gameReducer }) => {
  return {
    players: gameReducer.players,
    player: gameReducer.player,
    currentRoom: gameReducer.currentRoom,
  };
};

export default connect(
  mapStateToProps,
  null
)(Sidebar);
