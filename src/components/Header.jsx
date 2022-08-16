import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Header extends Component {
  render() {
    const { storage } = this.props;
    return (
      <div>
        <p data-testid="shopping-cart-size">
          {storage.reduce((acc, { quantity }) => acc + quantity, 0)}
        </p>
      </div>
    );
  }
}

Header.propTypes = {
  storage: PropTypes.arrayOf(PropTypes.shape({
    quantity: PropTypes.number,
  })).isRequired,
};

export default Header;
