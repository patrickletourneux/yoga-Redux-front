import React from 'react'
import { Button } from 'semantic-ui-react'
import { useDispatch } from 'react-redux';

import { 
    disconnectUser,
  } from '../../actions';

const DisconnectButton = () => {
    const dispatch = useDispatch();

    const handleDisconnectUser = (event) => {
        dispatch(disconnectUser())
    }


    return (
    <Button
    onClick={handleDisconnectUser}
    >
        Disconnect
    </Button>)
}

export default DisconnectButton;