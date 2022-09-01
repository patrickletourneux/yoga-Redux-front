import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Button, Modal } from 'semantic-ui-react';
import SignupFormular from '../SignupFormular';

import {
  changeDataUser,
}
  from '../../actions/user';

function ModalSignup() {
  const [open, setOpen] = React.useState(false);
  const dispatch = useDispatch();
  const errorMessageSignupFormular = useSelector((state) => state.user.errorMessageSignupFormular);

  useEffect(() => {
    console.log('modal signup rendu');
    if (errorMessageSignupFormular.length > 0) {
      setOpen(true);
    }
  }, [errorMessageSignupFormular]);

  const handleCloseModale = () => {
    dispatch(changeDataUser({ errorMessageSignupFormular: '' }));
    setOpen(false);
  };

  return (
    <Modal
      onClose={() => setOpen(false)}
      onOpen={() => setOpen(true)}
      open={open}
      trigger={(
        <Button
          size="mini"
        >
          Signup
        </Button>
)}
    >
      <Modal.Header>Signup Modal</Modal.Header>
      <Modal.Content>
        <SignupFormular
          closeModal={() => setOpen(false)}
        />
      </Modal.Content>
      <Modal.Actions>
        <Button color="black" onClick={() => handleCloseModale()}>
          Cancel
        </Button>
      </Modal.Actions>
    </Modal>
  );
}

export default ModalSignup;
