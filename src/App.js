import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom';

import Navbar from './components/layout/Navbar';
import Index from './components/layout/Index';
import Watch from './components/watch/Watch';

import { Provider } from './context';

import './App.css';

class App extends Component {
  render() {
    return (
      <Provider>
        <Router>
          <React.Fragment>
            <Navbar />
            <div className="container">
              <Switch>
                <Route exact path="/" component={Index} />
                <Route exact path="/movie/:originalFilename" component={Watch} />
              </Switch>
            </div>
          </React.Fragment>
        </Router>
      </Provider>
    );
  }
}

export default App;
