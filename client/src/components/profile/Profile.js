import React, { Fragment, useEffect } from 'react';
import PropTypes from 'prop-types';
import Spinner from '../layout/Spinner';
import { getProfileById } from '../../actions/profile';
import { connect } from 'react-redux';
import { NavLink, useParams } from 'react-router-dom';

const Profile = ({ getProfileById, profile: { profile, loading } }) => {
  const params = useParams();

  useEffect(() => {
    getProfileById(params.id);
  }, [getProfileById, params]);
  return (
    <Fragment>
      {profile === null || loading ? (
        <Spinner />
      ) : (
        <Fragment>
          <NavLink className="btn btn-light" to="/profiles">
            Back to profiles
          </NavLink>
        </Fragment>
      )}
    </Fragment>
  );
};

Profile.propTypes = {
  getProfileById: PropTypes.func.isRequired,
  profile: PropTypes.object.isRequired,
  auth: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  profile: state.profile,
  auth: state.auth,
});

export default connect(mapStateToProps, { getProfileById })(Profile);
