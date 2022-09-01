import React, { useEffect } from 'react';
import { Button, Modal } from 'semantic-ui-react';
import { useSelector, useDispatch } from 'react-redux';
import UserAccountFormular from '../UserAccountFormular';

function ModalUserAccount() {
  const [open, setOpen] = React.useState(false);
  const dispatch = useDispatch();

  const handleCloseModale = () => {
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
          User account
        </Button>
      )}
    >
      <Modal.Header>User account Modal</Modal.Header>
      <Modal.Content>
        <UserAccountFormular />
      </Modal.Content>
      <Modal.Actions>
        <Button color="black" onClick={() => handleCloseModale()}>
          Cancel
        </Button>
      </Modal.Actions>
    </Modal>
  );
}

export default ModalUserAccount;
