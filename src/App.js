import React from 'react';
import { BrowserRouter as Router, Route, Redirect, Switch } from 'react-router-dom'

import Users from './user/pages/users';
import NewPlace from './places/pages/newPlace';
import MainNavigation from './shared/components/Navigation/MainNavigation'
import './App.css';

const App = () => {
  return <Router>
    <MainNavigation/>
    <main>
    <Switch>
      <Route path= "/" exact component={Users}/>
      <Route path= "/places/new" exact component= {NewPlace}/>
      <Redirect to="/" />
    </Switch>
    </main>
  </Router>

}

export default App;
