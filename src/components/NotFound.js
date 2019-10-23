import React from 'react';
import { Link } from 'react-router-dom';

const NotFound = () => {
  return (
    <div className="container">
      <h1>MUD GAME</h1>
      <Link to="/">
        Sorry Mate, Page not available. <br />
        Click return to Home
      </Link>
    </div>
  );
};

export default NotFound;
