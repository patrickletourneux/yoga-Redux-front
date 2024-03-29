import React, { useEffect } from 'react';
import { Button, Modal } from 'semantic-ui-react';
import { useSelector, useDispatch } from 'react-redux';

import SigninFormular from '../SigninFormular';

import {
  changeDataUser,
  initialiseUser,
}
  from '../../actions/user';

function ModalSignin() {
  const [open, setOpen] = React.useState(false);
  const dispatch = useDispatch();
  const isUserConnected = useSelector((state) => state.user.isUserConnected);

  useEffect(() => {
    setOpen(false);
    if (isUserConnected) {
      dispatch(changeDataUser({ notification: 'utilisateur connecté' }));
    }
  }, [isUserConnected]);

  const handleCloseModale = () => {
    dispatch(changeDataUser({ errorMessageSigninFormular: '' }));
    dispatch(initialiseUser(''));
    setOpen(false);
  };

  return (
    <Modal
      onClose={() => setOpen(false)}
      onOpen={() => setOpen(true)}
      open={open}
      trigger={(
        <Button
          color="green"
          size="mini"
        >
          Signin
        </Button>
      )}
    >
      <Modal.Header>Signin Modal</Modal.Header>
      <Modal.Content>
        <SigninFormular />
      </Modal.Content>
      <Modal.Actions>
        <Button color="black" onClick={() => handleCloseModale()}>
          Cancel
        </Button>
      </Modal.Actions>
    </Modal>
  );
}

export default ModalSignin;
