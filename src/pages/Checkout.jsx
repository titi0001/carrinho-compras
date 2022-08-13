import React, { Component } from 'react';

class Checkout extends Component {
  constructor() {
    super();
    this.state = {
      storage: [],
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

  render() {
    const { storage } = this.state;

    console.log(storage);

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
            />
          </label>
          <label htmlFor="email">
            Email:
            <input
              data-testid="checkout-email"
              type="email"
              name="email"
              id="email"
            />
          </label>
          <label htmlFor="cpf">
            CPF:
            <input
              data-testid="checkout-cpf"
              type="number"
              name="cpf"
              id="cpf"
            />
          </label>
          <label htmlFor="phone">
            Telefone:
            <input
              data-testid="checkout-phone"
              type="number"
              name="phone"
              id="phone"
            />
          </label>
          <label htmlFor="cep">
            CEP:
            <input
              data-testid="checkout-cep"
              type="number"
              name="cep"
              id="cep"
            />
          </label>
          <label htmlFor="address">
            Endereço:
            <input
              data-testid="checkout-address"
              type="text"
              name="address"
              id="address"
            />
          </label>
          <span>Método de pagamento:</span>
          <label htmlFor="ticket-payment">
            Boleto:
            <input
              data-testid="ticket-payment"
              type="radio"
              name="ticket-payment"
              id="ticket-payment"
            />
          </label>
          <label htmlFor="visa-payment">
            Visa:
            <input
              data-testid="visa-payment"
              type="radio"
              name="visa-payment"
              id="visa-payment"
            />
          </label>
          <label htmlFor="master-payment">
            MasterCard:
            <input
              data-testid="master-payment"
              type="radio"
              name="master-payment"
              id="master-payment"
            />
          </label>
          <label htmlFor="elo-payment">
            Elo:
            <input
              data-testid="elo-payment"
              type="radio"
              name="elo-payment"
              id="elo-payment"
            />
          </label>
          <button
            data-testid="checkout-btn"
            type="submit"
            onClick={ this.getForms } // criar lógica de validação do botão, usar 'getForms' como nome da função. Todos os campos são obrigatórios, fazer a validação deles também.
          >
            Enviar
          </button>
        </form>
      </div>
    );
  }
}

export default Checkout;
