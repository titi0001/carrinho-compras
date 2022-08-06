import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Categories from '../components/Categories';
import Items from '../components/Items';
import { getProductsFromCategoryAndQuery } from '../services/api';

class Home extends Component {
  constructor() {
    super();

    this.state = {
      searchList: '',
      itemsAPI: [],
    };
  }

  handleChange = ({ target: { value } }) => {
    this.setState({ searchList: value });
  }

  handleSearch = async () => {
    const { searchList } = this.state;
    const getAPI = await getProductsFromCategoryAndQuery(searchList);
    this.setState({ itemsAPI: getAPI.results });
  }

  render() {
    const { searchList, itemsAPI } = this.state;
    const showProducts = itemsAPI.map((item) => (
      <div key={ item.id }>
        <Items
          product={ item }
        />
      </div>
    ));
    return (
      <div>
        <Link data-testid="shopping-cart-button" to="/Cart">Carrinho</Link>
        <label htmlFor="search">
          Busca:
          <input
            type="text"
            name="search"
            id="search"
            data-testid="query-input"
            value={ searchList }
            onChange={ this.handleChange }
          />
        </label>
        <button
          type="button"
          data-testid="query-button"
          onClick={ this.handleSearch }
        >
          Buscar
        </button>
        <Categories />
        {searchList.length === 0 ? (
          <p
            data-testid="home-initial-message"
          >
            Digite algum termo de pesquisa ou escolha uma categoria.
          </p>)
          : ''}
        {itemsAPI.length === 0 ? <p>Nenhum produto foi encontrado</p> : showProducts}
      </div>
    );
  }
}

export default Home;
