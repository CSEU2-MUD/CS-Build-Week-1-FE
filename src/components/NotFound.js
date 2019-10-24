import React from 'react';
import { Link } from 'react-router-dom';
import { Container } from '../app.style';

const NotFound = () => {
  return (
    <Container>
      <h1>MUD GAME</h1>
      <Link to="/">
        Sorry Mate, Page not available. <br />
        Click return to Home
      </Link>
    </Container>
  );
};

export default NotFound;
