import React, { Component } from 'react';

// ROUTING
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

// COMPONENTS
import Layout from './components/Layout/Layout';
import HomePage from './scenes/HomePage/HomePage';
import Projects from './scenes/Projects/Projects';

class App extends Component {
  render() {
    return (
        <Router>
          <Switch>
            <Route exact path="/" component={HomePage} />
            <Route path="/realisations" component={Projects} />
          </Switch>
        </Router>
    );
  }
}

export default App;
