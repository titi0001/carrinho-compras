import React, { Component } from 'react';

export default class Cart extends Component {
  constructor() {
    super();
    this.state = {
      storage: [],
    };
  }

  componentDidMount() {
    this.getStorage();
  }

  getStorage = () => {
    const storage = localStorage.getItem('products');
    const dataObj = JSON.parse(storage);
    this.setState({ storage: dataObj });
  }

  render() {
    const { storage } = this.state;
    console.log(typeof storage);
    return (
      <div>
        {storage === null ? (
          <p data-testid="shopping-cart-empty-message ">
            Seu carrinho está vazio
          </p>) : (
          storage.map(({ name, image, price, id }) => (
            <div key={ id }>
              <h3 data-testid="shopping-cart-product-name">{name}</h3>
              <img src={ image } alt={ name } />
              <span>{ price.toFixed(2) }</span>
              <p data-testid="shopping-cart-product-quantity">{storage.length}</p>
            </div>
          ))
        )}
      </div>
    );
  }
}
