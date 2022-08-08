import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

class Items extends Component {
  render() {
    const { product } = this.props;
    const { title, thumbnail, price, id } = product;
    return (
      <div data-testid="product">

        <Link data-testid="product-detail-link" to={ `/ProductDetails/${id}` }>
          <h3>{title}</h3>
          <img src={ thumbnail } alt={ title } />
          <span>
            R$
            {price}
          </span>

        </Link>
      </div>
    );
  }
}

Items.propTypes = {
  product: PropTypes.shape.isRequired,
};

export default Items;
