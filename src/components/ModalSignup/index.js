import React, { useEffect } from 'react'
import { useSelector  } from 'react-redux';
import SignupFormular from '../SignupFormular';
import { Button, Modal } from 'semantic-ui-react';
import { useDispatch } from 'react-redux';

import { 
  changeErrorMessageSignupFormular,
  initialiseUser
 } 
from '../../actions/user'

function ModalSignup() {
  const [open, setOpen] = React.useState(false);
  const dispatch = useDispatch();
  const errorMessageSignupFormular = useSelector((state) => state.user.errorMessageSignupFormular);

  useEffect(() => {
    if (errorMessageSignupFormular.length >0)
      setOpen(true) 
  },[errorMessageSignupFormular]);


  const handleCloseModale = () => {
    dispatch(changeErrorMessageSignupFormular(''));
    dispatch(initialiseUser(''));
    setOpen(false)
  }

  return (
    <Modal
      onClose={() => setOpen(false)}
      onOpen={() => setOpen(true)}
      open={open}
      trigger={<Button
          size ='mini'
          >
            Signup
      </Button>}
    >
      <Modal.Header>Signup Modal</Modal.Header>
        <Modal.Content>
          <SignupFormular
            closeModal = {() => setOpen(false)}
          />
        </Modal.Content>
      <Modal.Actions>
        <Button color='black' onClick={() => handleCloseModale() }>
          Cancel
        </Button>
      </Modal.Actions>
    </Modal>
  )
}

export default ModalSignup