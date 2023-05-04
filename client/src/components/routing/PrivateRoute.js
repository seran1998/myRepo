import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { useNavigate } from 'react-router-dom';

const PrivateRoute = ({
  children,
  auth: { isAuthentication, loading },
  ...rest
}) => {
  const navigate = useNavigate();
  console.log('enter' + isAuthentication, loading);

  return !isAuthentication && !loading ? navigate('/login') : children;
  //   <Route
  //     {...rest}
  //     render={(props) =>

  //     }
  //   />;
};

PrivateRoute.propTypes = {
  auth: PropTypes.object.isRequired,
};
const mapSateToProps = (state) => ({
  auth: state.auth,
});

export default connect(mapSateToProps)(PrivateRoute);
