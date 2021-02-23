import React from 'react'
import {
    BrowserRouter as Router,
    Route,
    Link
  } from "react-router-dom";

import Menu from './components/Menu'
import Music from './components/Music'
import Add from './components/Liked'

const App = () => {
    return (
        <Router>
        <div className="app">
            <div className="menu"><Menu /></div>
            <div className="music">
                <Route path="/" component={Music} exact></Route>
                <Route path="/add" component={Add} exact></Route>
            </div>
        </div>
        </Router>
    )
}

export default App
