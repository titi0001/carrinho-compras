import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

class Items extends Component {
  addToCart = () => {
    const { product: { title, thumbnail, price } } = this.props;
    const dataObj = { title, thumbnail, price };
    if (localStorage.getItem('products') === null) {
      localStorage.setItem('products', JSON.stringify([dataObj]));
    } else {
      localStorage.setItem(
        'products',
        JSON.stringify([...JSON.parse(localStorage.getItem('products')), dataObj,
        ]),
      );
    }
  }

  render() {
    const { product } = this.props;
    const { title, thumbnail, price, id } = product;
    return (
      <div data-testid="product">
        <h3>{title}</h3>
        <span>
          R$
          {price.toFixed(2)}
        </span>
        <Link data-testid="product-detail-link" to={ `/ProductDetails/${id}` }>
          <img src={ thumbnail } alt={ title } />
          <button
            type="submit"
          >
            Mais Detalhes
          </button>
        </Link>
        <button
          type="button"
          data-testid="product-add-to-cart"
          onClick={ () => this.addToCart() }
        >
          Adicionar ao carrinho
        </button>
      </div>
    );
  }
}

Items.propTypes = {
  product: PropTypes.shape({
    title: PropTypes.string.isRequired,
    thumbnail: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    id: PropTypes.string.isRequired,
  }).isRequired,
};

export default Items;
