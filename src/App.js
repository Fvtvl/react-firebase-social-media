import React, { Component } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ThemeProvider from '@mui/material/styles/ThemeProvider';
import createTheme from '@mui/material/styles/createTheme';
import './App.css';
import Navbar from './components/Navbar';

import home from './pages/home';
import login from './pages/login';
import signup from './pages/signup';

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
});

class App extends Component {
  render() {
    return (
      <ThemeProvider theme={theme}>
        <Router>
          <Navbar />
          <div className="container">
            <Routes>
              <Route path="/" Component={home} />
              <Route path="/login" Component={login} />
              <Route path="/signup" Component={signup} />
            </Routes>
          </div>
        </Router>
      </ThemeProvider>
    );
  }
}

export default App;
