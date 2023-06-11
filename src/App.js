import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import { useState, useEffect } from "react";
import Product from "./components/Product";
import Store from "./components/Store";
import axios from 'axios';

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={(props) => <Store />}/>
        <Route 
          path="/product/:id" 
          component={props => <Product {...props}/>}
        /> 
        <Route>404 Page</Route>
      </Switch>
    </Router>
  );
}

export default App;
