import React, { useEffect } from 'react'
import SigninFormular from '../SigninFormular';
import { Button, Modal } from 'semantic-ui-react';
import { useSelector  } from 'react-redux';

function ModalSignin() {
  const [open, setOpen] = React.useState(false);
  const isUserConnected = useSelector((state) => state.isUserConnected);

  useEffect(() => {
    setOpen(false) 
  },[isUserConnected]);

  return (
    <Modal
      onClose={() => setOpen(false)}
      onOpen={() => setOpen(true)}
      open={open}
      trigger={<Button
      color ='green'
      size ='mini'
      >
        Signin
      </Button>}
    >
      <Modal.Header>Signin Modal</Modal.Header>
        <Modal.Content>
          <SigninFormular
            closeModal = {() => setOpen(false)}/>
        </Modal.Content>
      <Modal.Actions>
        <Button color='black' onClick={() => setOpen(false)}>
          Cancel
        </Button>
      </Modal.Actions>
    </Modal>
  )
}

export default ModalSignin