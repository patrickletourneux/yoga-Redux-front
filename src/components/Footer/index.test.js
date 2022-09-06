import React from 'react';

import {
  render, screen,
} from '@testing-library/react';

import Footer from '.';

describe('Footer', () => {
  test('renders Footer text', () => {
    const { debug } = render(<Footer />);
    debug();
    const text = screen.getByText('Footer : mentions légales ...');
    expect(text).toBeInTheDocument();
  });
  test('renders Footer text in h1', () => {
    const { container } = render(<Footer />);
    const h1 = container.querySelector('h1');
    expect(h1).toBeInTheDocument();
    expect(h1).toHaveTextContent('Footer : mentions légales ...');
  });
});
