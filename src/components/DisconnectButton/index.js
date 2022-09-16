import React from 'react';
import { Button } from 'semantic-ui-react';
import { useDispatch } from 'react-redux';

import {
  initialiseUser,
  changeDataUser,
}
  from '../../actions/user';

import {
  initialiseDataPosition,
}
  from '../../actions/positions';

function DisconnectButton() {
  const dispatch = useDispatch();

  const handleDisconnectUser = () => {
    dispatch(initialiseUser());
    dispatch(initialiseDataPosition());
    dispatch(changeDataUser({ notification: 'utilisateur déconnecté' }));
    sessionStorage.clear();
  };

  return (
    <Button
      color="orange"
      onClick={handleDisconnectUser}
      size="mini"
    >
      Disconnect
    </Button>
  );
}

export default DisconnectButton;
