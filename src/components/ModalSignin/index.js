import React from 'react';
import SigninFormular from '../SigninFormular';
import { Button, Modal } from 'semantic-ui-react';

function ModalSignin() {
  const [open, setOpen] = React.useState(false);

  return (
    <Modal
      onClose={() => setOpen(false)}
      onOpen={() => setOpen(true)}
      open={open}
      trigger={<Button
      color ='green'
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