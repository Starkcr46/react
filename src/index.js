import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

function fizz_buzz(numbers) {
  let result = []
  
  for (number of numbers) {
      if (number % 15 === 0) {
          result.push('fizzbuzz')
      } else if (number % 3 === 0) {
          result.push('fizz')
      } else if (number % 5 === 0) {
          result.push('buzz')
      } else {
          result.push(number)
      }
  }
  
  return result.join(', ')
}

module.exports = fizz_buzz;
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
