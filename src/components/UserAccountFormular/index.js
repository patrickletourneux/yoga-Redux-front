import React from 'react';
// import { useEffect } from 'react'
import {
  Button, Form, Message, Icon,
} from 'semantic-ui-react';
import { useSelector, useDispatch } from 'react-redux';

import {
  deleteUser,
  // submitSigninFormular,
} from '../../actions/user';

import './styles.css';

export default function UserAccountFormular() {
  const dispatch = useDispatch();

  const user = useSelector((state) => state.user);

  const handleClickDeleteUserButton = (event) => {
    const action = deleteUser(user.id);
    dispatch(action);
    event.preventDefault();
  };

  return (
    <div>
      <h4>User Account Formular</h4>
      <h2> patch user will be managed later</h2>
      <Button
        type="button"
        size="small"
        color="red"
        onClick={handleClickDeleteUserButton}
      >
        <Icon name="user delete" />
        Delete User
      </Button>
    </div>
  );
}
