import React from 'react';

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import { createStore } from "redux";
import { Provider } from "react-redux";
import reducer from './shared/redux/reducer';

import Home from './components/Home';

import Users from './components/users';
import UserListRenderProps from './components/UserListRenderProps';
import UserProfile from './components/UserProfile';

import './App.css';

let store = createStore(reducer);

function App() {
  return (
    <Provider store={store}>
      <div className="App">

        <Router>
          <div>
            <Switch>
              <Route exact path="/">
                <Home />
              </Route>
              <Route path="/user-list">
                <Users />
              </Route>
              <Route path="/user-list-render-prop">
                <UserListRenderProps />
              </Route>
              <Route path="/user-profile">
                <UserProfile />
              </Route>
            </Switch>
          </div>
        </Router>

      </div>
    </Provider>
  );
}

export default App;
