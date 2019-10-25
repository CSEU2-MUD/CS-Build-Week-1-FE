import React, { useEffect, useState } from 'react';
import { Content, SubContainer } from './styling/sidebar.style';
import { PUSHER_KEY, PUSHER_CLUSTER } from '../consts';
import Pusher from 'pusher-js';
import { connect } from 'react-redux';
import { say } from '../actions/game';

const Chat = props => {
  const [chats, updateChats] = useState([]);
  const [newMessage, updateNewMessage] = useState('');

  useEffect(() => {
    const pusher = new Pusher(PUSHER_KEY, {
      cluster: PUSHER_CLUSTER,
      encrypted: true,
    });

    const channel = pusher.subscribe(`p-channel-${props.playerID}`);

    channel.bind('broadcast', data => {
      updateChats(prev => [...prev, data.message]);
    });
  }, [props.playerID]);

  const sendChat = e => {
    e.preventDefault();
    if (newMessage.length > 0) {
      props.say(newMessage);
      updateNewMessage('');
    }
  };

  return (
    <React.Fragment>
      <SubContainer>
        <h2>Chat</h2>
        <Content column>
          {chats.map((message, index) => {
            return <p key={`${message}-${index}`}>{message}</p>;
          })}
        </Content>
      </SubContainer>
      <Content>
        <form onSubmit={sendChat}>
          <input
            onChange={e => updateNewMessage(e.target.value)}
            value={newMessage}
            placeholder="Type a message, Hey! Roomies..."
          />
          <button type="submit">Send Message to Roomies</button>
        </form>
      </Content>
    </React.Fragment>
  );
};

const mapStateToProps = ({ gameReducer }) => {
  return {
    playerID: gameReducer.player.uuid,
  };
};

export default connect(
  mapStateToProps,
  { say }
)(Chat);
