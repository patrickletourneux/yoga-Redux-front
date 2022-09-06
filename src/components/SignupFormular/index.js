import React from 'react';
import {
  Button, Form, Checkbox, Message,
} from 'semantic-ui-react';
import { useSelector, useDispatch } from 'react-redux';
import PropTypes from 'prop-types';

import {
  changeInput,
  submitSignupFormular,
} from '../../actions/user';

import './styles.css';

export default function SignupFormular({ closeModal }) {
  const dispatch = useDispatch();

  const pseudonym = useSelector((state) => state.user.pseudonym);
  const email = useSelector((state) => state.user.email);
  const password = useSelector((state) => state.user.password);
  const errorMessageSignupFormular = useSelector((state) => state.user.errorMessageSignupFormular);

  const handleInputChange = (event) => {
    event.preventDefault();
    const action = changeInput(event.target.value, event.target.name);
    dispatch(action);
  };

  const handleSubmitSignupFormular = (event) => {
    const action = submitSignupFormular(pseudonym, email, password);
    dispatch(action);
    closeModal();
    event.preventDefault();
  };

  return (
    <div>
      <h4>Signup Formular</h4>
      <Form
        className="form marginBottom"
        id="formSignupFormular"
        onSubmit={handleSubmitSignupFormular}
      >
        <Form.Input
          className="form__input"
          type="text"
          label="pseudonym"
          name="pseudonym"
          value={pseudonym}
          onChange={handleInputChange}
          required
        />
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
        >
          <Checkbox
            label="I agree to the Terms and Conditions"
            defaultChecked
          />
        </Form.Field>
        <Button
          floated="left"
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

SignupFormular.propTypes = {
  closeModal: PropTypes.func.isRequired,
};
