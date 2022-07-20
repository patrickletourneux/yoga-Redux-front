
import React from 'react'
// import { useEffect } from 'react'
import { Button, Form , Message } from 'semantic-ui-react'
import { useSelector  } from 'react-redux';
import { useDispatch } from 'react-redux';

import { 
  changeInput,
  submitSigninFormular
} from '../../actions';

import './styles.css';

export default function SigninFormular({closeModal}) {
  const dispatch = useDispatch();

  // const userPseudonym = useSelector((state) => state.userPseudonym);
  const userEmail = useSelector((state) => state.userEmail);
  const userPassword = useSelector((state) => state.userPassword);
  const errorMessageSigninFormular = useSelector((state) => state.errorMessageSigninFormular);

  const handleInputChange = (event) => {
    event.preventDefault();
    const action = changeInput(event.target.value, event.target.name);
    dispatch(action);
  };

  
  const handleSubmitSigninFormular = (event) => {
    console.log('handleSubmitSigninFormular');
    const action = submitSigninFormular(userEmail,userPassword);
    dispatch(action);
    event.preventDefault();
  };

  return (
    <div>
    <h4>Signin Formular</h4>
    <Form 
    className="form marginBottom" 
    id="formSignupFormular" 
    size="mini"
    onSubmit={handleSubmitSigninFormular}
    >   
    <Form.Group
      widths='equal'
      >
      <Form.Input
      fluid
        required
        className="form__input"
        type="email"
        label="email"
        name="userEmail"
        value={userEmail}
        size="mini"
        onChange={handleInputChange} />
      <Form.Input
      fluid
        required
        className="form__input"
        type="password"
        label="password"
        name="userPassword"
        value={userPassword}
        size="mini"
        onChange={handleInputChange} />
        </Form.Group>
      <Form.Field
      required
      >
    </Form.Field>
      <Button 
      fluid
       type='submit'
       size="mini"
       >
       Submit signin formular
      </Button>
        
    </Form>
    {
      errorMessageSigninFormular.length > 0 && 
      <Message negative>
      <Message.Header>{errorMessageSigninFormular}</Message.Header>
    </Message>
    }


    </div>
  );
}
