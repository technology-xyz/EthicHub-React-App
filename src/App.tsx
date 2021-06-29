import React,{ useState } from "react";

import Landing from './pages/landing'
import Bonds from './pages/bonds'
import Farms from './pages/farms'
import Borrow from './pages/borrow'
import Stats from './pages/stats'
import {
  HashRouter as Router,
 
  Route,
  Switch,
} from "react-router-dom";
import "./App.css";


declare global {
  interface Window {
      ethereum:any;
  }
}

function App() {

 
  return (
    <Router>
      <Switch>
      <Route
                exact
                path="/"
                component={Landing}
              />
               <Route
                exact
                path="/bonds"
                component={Bonds}
              />
                <Route
                exact
                path="/farms"
                component={Farms}
              />
                <Route
                exact
                path="/borrow"
                component={Borrow}
              />
               <Route
                exact
                path="/stats"
                component={Stats}
              />
      </Switch>
    </Router>
   
  );
}

export default App;
