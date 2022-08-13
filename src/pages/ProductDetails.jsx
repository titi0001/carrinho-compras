import React, { Component } from 'react';
import { PropTypes } from 'prop-types';
import { Link } from 'react-router-dom';
import { getProductDetails } from '../services/api';
import addToLocalStorage from '../services/localStorage';
import Coment from '../components/Coment';

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
  }

  addToCart = () => {
    const { product: { title, thumbnail, price, id } } = this.state;
    const dataObj = { title, thumbnail, price, id, quantity: 1 };
    addToLocalStorage(dataObj);
  }

  render() {
    const { product } = this.state;
    const { match: { params: { id } } } = this.props;
    const { title, price, thumbnail } = product;
    const finalPrice = Number(price).toFixed(2);

    return (

      <div>
        <img data-testid="product-detail-image" src={ thumbnail } alt={ title } />
        <h3 data-testid="product-detail-name">{title}</h3>
        <span data-testid="product-detail-price">
          R$:
          {' '}
          {finalPrice}
        </span>
        <Link data-testid="shopping-cart-button" to="/Cart">Carrinho</Link>
        <button
          data-testid="product-detail-add-to-cart"
          type="button"
          onClick={ this.addToCart }
        >
          Adicionar ao carrinho
        </button>
        <Coment id={ id } />
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
