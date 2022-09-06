import React from 'react';
// import { useEffect } from 'react'
import { Button, Form, Message } from 'semantic-ui-react';
import { useSelector, useDispatch } from 'react-redux';

import {
  changeInput,
  submitSigninFormular,
} from '../../actions/user';

import './styles.css';

export default function SigninFormular() {
  const dispatch = useDispatch();

  // const pseudonym = useSelector((state) => state.pseudonym);
  const email = useSelector((state) => state.user.email);
  const password = useSelector((state) => state.user.password);
  const errorMessageSigninFormular = useSelector((state) => state.user.errorMessageSigninFormular);

  const handleInputChange = (event) => {
    event.preventDefault();
    const action = changeInput(event.target.value, event.target.name);
    dispatch(action);
  };

  const handleSubmitSigninFormular = (event) => {
    const action = submitSigninFormular(email, password);
    dispatch(action);
    event.preventDefault();
  };

  return (
    <div>
      <h4>Signin Formular</h4>
      <Form
        className="form marginBottom"
        id="formSignupFormular"
        onSubmit={handleSubmitSigninFormular}
      >
        <Form.Input
          required
          className="form__input"
          type="email"
          label="email"
          name="email"
          value={email}
          onChange={handleInputChange}
        />
        <Form.Input
          required
          className="form__input"
          type="password"
          label="password"
          name="password"
          value={password}
          onChange={handleInputChange}
        />
        <Form.Field
          required
        />
        <Button
          floated="left"
          type="submit"
          size="large"
        >
          Submit signin formular
        </Button>

      </Form>
      {
      errorMessageSigninFormular.length > 0
      && (
      <Message negative>
        <Message.Header>{errorMessageSigninFormular}</Message.Header>
      </Message>
      )
    }

    </div>
  );
}
