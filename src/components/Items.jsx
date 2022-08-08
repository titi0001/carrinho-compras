import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

class Items extends Component {
  render() {
    const { product } = this.props;
    const { title, thumbnail, price, id } = product;
    return (
      <div data-testid="product">
        <h3>{title}</h3>
        <span>
          R$
          {price}
        </span>
        <Link data-testid="product-detail-link" to={ `/ProductDetails/${id}` }>
          <img src={ thumbnail } alt={ title } />
          <button
            type="submit"
          >
            Mais Detalhes
          </button>
        </Link>

      </div>
    );
  }
}

Items.propTypes = {
  product: PropTypes.string.isRequired,
};

export default Items;