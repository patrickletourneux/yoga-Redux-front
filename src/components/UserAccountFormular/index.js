import React from 'react';
// import { useEffect } from 'react'
import { Button, Form, Message } from 'semantic-ui-react';
import { useSelector, useDispatch } from 'react-redux';

import {
  changeInput,
  // submitSigninFormular,
} from '../../actions/user';

import './styles.css';

export default function UserAccountFormular() {
  const dispatch = useDispatch();

  // const pseudonym = useSelector((state) => state.pseudonym);
  const pseudonym = useSelector((state) => state.user.pseudonym);
  const email = useSelector((state) => state.user.email);
  const password = useSelector((state) => state.user.password);
  // const errorMessageSigninFormular = useSelector((state) => state.user.errorMessageSigninFormular);

  const handleInputChange = (event) => {
    event.preventDefault();
    const action = changeInput(event.target.value, event.target.name);
    dispatch(action);
  };

  const handleSubmitUserAccountFormular = (event) => {
    // const action = submitSigninFormular(email, password);
    // dispatch(action);
    event.preventDefault();
  };

  return (
    <div>
      <h4>User Account Formular</h4>
      <Form
        className="form marginBottom"
        id="UserAccountFormular"
        size="mini"
        onSubmit={handleSubmitUserAccountFormular}
      >
        <Form.Group
          widths="equal"
        >
          <Form.Input
            required
            className="form__input"
            type="pseudonym"
            label="pseudonym"
            name="pseudonym"
            value={pseudonym}
            size="large"
            onChange={handleInputChange}
          />
          <Form.Input
            required
            className="form__input"
            type="email"
            label="email"
            name="email"
            value={email}
            size="large"
            onChange={handleInputChange}
          />
          <Form.Input
            fluid
            required
            className="form__input"
            type="password"
            label="password"
            name="password"
            value={password}
            size="large"
            onChange={handleInputChange}
          />
          <Form.Input
            fluid
            required
            className="form__input"
            type="password"
            label="new password"
            name="newPassword"
            value=""
            size="large"
            onChange={handleInputChange}
          />
          <Form.Input
            fluid
            required
            className="form__input"
            type="password"
            label="confirm new password"
            name="newPasswordconfirm"
            value=""
            size="large"
            onChange={handleInputChange}
          />
        </Form.Group>
        <Form.Field
          required
        />
        <Button
          fluid
          type="submit"
          size="large"
        >
          Submit Modifications
        </Button>

      </Form>
      {/* {
      errorMessageSigninFormular.length > 0
      && (
      <Message negative>
        <Message.Header>{errorMessageSigninFormular}</Message.Header>
      </Message>
      )
      } */}

    </div>
  );
}
