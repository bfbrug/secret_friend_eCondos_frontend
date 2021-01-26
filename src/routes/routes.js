import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Main from '../pages/Main';
import Friend from '../pages/Friend';
import Secret from '../pages/Secret';

export default function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Main} />
        <Route path="/friend" component={Friend} />
        <Route path="/secret" component={Secret} />
      </Switch>
    </BrowserRouter>
  );
}
