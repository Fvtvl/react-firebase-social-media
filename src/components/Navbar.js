import React, { useCallback } from 'react';
import { Link } from 'react-router-dom';
//MUI
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';
//Redux stuff
import { useDispatch } from 'react-redux';
import { CLEAR_ERRORS } from '../redux/types';

const Navbar = () => {
  const dispatch = useDispatch();

  const handleClick = useCallback(() => {
    dispatch({ type: CLEAR_ERRORS });
  }, [dispatch]);

  return (
    <AppBar>
      <Toolbar sx={{ margin: 'auto' }}>
        <Button
          color="inherit"
          component={Link}
          to="/login"
          onClick={handleClick}
        >
          Login
        </Button>
        <Button color="inherit" component={Link} to="/" onClick={handleClick}>
          Home
        </Button>
        <Button
          color="inherit"
          component={Link}
          to="/signup"
          onClick={handleClick}
        >
          Signup
        </Button>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
