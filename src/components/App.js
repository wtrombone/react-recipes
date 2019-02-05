import React from 'react';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';
import Header from './Header';
import Home from './Home';
import NotFound from './NotFound';
import Favorites from './Favorites';

const App = () => (
  <BrowserRouter>
    <main>
      <Header />

      <Switch>
        <Redirect from="/home" to="/" />
        <Route exact path="/" component={Home} />
        <Route path="/favorites" component={Favorites} />
        <Route component={NotFound} />
      </Switch>
    </main>
  </BrowserRouter>
);

export default App;
