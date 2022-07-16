
import React from 'react'
import { Button, Form , Input } from 'semantic-ui-react'
import { useSelector  } from 'react-redux';
import { useDispatch } from 'react-redux';

import { 
  changeUserPseudonym , 
  changeUserEmail , 
  changeUserPassword , 
} from '../../actions';

import './styles.css';

export default function SignupFormular() {
  const dispatch = useDispatch();

  const userPseudonym = useSelector((state) => state.userPseudonym);
  const userEmail = useSelector((state) => state.userEmail);
  const userPassword = useSelector((state) => state.userPassword);
  // const filteredPositions = useSelector((state) => state.filteredPositions);
 
  const handlesUserPseudonymChange = (event) => {
    console.log('handlesUserPseudonymChange');
    event.preventDefault();
    const action = changeUserPseudonym(event.target.value);
    dispatch(action);
  };
  const handlesUserEmailChange = (event) => {
    console.log('handlesUserEmailChange');
    event.preventDefault();
    const action = changeUserEmail(event.target.value);
    dispatch(action);
  };
  const handleUserPasswordChange = (event) => {
    console.log('handlesUserPasswordChange');
    event.preventDefault();
    const action = changeUserPassword(event.target.value);
    dispatch(action);
  };
  const handleSubmitSignupFormular = (event) => {
    console.log('handleSubmitSignupFormular');
    event.preventDefault();
  };

  return (
    <div>

    <h4>Signup Formular</h4>
    <Form 
    className="form marginBottom" 
    size="mini"
    onSubmit={handleSubmitSignupFormular}
    >   
      <Form.Field
        required
      >
      
      <Input 
        className="form__input"
        type="text"
        label="pseudonym"
        value={userPseudonym}
        size="mini"
        onChange={handlesUserPseudonymChange} />
      </Form.Field>

      <Form.Field
        required
      >
      <Input 
        className="form__input"
        type="email"
        label="email"
        value={userEmail}
        size="mini"
        onChange={handlesUserEmailChange} />
      </Form.Field>
      <Form.Field
        required
      >
      <Input 
        className="form__input"
        type="password"
        label="password"
        value={userPassword}
        size="mini"
        onChange={handleUserPasswordChange} />
      </Form.Field>
      <Button 
       type='submit'
       size="mini"
       >
       Submit signup formular
      </Button>

    </Form>
    </div>
  );
}
