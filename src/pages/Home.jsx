import React, { Component } from 'react';
import Categories from '../components/Categories';
import { Link } from 'react-router-dom';

class Home extends Component {
  constructor() {
    super();

    this.state = {
      searchList: [],
    };
  }

  handleChange = ({ target: { value } }) => {
    this.setState({ searchList: value });
  }

  render() {
    const { searchList } = this.state;
    return (
      <div>
        <Link data-testid="shopping-cart-button" to="/Cart">Carrinho</Link>
        <label htmlFor="search">
          Busca
          <input
            type="text"
            name="search"
            id="search"
            onChange={ this.handleChange }
          />
        </label>
        <Categories />
        {searchList.length === 0 ? (
          <p
            data-testid="home-initial-message"
          >
            Digite algum termo de pesquisa ou escolha uma categoria.
          </p>)
          : null}
      </div>
    );
  }
}

export default Home;
