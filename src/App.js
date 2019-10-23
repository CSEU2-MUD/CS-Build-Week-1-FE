import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Auth from './components/Auth';
import Game from './components/Game';
import { Protected, AuthRoute } from './components/Protected';
import NotFound from './components/NotFound';

const App = () => {
  return (
    <div>
      <Router>
        <div className="app-container">
          <Switch>
            <AuthRoute exact path="/" component={Auth} />
            <Protected exact path="/game" component={Game} />
            <Route component={NotFound} />
          </Switch>
        </div>
      </Router>
    </div>
  );
};

export default App;
