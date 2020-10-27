import React, { Component } from 'react'
import './App.css';
import Site from './containers/Site/Site'
import {BrowserRouter,Switch} from 'react-router-dom'



export default class App extends Component {
  render() {
    return (
      <div>
      <BrowserRouter>
      <Site />


      </BrowserRouter>
      </div>
    )
  }
}
