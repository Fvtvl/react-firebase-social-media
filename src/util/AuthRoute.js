import React from 'react';
import PropTypes from 'prop-types';

import { Navigate, Outlet } from 'react-router-dom';
//Redux stuff
import { connect } from 'react-redux';

const AuthRoute = ({ authenticated }) => {
  const auth = authenticated;
  return auth ? <Navigate to="/" /> : <Outlet />;
};

AuthRoute.propTypes = {
  user: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  authenticated: state.user.authenticated,
});

export default connect(mapStateToProps)(AuthRoute);
