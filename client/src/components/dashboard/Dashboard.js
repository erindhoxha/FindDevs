import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { deleteAccount, getCurrentProfile } from '../../actions/profile';
import { connect } from 'react-redux';
import Spinner from '../layout/Spinner';
import { Link } from 'react-router-dom';
import DashboardActions from './DashboardActions';
import Alert from '../layout/Alert';
import Experience from './Experience';
import Education from './Education';

function Dashboard({
  getCurrentProfile,
  auth,
  profile: { profile, loading },
  deleteAccount,
}) {
  useEffect(() => {
    getCurrentProfile();
  }, [getCurrentProfile]);

  return (
    <div>
      {loading && profile === null ? <Spinner /> : <></>}
      <Alert />
      <h1 className="large text-primary">Dashboard</h1>
      <p className="lead">
        <i className="fas fa-user"></i> Welcome {auth.user && auth.user.name}
      </p>

      {profile != null && loading === false ? (
        <></>
      ) : (
        <>
          You have not set up a profile. Please add some info.{' '}
          <Link to="/create-profile" className="btn btn-primary my-1">
            Create profile
          </Link>
        </>
      )}

      <DashboardActions />

      <h2 className="my-2">Experience Credentials</h2>
      <table className="table w-full">
        <thead>
          <tr>
            <th>Company</th>
            <th className="hide-sm">Title</th>
            <th className="hide-sm">Years</th>
            <th></th>
          </tr>
        </thead>
        <Experience />
      </table>

      <h2 className="my-2">Education Credentials</h2>
      <table className="table w-full">
        <thead>
          <tr>
            <th>School</th>
            <th className="hide-sm">Degree</th>
            <th className="hide-sm">Years</th>
            <th />
          </tr>
        </thead>
        <Education />
      </table>

      <div className="my-2">
        <button className="btn btn-danger" onClick={() => deleteAccount()}>
          <i className="fas fa-user-minus"></i>
          Delete My Account
        </button>
      </div>
    </div>
  );
}

Dashboard.propTypes = {
  getCurrentProfile: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
  profile: PropTypes.object.isRequired,
};

const mapStateToProps = (state, prevState) => ({
  auth: state.auth,
  profile: state.profile,
});

export default connect(mapStateToProps, { getCurrentProfile, deleteAccount })(
  Dashboard
);
