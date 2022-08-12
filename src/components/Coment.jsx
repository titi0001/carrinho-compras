import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { addComment } from '../services/localStorage';
// import { getProductDetails } from '../services/api';

export default class Coment extends Component {
  constructor(props) {
    super(props);

    this.state = {
      evaluation: {
        email: '',
        option: '',
        rate: '',
      },
      arrayComment: [],
      validation: false,
    };
  }

  componentDidMount() {
    const { id } = this.props;
    const arrayComment = JSON.parse(localStorage.getItem(id)) || [];
    console.log(arrayComment);
    this.setState({
      arrayComment,
    });
  }

  getLocal = (e) => {
    e.preventDefault();
    const { id } = this.props;
    const { evaluation, validation } = this.state;
    if (validation) {
      addComment(evaluation, id);
      const arrayComment = JSON.parse(localStorage.getItem(id));
      this.setState({
        evaluation: {
          email: '',
          option: '',
          rate: '',
        },
      }, () => this.setState({
        arrayComment,
      }));
    }
  };

  updateState = (event) => {
    const { name, value } = event.target;
    this.setState((prevState) => ({
      evaluation: {
        ...prevState.evaluation,
        [name]: value,
      },
    }), () => {
      this.validar();
    });
  }

  validar = () => {
    const { evaluation: { email, rate } } = this.state;
    const emailRegex = /\S+@\S+.\S+/;
    if (emailRegex.test(email) && rate) {
      this.setState({
        validation: true,
      });
    } else {
      this.setState({
        validation: false,
      });
    }
  }

  render() {
    const { evaluation: { email, option }, arrayComment, validation } = this.state;

    return (
      <div>
        <h1>Avaliações</h1>
        <form>
          <label htmlFor="user">
            Email:
            <input
              data-testid="product-detail-email"
              type="text"
              name="email"
              id="user"
              value={ email }
              onChange={ this.updateState }
              placeholder="Digite seu email..."
            />
          </label>
          <div>
            <span>Nota: </span>
            <label htmlFor="um">
              1
              <input
                data-testid="1-rating"
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
                data-testid="2-rating"
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
                data-testid="3-rating"
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
                data-testid="4-rating"
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
                data-testid="5-rating"
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
                data-testid="product-detail-evaluation"
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
              onClick={ this.getLocal }
            >
              Enviar

            </button>
            {!validation && <p data-testid="error-msg">Campos inválidos</p>}

            { arrayComment.length && (

              arrayComment.map((product, index) => (
                <div key={ index }>
                  <p data-testid="review-card-email">{product.email}</p>
                  <p data-testid="review-card-evaluation">{product.option}</p>
                  <p data-testid="review-card-rating">{product.rate}</p>
                </div>))
            )}
          </div>
        </form>
      </div>
    );
  }
}

Coment.propTypes = {

  id: PropTypes.string.isRequired,

};
