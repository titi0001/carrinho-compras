import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Items extends Component {
  render() {
    const { product } = this.props;
    const { title, thumbnail, price } = product;
    return (
      <div data-testid="product">
        <h3>{title}</h3>
        <img src={ thumbnail } alt={ title } />
        <span>
          R$
          {price}
        </span>
      </div>
    );
  }
}

Items.propTypes = {
  product: PropTypes.shape.isRequired,
};

export default Items;
