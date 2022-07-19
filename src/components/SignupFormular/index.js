
import React from 'react'
import { Button, Form , Checkbox } from 'semantic-ui-react'
import { useSelector  } from 'react-redux';
import { useDispatch } from 'react-redux';

import { 
  changeInput,
  submitSignupFormular,
  initialiseUser
} from '../../actions';

import './styles.css';

export default function SignupFormular({closeModal}) {
  const dispatch = useDispatch();

  const userPseudonym = useSelector((state) => state.userPseudonym);
  const userEmail = useSelector((state) => state.userEmail);
  const userPassword = useSelector((state) => state.userPassword);
  const handleInputChange = (event) => {
    event.preventDefault();
    const action = changeInput(event.target.value, event.target.name);
    dispatch(action);
  };

  const handleSubmitSignupFormular = (event) => {
    console.log('handleSubmitSignupFormular');
    const action = submitSignupFormular(userPseudonym,userEmail,userPassword);
    dispatch(action);
    dispatch(initialiseUser())
    closeModal()
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
      widths='equal'
      >

      <Form.Input
        fluid
        className="form__input"
        type="text"
        label="pseudonym"
        name="userPseudonym"
        value={userPseudonym}
        size="mini"
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
      <Checkbox 
        label='I agree to the Terms and Conditions'
        defaultChecked
        />
    </Form.Field>
      <Button 
      fluid
       type='submit'
       size="mini"
       >
       Submit signup formular
      </Button>
        
    </Form>
    </div>
  );
}
