import React from 'react'
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
// import {useHistory} from "react-router-dom";
import Home from "./Home";
import Categories from "./Categories";
import AboutUs from "./AboutUs";
import MyCart from "./MyCart";
import SignIn from "./SignIn";
import Register from "./Register";
export function Navbar2() {
  
    return (
      <Router>
        <nav class="navbar navbar-expand-lg navbar-dark" style={{ backgroundColor: "black" }}>
          <Link class="navbar-brand" to="">Photo Shopee</Link>
          <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarNav">
            <ul class="navbar-nav">
              <li class="nav-item active">
                <Link class="nav-link" to="">Home <span class="sr-only">(current)</span></Link>
              </li>
              <li class="nav-item">
                <Link class="nav-link" to="/categories">Categories</Link>
              </li>
              <li class="nav-item">
                <Link class="nav-link" to="/aboutUs">About Us</Link>
              </li>
              <li class="nav-item">
                <Link class="nav-link" to="/myCart">My Cart</Link>
              </li>
              <li class="nav-item">
                <Link class="nav-link" to="/signIn">Signin</Link>
              </li>
              <li class="nav-item">
                <Link class="nav-link" to="/register">Register</Link>
              </li>
            </ul>
          </div>
        </nav>
        <div className="container mt-2">
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/categories" component={Categories} />
            <Route path="/aboutUs" component={AboutUs} />
            <Route path="/myCart" component={MyCart} />
            <Route path="/signIn" component={SignIn} />
            <Route path="/register" component={Register} />
          </Switch>
        </div>
      </Router>
    )
  
}

export default Navbar2
