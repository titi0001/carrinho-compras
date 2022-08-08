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
    console.log(getAPI);
    this.setState({ itemsAPI: getAPI.results });
    // const failedFetch = getAPI.length === 0;
    // if (!failedFetch.length) {
    //   this.setState({ itemsAPI: getAPI.results });
    // } this.setState({ failedGetItems: 'Nenhum Produto Foi Encontrado' });
  }

  handleSearchCategory = async ({ target: { value } }) => {
    // console.log(value);
    const fetchCategories = await getProductsFromCategoryAndQuery(value);
    // console.log(fetchCategories.results);
    this.setState({ itemsAPI: fetchCategories.results });
  }

  render() {
    const { searchList, itemsAPI } = this.state;

    // console.log(itemsAPI);
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
        <Categories
          onClick={ (event) => this.handleSearchCategory(event) }
        />
        {searchList.length === 0 ? (
          <p
            data-testid="home-initial-message"
          >
            Digite algum termo de pesquisa ou escolha uma categoria.
          </p>)
          : null }
        {itemsAPI.length === 0 ? <p>Nenhum produto foi encontrado</p> : showProducts}
      </div>
    );
  }
}

export default Home;
