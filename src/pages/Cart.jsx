import React, { Component } from 'react';
// import PropTypes from 'prop-types';

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
    // const { id } = this.props;
    const storage = localStorage.getItem(localStorage.key('id'));
    console.log(JSON.parse(storage));
    const dataObj = [...JSON.parse(storage)];
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
              <p data-testid="shopping-cart-product-quantity">{storage.length}</p>
              {Object.values(storage).map(({ title, thumbnail, price }, index) => (
                <div key={ index }>
                  <h3 data-testid="shopping-cart-product-name">{title}</h3>
                  <img src={ thumbnail } alt={ title } />
                  <span>{ price.toFixed(2) }</span>
                </div>
              ))}
            </div>
          )}
      </div>
    );
  }
}
