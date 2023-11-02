import React from 'react';
import CurrencyConverter from './CurrencyConverter';
import CurrencyData from './CurrencyData';
import './App.css';

function App() {
  return (
    <div className="App">
      <CurrencyData>
        {(data) => (
          <CurrencyConverter rates={data.rates} />
        )}
      </CurrencyData>
    </div>
  );
}

export default App;