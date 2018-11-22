import React, { Component } from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import Home from './components/Home';
import MovieDetails from './components/MovieDetails';

const App = () => (
  <Router>
    <div>
      <Header />
      <Route exact path="/" component={Home} />
      <Route path="/:movieId" component={MovieDetails} />
    </div>
  </Router>
);

const Header = () => (
  <Link to="/">Home</Link>
);

ReactDOM.render(<App />, document.getElementById("index"));
