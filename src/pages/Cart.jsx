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

    return (
      <div>
        {storage === null ? (
          <p data-testid="shopping-cart-empty-message ">
            Seu carrinho está vazio
          </p>)
          : (
            <div>
              <p
                data-testid="shopping-cart-product-quantity"
              >
                {storage.reduce((acc, { quantity }) => acc + quantity, 0)}
              </p>
              {storage.map(({ title, thumbnail, price, quantity }, index) => (
                <div key={ index }>
                  <h3 data-testid="shopping-cart-product-name">{title}</h3>
                  <img src={ thumbnail } alt={ title } />
                  <span>{ (price * quantity).toFixed(2) }</span>
                  <p>{quantity}</p>
                </div>
              ))}
            </div>
          )}
      </div>
    );
  }
}
