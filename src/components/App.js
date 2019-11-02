import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { withRouter } from 'react-router'
import './App.css';
import Chat from './Chat';

function App() {
  return (
    <Switch>
      <Route path="/:place" render={({ match }) => {
        let place = match.params.place
        return <Chat place={place} />
      }} />

      <Route exact path="/" component={Chat} />

    </Switch>
  );
}

export default withRouter(App);
