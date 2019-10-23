import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Auth from './components/Auth';
import Game from './components/Game';

const App = () => {
  return (
    <div>
      <Router>
        <div className="app-container">
          <Route exact path="/" component={Auth} />
          <Route exact path="/game" component={Game} />
        </div>
      </Router>
    </div>
  );
};

export default App;
