import React from 'react';
// import { useEffect } from 'react'
import {
  Button, Form, Message, Icon,
} from 'semantic-ui-react';
import { useSelector, useDispatch } from 'react-redux';

import {
  changeInput,
  deleteUser,
  // submitSigninFormular,
} from '../../actions/user';

import './styles.css';

export default function UserAccountFormular() {
  const dispatch = useDispatch();

  // const pseudonym = useSelector((state) => state.pseudonym);
  const user = useSelector((state) => state.user);
  // const errorMessageSigninFormular = useSelector((state) => state.user.errorMessageSigninFormular);

  const handleInputChange = (event) => {
    event.preventDefault();
    const action = changeInput(event.target.value, event.target.name);
    dispatch(action);
  };

  const handleClickDeleteUserButton = (event) => {
    const action = deleteUser(user.id);
    dispatch(action);
    console.log('clic');
    event.preventDefault();
  };

  return (
    <div>
      <h4>User Account Formular</h4>
      {/* <Form
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
            value={user.pseudonym}
            size="large"
            onChange={handleInputChange}
          />
          <Form.Input
            required
            className="form__input"
            type="email"
            label="email"
            name="email"
            value={user.email}
            size="large"
            onChange={handleInputChange}
          />
          <Form.Input
            fluid
            required
            className="form__input"
            type="password"
            label="actual password"
            name="password"
            value={user.password}
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

      </Form> */}
      <Button
        type="button"
        size="small"
        color="red"
        onClick={handleClickDeleteUserButton}
      >
        <Icon name="user delete" />
        Delete User
      </Button>
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
