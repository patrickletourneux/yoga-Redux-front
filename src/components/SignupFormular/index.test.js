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
    // screen.debug();
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

    // screen.debug();

    fireEvent.change(screen.getByLabelText('password'), {
      target: { value: 'fakePassword' },
    });

    // screen.debug();
    expect(screen.getByLabelText('password')).toBeInTheDocument();
    expect(screen.getByLabelText('password')).toHaveAttribute('value');
    expect(screen.getByLabelText('password')).toHaveValue('fakePassword');
  });
  test('submit form modification of the store', () => {
    const { container } = render(
      <Provider store={store}>
        <SignupFormular
          closeModal={() => console.log('submit SignupFormular')}
        />
      </Provider>,
    );

    fireEvent.change(screen.getByLabelText('password'), {
      target: { value: 'fakePassword' },
    });

    fireEvent.change(screen.getByLabelText('email'), {
      target: { value: 'fakeEmail' },
    });
    fireEvent.change(screen.getByLabelText('pseudonym'), {
      target: { value: 'fakePseudonym' },
    });

    fireEvent.submit(container.querySelectorAll('form')[0]);

    const state = store.getState();
    // console.log('state.user ', state.user);

    // screen.debug();
    expect(state.user.email).toEqual('fakeEmail');
    expect(state.user.password).toEqual('fakePassword');
    expect(state.user.pseudonym).toEqual('fakePseudonym');
  });
});
