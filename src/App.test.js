import { render, screen } from '@testing-library/react';
import App from './App';
import React from 'react';
import renderer from 'react-test-renderer';
import { calculateWinner, testFunc } from './App';

/*describe('App', () => {
  test('snapshot renders', () => {
    const component = renderer.create(<App />);
    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});

jest.mock('./App', () => ({
  calculateWinner: jest.fn(() => 'mocked value'),
}));

test('Hello', () => {
  let myArray = [];
  const result = calculateWinner(myArray);
  expect(App.calculateWinner).toHaveBeenCalled();
  expect(result).toBe(null);
});*/

