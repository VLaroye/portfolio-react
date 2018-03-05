import React, { Component } from 'react';

// ROUTING
import { BrowserRouter as Router, Route } from 'react-router-dom';

// COMPONENTS
import Layout from './components/Layout/Layout';
import HomePage from './scenes/HomePage/HomePage';

class App extends Component {
  render() {
    return (
      <Layout>
        <Router>
          <Route exact path="/" component={HomePage} />
        </Router>
      </Layout>
    );
  }
}

export default App;
