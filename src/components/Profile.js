import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

const Profile = ({ user }) => {
  console.log('Profile  user:', user);
  const { handle, createdAt, imageUrl, bio, website, location } =
    user.credentials;
  const { loading } = user;
  console.log('Profile  loading:', loading);

  let profileMarkup = !loading ? (authenticated ? (): ()) : (<p>Loading...</p>)

  return profileMarkup;
};

Profile.protoTypes = {
  user: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  user: state.user,
});

export default connect(mapStateToProps)(Profile);
