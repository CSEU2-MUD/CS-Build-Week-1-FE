import React from 'react';
import { connect } from 'react-redux';
import Buttons from './Buttons';
import Header from './Header';
import {
  SidebarContainer,
  Content,
  SubContainer
} from './styling/sidebar.style';

const Description = ({ player, currentRoom }) => {
  return (
    <SubContainer>
      <h2>Room Description</h2>
      <Content>
        {player ? (
          <p>
            Hello, {player} <br />
            You are in {currentRoom.title} <br />
            {currentRoom.description}
          </p>
        ) : (
          <p>Welcome to MUD Game</p>
        )}
      </Content>
    </SubContainer>
  );
};

const Players = ({ players }) => {
  return (
    <SubContainer>
      <h2>Players in Current Room</h2>
      <Content>
        {players.length > 0 ? (
          players.map((player, index) => (
            <p key={`${player}-${index}`}>{player}</p>
          ))
        ) : (
          <p>There is no Player in Current Room</p>
        )}
      </Content>
    </SubContainer>
  );
};

const Sidebar = ({ players, player, currentRoom }) => {
  return (
    <SidebarContainer>
      <Header />
      <Buttons />
      <Description player={player} currentRoom={currentRoom} />
      <Players players={players} />
    </SidebarContainer>
  );
};

const mapStateToProps = ({ gameReducer }) => {
  return {
    players: gameReducer.players,
    player: gameReducer.player,
    currentRoom: gameReducer.currentRoom
  };
};

export default connect(
  mapStateToProps,
  null
)(Sidebar);
