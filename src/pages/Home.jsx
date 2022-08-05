import React, { Component } from 'react';

export default class Home extends Component {
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
        <label htmlFor="search">
          Busca
          <input
            type="text"
            name="search"
            id="search"
            onChange={ this.handleChange }
          />
        </label>
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
