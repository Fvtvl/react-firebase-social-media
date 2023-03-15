import React, { Component } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar';
import home from './pages/home';
import signup from './pages/signup';
import Login from './pages/login';

//MUI
import ThemeProvider from '@mui/material/styles/ThemeProvider';
import createTheme from '@mui/material/styles/createTheme';
import { Box, Container } from '@mui/material';

const theme = createTheme({
  palette: {
    primary: {
      light: '#33c9dc',
      main: '#00bcd4',
      dark: '#008394',
      contrastText: '#fff',
    },
    secondary: {
      light: '#ff6333',
      main: '#ff3d00',
      dark: '#b22a00',
      contrastText: '#fff',
    },
  },
  typography: {
    useNextVariants: true,
  },
});

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
                <Route path="/login" element={<Login />} />
                <Route path="/signup" Component={signup} />
              </Routes>
            </Box>
          </Container>
        </Router>
      </ThemeProvider>
    );
  }
}

export default App;
