// CurrencyData.js
import React, { Component } from 'react';

class CurrencyData extends Component {
  constructor() {
    super();
    this.state = {
      rates: {}, // Store exchange rates here
    };
  }

  componentDidMount() {
    fetch('https://api.exchangeratesapi.io/latest?base=USD')
      .then((response) => response.json())
      .then((data) => {
        this.setState({ rates: data.rates });
      })
      .catch((error) => {
        console.error('Error fetching currency data:', error);
      });
  }
}

export default CurrencyData;
