import React, { Component } from 'react';
import { PropTypes } from 'prop-types';
import { Link } from 'react-router-dom';
import { getProductDetails } from '../services/api';

export default class ProductDetails extends Component {
  state = {
    product: [],
  }

  componentDidMount() {
    this.showProducts();
  }

  showProducts = async () => {
    const { match: { params: { id } } } = this.props;
    const item = await getProductDetails(id);
    this.setState({
      product: item,
    });
    // console.log(id);
    // title
    // console.log(item);
  }

  render() {
    const { product } = this.state;
    const { title, price, thumbnail } = product;
    // console.log(product);
    return (
      <div>
        <img data-testid="product-detail-image" src={ thumbnail } alt={ title } />
        <h3 data-testid="product-detail-name">{title}</h3>
        <span data-testid="product-detail-price">
          R$:
          {' '}
          {price}
        </span>
        <Link data-testid="shopping-cart-button" to="/Cart">Carrinho</Link>
      </div>

    );
  }
}

ProductDetails.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.string.isRequired,
    }) }).isRequired,
};
