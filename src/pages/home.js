import Grid from '@mui/material/Grid';
import axios from 'axios';
import React, { Component } from 'react';

class home extends Component {
  state = {
    screams: null,
  };

  componentDidMount() {
    axios
      .get('/screams')
      .then((res) => {
        console.log(res.data);
        this.setState({
          screams: res.data,
        });
      })
      .catch((err) => {
        console.log(err);
      });
  }
  render() {
    let recentScreamMarkup = this.state.screams ? (
      this.state.screams.map((scream) => <p>{scream.body}</p>)
    ) : (
      <p>Loading...</p>
    );
    return (
      <Grid container spacing={16}>
        <Grid item sm={8} xs={12}>
          {recentScreamMarkup}
        </Grid>
        <Grid item sm={4} xs={12}>
          Profile
        </Grid>
      </Grid>
    );
  }
}

export default home;
