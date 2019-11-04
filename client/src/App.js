import React from 'react';
import logo from './logo.svg';
import './App.scss';
import {Link, Route, Switch} from 'react-router-dom'
import Home from "./Components/Home.jsx"
import Login from "./Components/Login.jsx"
import Rent from "./Components/Rent.jsx"
import Signup from "./Components/Signup.jsx"
import ProductList from './Components/ProductList.jsx'
import CreateProduct from './Components/CreateProduct';
import ProductDetail from './Components/ProductDetail.jsx';
import Nav from './Components/Nav.jsx'

function App() {
  return (
    <div>
    <Nav />
    <div className="App">
        <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/search" component={ProductList} />
        <Route path="/login" component={Login} />
        <Route path="/signup" component={Signup} />
        <Route path='/create' component={CreateProduct}/>
        <Route path='/rent' component={Rent}/>
        <Route path="/product-detail/:id" component={ProductDetail}/>
        </Switch>
    </div>
    </div>
  );
}

export default App;
