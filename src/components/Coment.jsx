import React, { Component } from 'react';
// import PropTypes from 'prop-types';

export default class Coment extends Component {
  state = {
    evaluation: {
      email: '',
      option: '',
    },

  }

  updateState = (event) => {
    const { name, value } = event.target;
    this.setState((prevState) => ({
      evaluation: {
        ...prevState.evaluation,
        [name]: value,
      },
    }));
  }

  render() {
    const three = 3;
    const four = 4;
    const five = 5;

    const { evaluation: { email, option } } = this.state;

    return (
      <div>
        <h1>Avaliações</h1>
        <form>
          <label htmlFor="user">
            Email:
            <input
              data-testid="product-detail-email"
              type="email"
              name="email"
              id="user"
              value={ email }
              onChange={ this.updateState }
              placeholder="Digite seu email..."
              required
            />
          </label>
          <div>
            <span>Nota: </span>
            <label htmlFor="um">
              1
              <input
                data-testid={ `${1}-rating` }
                type="radio"
                name="rate"
                id="um"
                onChange={ this.updateState }
                value={ 1 }
              />
            </label>
            <label htmlFor="dois">
              2
              <input
                data-testid={ `${2}-rating` }
                type="radio"
                name="rate"
                id="dois"
                onChange={ this.updateState }
                value={ 2 }
              />
            </label>
            <label htmlFor="tres">
              3
              <input
                data-testid={ `${three}-rating` }
                type="radio"
                name="rate"
                id="tres"
                onChange={ this.updateState }
                value={ 3 }
              />
            </label>
            <label htmlFor="quatro">
              4
              <input
                data-testid={ `${four}-rating` }
                type="radio"
                name="rate"
                id="quatro"
                onChange={ this.updateState }
                value={ 4 }
              />
            </label>
            <label htmlFor="cinco">
              5
              <input
                data-testid={ `${five}-rating` }
                type="radio"
                name="rate"
                id="cinco"
                onChange={ this.updateState }
                value={ 5 }
              />
            </label>
            <br />
            <label htmlFor="textArea">
              Comentário:
              <br />
              <textarea
                data-testid="submit-review-btn"
                name="option"
                id="textArea"
                cols="30"
                rows="10"
                value={ option }
                onChange={ this.updateState }
                placeholder="Comente sobre o produto..."
              />
            </label>
            <br />
            <button
              data-testid="submit-review-btn"
              type="submit"
            >
              Enviar

            </button>
          </div>
        </form>
      </div>
    );
  }
}

// Coment.propTypes = {
//   product: PropTypes.shape({
//     title: PropTypes.string.isRequired,
//   }).isRequired,

// };
