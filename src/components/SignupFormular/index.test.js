import React from 'react';

import {
  render, screen, fireEvent,
} from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import { Provider } from 'react-redux';
import store from '../../store';

import SignupFormular from '.';

describe('SignupFormular', () => {
  test('renders SignupFormular', () => {
    const { debug } = render(
      <Provider store={store}>
        <SignupFormular
          closeModal={() => console.log('submit SignupFormular')}
        />
      </Provider>,
    );
    // debug();
    // console.log(screen)
    screen.debug();
    const text = screen.getByText('Signup Formular');
    expect(text).toBeInTheDocument();
  });
  test('renders 1 form, 4 input , 4 labels', () => {
    const { container } = render(
      <Provider store={store}>
        <SignupFormular
          closeModal={() => console.log('submit SignupFormular')}
        />
      </Provider>,
    );
    const forms = container.querySelectorAll('form');
    const inputs = container.querySelectorAll('input');
    const labels = container.querySelectorAll('label');
    expect(forms).toHaveLength(1);
    expect(inputs).toHaveLength(4);
    expect(labels).toHaveLength(4);
  });
  test('renders good text', () => {
    const { container } = render(
      <Provider store={store}>
        <SignupFormular
          closeModal={() => console.log('submit SignupFormular')}
        />
      </Provider>,
    );
    expect(screen.queryByText('pseudonym')).toBeInTheDocument();
    expect(screen.queryByText('email')).toBeInTheDocument();
    expect(screen.queryByText('password')).toBeInTheDocument();
  });
  test('modify password input value', () => {
    const { container } = render(
      <Provider store={store}>
        <SignupFormular
          closeModal={() => console.log('submit SignupFormular')}
        />
      </Provider>,
    );

    screen.debug();

    fireEvent.change(screen.getByLabelText('password'), {
      target: { value: 'JavaScript' },
    });

    screen.debug();
    expect(screen.getByLabelText('password')).toBeInTheDocument();
    expect(screen.getByLabelText('password')).toHaveAttribute('value');
    expect(screen.getByLabelText('password')).toHaveValue('JavaScript');
  });
});
