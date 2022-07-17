import React from 'react';
import SignupFormular from '../SignupFormular';
import { Button, Modal } from 'semantic-ui-react';

function ModalSignup() {
  const [open, setOpen] = React.useState(false);

  return (
    <Modal
      onClose={() => setOpen(false)}
      onOpen={() => setOpen(true)}
      open={open}
      trigger={<Button>Signup</Button>}
    >
      <Modal.Header>Signup Modal</Modal.Header>
        <Modal.Content>
          <SignupFormular/>
        </Modal.Content>
      <Modal.Actions>
        <Button color='black' onClick={() => setOpen(false)}>
          Cancel
        </Button>
      </Modal.Actions>
    </Modal>
  )
}

export default ModalSignup