import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import './App.css';
import Home from './pages/Home';
import Cart from './pages/Cart';
import ProductDetails from './components/ProductDetails';

function App() {
  return (
    <BrowserRouter>
      <Route exact path="/" component={ Home } />
      <Route exact path="/Cart" component={ Cart } />
      <Route exact path="/ProductDetails/:id" component={ ProductDetails } />
    </BrowserRouter>
  );
}

export default App;
