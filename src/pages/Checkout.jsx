import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Checkout extends Component {
  constructor() {
    super();
    this.state = {
      storage: [],
      fullname: '',
      email: '',
      cpf: '',
      phone: '',
      cep: '',
      address: '',
      payment: '',
      errorMessage: '',
      disabled: true,
    };
  }

  componentDidMount() {
    this.getStorage();
  }

  getStorage = () => {
    const storage = JSON.parse(localStorage.getItem('products'));
    if (!storage) {
      localStorage.setItem('products', JSON.stringify([]));
    }
    this.setState({ storage });
  }

  inputCheck = () => {
    const { fullname, email, cpf, phone, cep, address, payment } = this.state;
    const formsToValidate = [fullname, email, cpf, phone, cep, address, payment]
      .every((item) => item.length);
    const emailRegex = /\S+@\S+.\S+/;
    if (formsToValidate && emailRegex.test(email)) {
      this.setState({ errorMessage: '', disabled: false });
    }
    if (!formsToValidate || !emailRegex.test(email)) {
      this.setState({ errorMessage: 'Campos inválidos', disabled: true });
    }
  }

  validate = ({ target }) => {
    const { name, value } = target;
    this.setState({ [name]: value }, () => {
      this.inputCheck();
    });
  }

  getForms = (e) => {
    e.preventDefault();
    const { history } = this.props;
    localStorage.setItem('products', JSON.stringify([]));
    history.push('/');
  }

  render() {
    const { storage,
      fullname,
      email,
      cpf,
      phone,
      cep,
      address,
      payment,
      errorMessage,
      disabled } = this.state;

    return (
      <div>
        {storage.map(({ title, price, id }) => (
          <div key={ id }>
            <h4>{title}</h4>
            <h4>
              <span>R$ </span>
              {price.toFixed(2)}
            </h4>
          </div>
        ))}
        <form>
          <label htmlFor="fullname">
            Nome completo:
            <input
              data-testid="checkout-fullname"
              type="text"
              name="fullname"
              id="fullname"
              value={ fullname }
              onChange={ this.validate }
            />
          </label>
          <label htmlFor="email">
            Email:
            <input
              data-testid="checkout-email"
              type="email"
              name="email"
              id="email"
              value={ email }
              onChange={ this.validate }
            />
          </label>
          <label htmlFor="cpf">
            CPF:
            <input
              data-testid="checkout-cpf"
              type="text"
              name="cpf"
              id="cpf"
              value={ cpf }
              onChange={ this.validate }
            />
          </label>
          <label htmlFor="phone">
            Telefone:
            <input
              data-testid="checkout-phone"
              type="text"
              name="phone"
              id="phone"
              value={ phone }
              onChange={ this.validate }
            />
          </label>
          <label htmlFor="cep">
            CEP:
            <input
              data-testid="checkout-cep"
              type="text"
              name="cep"
              id="cep"
              value={ cep }
              onChange={ this.validate }
            />
          </label>
          <label htmlFor="address">
            Endereço:
            <input
              data-testid="checkout-address"
              type="text"
              name="address"
              id="address"
              value={ address }
              onChange={ this.validate }
            />
          </label>
          <span>Método de pagamento:</span>
          <label htmlFor="ticket-payment">
            Boleto:
            <input
              data-testid="ticket-payment"
              type="radio"
              name="payment"
              id="ticket-payment"
              value="ticket"
              checked={ payment === 'ticket' }
              onChange={ this.validate }
            />
          </label>
          <label htmlFor="visa-payment">
            Visa:
            <input
              data-testid="visa-payment"
              type="radio"
              name="payment"
              id="visa-payment"
              value="visa"
              checked={ payment === 'visa' }
              onChange={ this.validate }
            />
          </label>
          <label htmlFor="master-payment">
            MasterCard:
            <input
              data-testid="master-payment"
              type="radio"
              name="payment"
              id="master-payment"
              value="master"
              checked={ payment === 'master' }
              onChange={ this.validate }
            />
          </label>
          <label htmlFor="elo-payment">
            Elo:
            <input
              data-testid="elo-payment"
              type="radio"
              name="payment"
              id="elo-payment"
              value="elo"
              checked={ payment === 'elo' }
              onChange={ this.validate }
            />
          </label>
          <button
            data-testid="checkout-btn"
            type="submit"
            disabled={ disabled }
            onClick={ this.getForms }
          >
            Enviar
          </button>
          {errorMessage && <p data-testid="error-msg">{errorMessage}</p>}
        </form>
      </div>
    );
  }
}

Checkout.propTypes = {
  history: PropTypes.shape({
    push: PropTypes.func.isRequired,
  }).isRequired,
};

export default Checkout;
