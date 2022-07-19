import React from 'react'
import { Button } from 'semantic-ui-react'
import { useDispatch , useSelector } from 'react-redux';

import { 
    initialiseUser,
  } 
from '../../actions';

const DisconnectButton = () => {
    const dispatch = useDispatch();
    const userPassword = useSelector((state) => state.userPassword);

    const handleDisconnectUser = (event) => {
        dispatch(initialiseUser())
    }


    return (
    <Button
    color = 'orange'
    fluid
    onClick={handleDisconnectUser}
    size ='mini'
    >
        Disconnect {userPassword}
    </Button>)
}

export default DisconnectButton;