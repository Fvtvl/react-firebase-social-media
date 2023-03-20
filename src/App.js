import React, { Component } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import jwtDecode from 'jwt-decode';
import Navbar from './components/Navbar';

//Pages
import home from './pages/home';
import Login from './pages/login';
import Signup from './pages/signup';

//MUI
import ThemeProvider from '@mui/material/styles/ThemeProvider';
import createTheme from '@mui/material/styles/createTheme';
import themeFile from './util/theme';
import { Box, Container } from '@mui/material';
import AuthRoute from './util/AuthRoute';

const theme = createTheme(themeFile);

let authenticated;
const token = localStorage.FBIdToken;
if (token) {
  const decodedToken = jwtDecode(token);
  if (decodedToken.exp * 1000 < Date.now()) {
    window.location.href = '/login';
    authenticated = false;
  } else {
    authenticated = true;
  }
}

class App extends Component {
  render() {
    return (
      <ThemeProvider theme={theme}>
        <Router>
          <Navbar />
          <Container maxWidth="xl">
            <Box sx={{ margin: '80px auto 0 auto' }}>
              <Routes>
                <Route path="/" Component={home} />
                <Route
                  path="/"
                  element={<AuthRoute authenticated={authenticated} />}
                >
                  <Route path="/login" element={<Login />} />
                </Route>
                <Route
                  path="/"
                  element={<AuthRoute authenticated={authenticated} />}
                >
                  <Route path="/signup" element={<Signup />} />{' '}
                </Route>
              </Routes>
            </Box>
          </Container>
        </Router>
      </ThemeProvider>
    );
  }
}

export default App;
