import React from 'react';
import { connect } from 'react-redux';
import {StyledRoom, StyledNorthCon, StyledEastCon} from './styling/room.style'
const Room = ({room, currentRoom}) => {
    
    return (
        <StyledRoom room={room} currentRoom={currentRoom.description === room.description ? true : false}>
            <StyledNorthCon room={room} />
            <StyledEastCon room={room} />
        </StyledRoom>
    )
}

const mapStateToProps = ({ gameReducer }) => {
    return {
      currentRoom: gameReducer.currentRoom
    };
  };
  

export default connect(mapStateToProps)(Room) 