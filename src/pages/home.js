import { useEffect, useState } from 'react';
import axios from 'axios';
// Components
import Profile from '../components/Profile';
import Scream from '../components/Scream';
//MUI
import Grid from '@mui/material/Grid';

const Home = () => {
  const [screams, setScreams] = useState(null);

  useEffect(() => {
    axios
      .get('/screams')
      .then((res) => {
        console.log(res.data);
        setScreams(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const recentScreamMarkup = screams ? (
    screams.map((scream) => <Scream key={scream.screamId} scream={scream} />)
  ) : (
    <p>Loading...</p>
  );

  return (
    <Grid container spacing={16}>
      <Grid item sm={8} xs={12}>
        {recentScreamMarkup}
      </Grid>
      <Grid item sm={4} xs={12}>
        <Profile />
      </Grid>
    </Grid>
  );
};

export default Home;
