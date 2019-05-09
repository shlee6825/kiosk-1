import React, { Component } from 'react';
import {Switch, Route} from 'react-router-dom'
import {BrowserRouter as Router} from "react-router-dom"
import "bootstrap/dist/css/bootstrap.min.css"
import './Components/css/style.css';
import Header from './Components/Header'
import ProductList from './Components/ProductList'
import Quickview from "./Components/Quickview"

import './App.css'

class App extends Component {
  render() {
    return (
      
      <React.Fragment>
        <Header/>
        <Switch>
          {/* <Route path="/index" component={}/> */}
          <Route path="/product" component= {ProductList}/>
        </Switch>
        <Quickview/>
      </React.Fragment>
      
    );
  }
}

export default App;
