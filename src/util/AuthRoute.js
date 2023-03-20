import React from 'react';

import { Navigate, Outlet } from 'react-router-dom';

const AuthRoute = ({ authenticated }) => {
  const auth = authenticated;
  return auth ? <Navigate to="/" /> : <Outlet />;
};

export default AuthRoute;
