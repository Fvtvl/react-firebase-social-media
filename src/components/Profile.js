import React from 'react';
import theme from '../util/theme';
import PropTypes from 'prop-types';
import dayjs from 'dayjs';
//Redux
import { connect } from 'react-redux';
//MUI
import { Box, Button, Divider, Paper, Typography } from '@mui/material';
import MuiLink from '@mui/material/Link';
import { Link } from 'react-router-dom';
//Icons Mui
import LocationOnIcon from '@mui/icons-material/LocationOn';
import LinkIcon from '@mui/icons-material/Link';
import CalendarTodayIcon from '@mui/icons-material/CalendarToday';

const Profile = ({ user }) => {
  console.log('Profile  user:', user);
  const { handle, createdAt, imageUrl, bio, website, location } =
    user.credentials;
  const { authenticated, loading } = user;
  console.log('Profile  loading:', loading);

  return (
    <>
      {!loading ? (
        authenticated ? (
          <Paper
            sx={{
              padding: '20px',
              '& hr': {
                border: 'none',
                margin: '0 0 10px 0',
              },
            }}
          >
            <Box>
              <Box
                sx={{
                  textAlign: 'center',
                  position: 'relative',
                  '& button': {
                    position: 'absolute',
                    top: '80%',
                    left: '70%',
                  },
                }}
              >
                <img
                  src={imageUrl}
                  alt="profile"
                  width="200px"
                  height="200px"
                  style={{ objectFit: 'cover', borderRadius: '50%' }}
                />
              </Box>
              <hr />
              <Box
                sx={{
                  textAlign: 'center',
                  '& span, svg': {
                    verticalAlign: 'middle',
                  },
                  '& a': {
                    color: theme.palette.primary.main,
                  },
                }}
              >
                <MuiLink
                  component={Link}
                  to={`/users/${handle}`}
                  color="primary"
                  variant="h5"
                >
                  @{handle}
                </MuiLink>
                <hr />
                {bio && <Typography variant="body2">{bio}</Typography>}
                <Divider sx={{}} />
                {location && (
                  <>
                    <LocationOnIcon color="primary" /> <span>{location}</span>
                    <hr />
                  </>
                )}
                {website && (
                  <>
                    <LinkIcon color="primary" />{' '}
                    <a href={website} target="_blank" rel="noopener noreferrer">
                      {' '}
                      {website}
                    </a>
                    <hr />
                  </>
                )}
                {
                  <>
                    <CalendarTodayIcon color="primary" />{' '}
                    <span> Joined {dayjs(createdAt).format('MMM YYYY')}</span>
                  </>
                }
              </Box>
            </Box>
          </Paper>
        ) : (
          <Paper sx={{ padding: '20px ' }}>
            <Typography variant="body2" align="center">
              No profile found, please login again
            </Typography>
            <Box
              sx={{
                textAlign: 'center',
                '& a': {
                  margin: '20px 10px',
                },
              }}
            >
              {' '}
              <Button
                variant="contained"
                color="primary"
                component={Link}
                to="/login"
              >
                Login
              </Button>
              <Button
                variant="contained"
                color="secondary"
                component={Link}
                to="/signup"
              >
                Signup
              </Button>
            </Box>
          </Paper>
        )
      ) : (
        <p>Loading...</p>
      )}
    </>
  );
};

Profile.protoTypes = {
  user: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  user: state.user,
});

export default connect(mapStateToProps)(Profile);
