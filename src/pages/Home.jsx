import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Categories from '../components/Categories';
import Header from '../components/Header';
import Items from '../components/Items';
import { getProductsFromCategory,
  getProductsFromCategoryAndQuery,
  getProductsFromQuery } from '../services/api';

class Home extends Component {
  constructor() {
    super();

    this.state = {
      searchList: '',
      itemsAPI: [],
      storage: [],
    };
  }

  componentDidMount() {
    this.getStorage();
  }

  getStorage = () => {
    const storage = JSON.parse(localStorage.getItem('products')) || [];
    if (!storage) {
      localStorage.setItem('products', JSON.stringify([]));
    }
    this.setState({ storage });
  }

  handleChange = ({ target: { value } }) => {
    this.setState({ searchList: value });
  }

  handleSearch = () => {
    const { searchList } = this.state;
    this.setState({
      itemsAPI: [],
    }, async () => {
      if (searchList) {
        const getAPI = await getProductsFromCategoryAndQuery();
        this.setState({ itemsAPI: getAPI.results });
      } if (searchList.length) {
        const getAPI = await getProductsFromQuery(searchList);
        this.setState({ itemsAPI: getAPI.results });
      }
    });
  }

  handleSearchCategory = ({ target: { value } }) => {
    const { searchList } = this.state;
    this.setState({
      itemsAPI: [],
    }, async () => {
      let fetchCategories;
      if (searchList) {
        fetchCategories = await getProductsFromCategoryAndQuery(value, searchList);
      } else {
        fetchCategories = await getProductsFromCategory(value);
      }
      this.setState({ itemsAPI: fetchCategories.results });
    });
  }

  render() {
    const { searchList, itemsAPI, storage } = this.state;
    const showProducts = itemsAPI.map((item) => (
      <div key={ item.id }>
        <Items
          product={ item }
          getStorage={ this.getStorage }
        />
      </div>
    ));
    return (
      <div>
        <Header storage={ storage } />
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
        {!searchList.length ? (
          <p
            data-testid="home-initial-message"
          >
            Digite algum termo de pesquisa ou escolha uma categoria.
          </p>)
          : null }
        {!itemsAPI.length ? 'Nenhum produto foi encontrado' : showProducts}
      </div>
    );
  }
}

export default Home;
