import React, { Component } from 'react';
import { getCategories } from '../services/api';

class Categories extends Component {
  constructor() {
    super();
    this.state = {
      categoriesList: [],
    };
  }

  componentDidMount() {
    this.handleCategories();
  }

  handleCategories = async () => {
    const fetchCategories = await getCategories();
    this.setState({ categoriesList: fetchCategories });
  }

  render() {
    const { categoriesList } = this.state;
    return (
      <aside>
        <h3>
          Categories:
        </h3>
        {categoriesList.map(({ id, name }) => (
          <button
            key={ id }
            type="button"
            data-testid="category"
            value={ name }
            onClick={ this.handleCategories }
          >
            { name }
          </button>
        ))}
      </aside>
    );
  }
}

export default Categories;
