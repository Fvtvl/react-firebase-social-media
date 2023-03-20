import React, { useState } from 'react';
import axios from 'axios';
import { Link, redirect, useNavigate } from 'react-router-dom';
import AppIcon from '../images/icon.png';

//MUI
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import CircularProgress from '@mui/material/CircularProgress';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState({});
  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();
    setLoading(true);
    const userData = {
      email: email,
      password: password,
    };
    axios
      .post('/login', userData)
      .then((res) => {
        console.log(res.data);
        localStorage.setItem('FBIdToken', `Bearer ${res.data.token}`);
        setLoading(false);
        navigate('/');
      })
      .catch((err) => {
        setErrors(err.response.data);
        setLoading(false);
      });
  };

  const handleChange = (event) => {
    if (event.target.name === 'email') {
      setEmail(event.target.value);
    } else {
      setPassword(event.target.value);
    }
  };

  return (
    <Grid container sx={{ textAlign: 'center' }}>
      <Grid item sm />
      <Grid item sm>
        <Box margin="20px auto 20px auto">
          <img src={AppIcon} alt="monkey" width="30px" />
        </Box>
        <Typography variant="h3">Login</Typography>
        <form noValidate onSubmit={handleSubmit}>
          <TextField
            variant="standard"
            id="email"
            name="email"
            type="email"
            label="Email"
            helperText={errors.email}
            error={errors.email ? true : false}
            value={email}
            onChange={handleChange}
            fullWidth
            sx={{ margin: '10px auto 5px auto' }}
          />
          <TextField
            variant="standard"
            id="password"
            name="password"
            type="password"
            label="Password"
            helperText={errors.password}
            error={errors.password ? true : false}
            value={password}
            onChange={handleChange}
            fullWidth
            sx={{ margin: '0 auto 20px auto' }}
          />
          {errors.general && (
            <Typography
              variant="body2"
              sx={{ fontSize: '0.8rem', color: 'red' }}
            >
              {errors.general}
            </Typography>
          )}
          <Button
            variant="contained"
            type="submit"
            color="primary"
            disabled={loading}
            sx={{ margin: '20px 0 20px 0', position: 'relative' }}
          >
            Login
            {loading && (
              <CircularProgress size={30} sx={{ position: 'absolute' }} />
            )}
          </Button>
        </form>
        <small>
          don't have an account? sign up <Link to="/signup">here</Link>
        </small>
      </Grid>
      <Grid item sm />
    </Grid>
  );
};

export default Login;
