import React from 'react';
import {
  Button, Form, Checkbox, Message,
} from 'semantic-ui-react';
import { useSelector, useDispatch } from 'react-redux';

import {
  changeInput,
  submitSignupFormular,
  initialiseUser,
} from '../../actions/user';

import './styles.css';

export default function SignupFormular() {
  const dispatch = useDispatch();

  const userPseudonym = useSelector((state) => state.user.userPseudonym);
  const userEmail = useSelector((state) => state.user.userEmail);
  const userPassword = useSelector((state) => state.user.userPassword);
  const errorMessageSignupFormular = useSelector((state) => state.user.errorMessageSignupFormular);

  const handleInputChange = (event) => {
    event.preventDefault();
    const action = changeInput(event.target.value, event.target.name);
    dispatch(action);
  };

  const handleSubmitSignupFormular = (event) => {
    const action = submitSignupFormular(userPseudonym, userEmail, userPassword);
    dispatch(action);
    dispatch(initialiseUser());
    event.preventDefault();
  };

  return (
    <div>
      <h4>Signup Formular</h4>
      <Form
        className="form marginBottom"
        id="formSignupFormular"
        size="mini"
        onSubmit={handleSubmitSignupFormular}
      >
        <Form.Group
          widths="equal"
        >

          <Form.Input
        // fluid
            className="form__input"
            type="text"
            label="pseudonym"
            name="userPseudonym"
            value={userPseudonym}
            size="large"
            onChange={handleInputChange}
            required
          />
          <Form.Input
            fluid
            required
            className="form__input"
            type="email"
            label="email"
            name="userEmail"
            value={userEmail}
            size="large"
            onChange={handleInputChange}
          />
          <Form.Input
            fluid
            required
            className="form__input"
            type="password"
            label="password"
            name="userPassword"
            value={userPassword}
            size="large"
            onChange={handleInputChange}
          />
        </Form.Group>
        <Form.Field
          required
        >
          <Checkbox
            label="I agree to the Terms and Conditions"
            defaultChecked
          />
        </Form.Field>
        <Button
          fluid
          type="submit"
          size="large"
        >
          Submit signup formular
        </Button>

      </Form>
      {
      errorMessageSignupFormular.length > 0
      && (
      <Message negative>
        <Message.Header>{errorMessageSignupFormular}</Message.Header>
      </Message>
      )
    }
    </div>
  );
}
