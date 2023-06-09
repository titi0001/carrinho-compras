import React, { Component } from 'react';
import { Link } from 'react-router-dom';

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
    const storage = JSON.parse(localStorage.getItem('products'));
    if (!storage) {
      localStorage.setItem('products', JSON.stringify([]));
    }
    this.setState({ storage });
  }

  handleIncrease = (id) => {
    const { storage } = this.state;
    storage.map((item) => {
      if (item.id === id) {
        item.quantity += 1;
      }
      return this
        .setState({ storage: [...storage] }, () => localStorage
          .setItem('products', JSON.stringify([...storage])));
    });
  }

  handleDecrease = (id) => {
    const { storage } = this.state;
    storage.map((item) => {
      if (item.id === id) {
        item.quantity -= 1;
      }
      return this.setState({ storage: [...storage] }, () => localStorage
        .setItem('products', JSON.stringify([...storage])));
    });
  }

  handleRemove = (id) => {
    const { storage } = this.state;
    const newStorage = storage.filter((del) => del.id !== id);
    localStorage.setItem('products', JSON.stringify(newStorage));
    this.setState({ storage: newStorage });
  }

  render() {
    const { storage } = this.state;

    return (
      <div>
        {!storage || !storage.length ? (
          <p data-testid="shopping-cart-empty-message">
            Seu carrinho está vazio
          </p>)
          : (
            <div>
              <p>
                {storage.reduce((acc, { quantity }) => acc + quantity, 0)}
              </p>
              {storage.map(({ title, thumbnail, price, id, quantity }, index) => (
                <div key={ index }>
                  <h3 data-testid="shopping-cart-product-name">{title}</h3>
                  <img src={ thumbnail } alt={ title } />
                  <span>{ (price * quantity).toFixed(2) }</span>
                  <p data-testid="shopping-cart-product-quantity">{quantity}</p>
                  <button
                    type="button"
                    data-testid="product-increase-quantity"
                    onClick={ () => this.handleIncrease(id) }
                    value={ id }
                  >
                    +
                  </button>
                  <button
                    type="button"
                    data-testid="product-decrease-quantity"
                    disabled={ quantity === 1 }
                    onClick={ () => this.handleDecrease(id) }
                    value={ id }
                  >
                    -
                  </button>
                  <button
                    type="button"
                    data-testid="remove-product"
                    onClick={ () => this.handleRemove(id) }
                    value={ id }
                  >
                    Remover do carrinho
                  </button>
                </div>
              ))}
              <Link
                data-testid="checkout-products"
                to="/Checkout"
              >
                Finalizar compra
              </Link>
            </div>
          )}
      </div>
    );
  }
}
