import React from 'react';
import axios from 'axios';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import jwtDecode from 'jwt-decode';
//Redux
import { Provider } from 'react-redux';
import store from './redux/store';
import { SET_AUTHENTICATED } from './redux/types';
import { logoutUser, getUserData } from './redux/actions/userActions';
//Components
import Navbar from './components/Navbar';
import AuthRoute from './util/AuthRoute';
//Pages
import Home from './pages/home';
import Login from './pages/login';
import Signup from './pages/signup';
//MUI
import ThemeProvider from '@mui/material/styles/ThemeProvider';
import createTheme from '@mui/material/styles/createTheme';
import themeFile from './util/theme';
import { Box, Container } from '@mui/material';

const theme = createTheme(themeFile);

const token = localStorage.FBIdToken;
if (token) {
  const decodedToken = jwtDecode(token);
  if (decodedToken.exp * 1000 < Date.now()) {
    store.dispatch(logoutUser());
    window.location.href = '/login';
  } else {
    store.dispatch({ type: SET_AUTHENTICATED });
    axios.defaults.headers.common['Authorization'] = token;
    store.dispatch(getUserData());
  }
}

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <Provider store={store}>
        <Router>
          <Navbar />
          <Container maxWidth="xl">
            <Box sx={{ margin: '80px auto 0 auto' }}>
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/" element={<AuthRoute />}>
                  <Route path="/login" element={<Login />} />
                </Route>
                <Route path="/" element={<AuthRoute />}>
                  <Route path="/signup" element={<Signup />} />
                </Route>
              </Routes>
            </Box>
          </Container>
        </Router>
      </Provider>
    </ThemeProvider>
  );
};

export default App;
