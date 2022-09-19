import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { ToastContainer, toast } from 'react-toastify';
import componentRenderLog from '../../hookCustom/componentRenderLog';

import 'react-toastify/dist/ReactToastify.css';
// minified version is also included
// import 'react-toastify/dist/ReactToastify.min.css';

function UserNotification() {
  const notification = useSelector((state) => state.user.notification);

  const notify = (message) => toast.info(message, {
    position: 'top-right',
    autoClose: 1000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
  });

  componentRenderLog('Notification');

  useEffect(() => {
    if (notification !== '') {
      notify(notification);
    }
  }, [notification]);

  return (
    <div>
      <ToastContainer />
    </div>
  );
}

export default UserNotification;
