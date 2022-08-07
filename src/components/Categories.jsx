import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { getCategories } from '../services/api';

class Categories extends Component {
  constructor() {
    super();
    this.state = {
      categoriesList: [],
      // itensList: [],
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
    const { onClick } = this.props;
    return (
      <aside>
        <h3>
          Categories:
        </h3>
        {categoriesList.map(({ id, name }) => (
          <label key={ id } htmlFor="category">

            <br />
            <input
              name="category"
              type="radio"
              data-testid="category"
              value={ name }
              onClick={ onClick }
            />
            {name}
          </label>
        ))}
      </aside>
    );
  }
}

Categories.propTypes = {
  onClick: PropTypes.func.isRequired,
}.isRequired;
export default Categories;
