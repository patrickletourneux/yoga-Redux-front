import { Navigate, useLocation } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { PropTypes } from 'prop-types';


export default function RequireAuth({ children }) {
  const isUserConnected = useSelector((state) => state.isUserConnected);
  // const location = useLocation();

  return isUserConnected
    ? children
    // : <Navigate to="/connexion" replace state={{ path: location.pathname }} />;
    : <h1>please signin</h1>
}

RequireAuth.propTypes = {
  children: PropTypes.node,
};

RequireAuth.defaultProps = {
  children: '',
};
