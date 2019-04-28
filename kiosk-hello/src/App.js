import React, { Component } from 'react';
import {Switch, Route} from 'react-router-dom'
import {BrowserRouter as Router} from "react-router-dom"
import "bootstrap/dist/css/bootstrap.min.css"
import ProductList from './Components/ProductList'
import Quickview from "./Components/Quickview"
import './App.css'

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <Switch>
          <Route path="/" component= {ProductList}/>
        </Switch>
        <Quickview/>
      </React.Fragment>
    );
  }
}

export default App;
