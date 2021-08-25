import React from 'react'
import HomeProduct from "./HomeProduct";
import CreateCategory from "./CreateCategory";
import EditupdateCategory from "./EditupdateCategory"
import EditupdateProduct from "./EditupdateProduct"
import AllProduct from "./AllProduct"
import AllOrders from "./allOrders"
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
function Navbar2() {
    return (
        <div>
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
                <Link class="nav-link" to="/createCategories">Create Categories</Link>
              </li>
              <li class="nav-item">
                <Link class="nav-link" to="/edit/updateCategory">Edit/Update Category</Link>
              </li>
              <li class="nav-item">
                <Link class="nav-link" to="/edit/updateProduct">Edit/Update Product</Link>
              </li>
              <li class="nav-item">
                <Link class="nav-link" to="/allProduct">All Products</Link>
              </li>
              <li class="nav-item">
                <Link class="nav-link" to="/allOrders">All Orders</Link>
              </li>
            </ul>
          </div>
        </nav>
        <div className="container mt-2">
          <Switch>
            <Route exact path="/" component={HomeProduct} />
            <Route path="/createCategories" component={CreateCategory} />
            <Route path="/edit/updateCategory" component={EditupdateCategory} />
            <Route path="/edit/updateProduct" component={EditupdateProduct} />
            <Route path="/allProduct" component={AllProduct} />
            <Route path="/allOrders" component={AllOrders} />
          </Switch>
        </div>
      </Router>
        </div>
    )
}

export default Navbar2
