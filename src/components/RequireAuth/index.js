import { Navigate, useLocation } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { PropTypes } from 'prop-types';
import NotConnectedContent from '../NotConnectedContent';


export default function RequireAuth({ children }) {
  const isUserConnected = useSelector((state) => state.user.isUserConnected);
  // const location = useLocation();

  return isUserConnected
    ? children
    : NotConnectedContent()
}

RequireAuth.propTypes = {
  children: PropTypes.node,
};

RequireAuth.defaultProps = {
  children: '',
};
