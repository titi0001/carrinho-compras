import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import './App.css';
import Home from './pages/Home';
import Cart from './pages/Cart';
import ProductDetails from './pages/ProductDetails';
import Checkout from './pages/Checkout';

function App() {
  return (
    <BrowserRouter>
      <Route exact path="/" component={ Home } />
      <Route exact path="/Cart" component={ Cart } />
      <Route exact path="/ProductDetails/:id" component={ ProductDetails } />
      <Route exact path="/Checkout" component={ (props) => <Checkout { ...props } /> } />
    </BrowserRouter>
  );
}

export default App;
