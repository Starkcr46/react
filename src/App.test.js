import { render, screen } from '@testing-library/react';
import App from './App';
import React from 'react';
import renderer from 'react-test-renderer';

describe('App', () => {
  test('snapshot renders', () => {
    const component = renderer.create(<App />);
    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});