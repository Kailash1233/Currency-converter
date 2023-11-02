// CurrencyConverter.js
import React, { Component } from 'react';

class CurrencyConverter extends Component {
  constructor() {
    super();
    this.state = {
      amount: 1, // Default amount
      fromCurrency: 'USD', // Default source currency
      toCurrency: 'EUR', // Default target currency
      result: null, // Result of the conversion
    };
  }

  convertCurrency = () => {
    const { amount, fromCurrency, toCurrency } = this.state;
    const fromRate = this.props.rates[fromCurrency];
    const toRate = this.props.rates[toCurrency];
  
    const result = (amount * toRate) / fromRate;
    this.setState({ result });
  };

  handleAmountChange = (event) => {
    this.setState({ amount: event.target.value });
  };
  
  handleFromCurrencyChange = (event) => {
    this.setState({ fromCurrency: event.target.value });
  };
  
  handleToCurrencyChange = (event) => {
    this.setState({ toCurrency: event.target.value });
  };
  
  render() {
    return (
      <div>
        <h2>Currency Converter</h2>
        <div>
          <input
            type="number"
            value={this.state.amount}
            onChange={this.handleAmountChange}
          />
          <select
            value={this.state.fromCurrency}
            onChange={this.handleFromCurrencyChange}
          >
            {/* Render source currency options here */}
          </select>
          <span>to</span>
          <select
            value={this.state.toCurrency}
            onChange={this.handleToCurrencyChange}
          >
            {/* Render target currency options here */}
          </select>
        </div>
        <p>{this.state.result ? `${this.state.amount} ${this.state.fromCurrency} is equal to ${this.state.result} ${this.state.toCurrency}` : ''}</p>
        <button onClick={this.convertCurrency}>Convert</button>
      </div>
    );
  }
}
export default CurrencyConverter;
