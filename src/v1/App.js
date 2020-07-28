import React from 'react';

import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Switch } from 'react-router';
import { StoreProvider, createStore} from "easy-peasy";

import model from "./model";
import HomePage from './page/HomePage';

import './asset/bootstrap.min.css';
import './asset/style.css';

function App() {
  const store = createStore(model);
  return (
    <StoreProvider store={store}>
      <Router  basename={`${process.env.PUBLIC_URL}/`} >
            <Switch>
              <Route Route exact path="/" component={HomePage} />
            </Switch>
      </Router>
    </StoreProvider>
  );
}

export default App;
