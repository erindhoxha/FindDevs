import React, { useEffect } from "react";
import PropTypes from "prop-types";
import { getCurrentProfile } from "../../actions/profile";
import { connect } from "react-redux";
import Spinner from "../layout/Spinner";
import { Link } from "react-router-dom";

function Dashboard({ getCurrentProfile, auth, profile: { profile, loading } }) {
  useEffect(() => {
    getCurrentProfile();
  }, [getCurrentProfile]);

  return (
    <div>
      {loading && profile === null ? <Spinner /> : <></>}
      <h1 className="large text-primary">Dashboard</h1>
      <p className="lead">
        <i className="fas fa-user"></i> Welcome {auth.user && auth.user.name}
      </p>

      {profile != null && loading == false ? (
        <></>
      ) : (
        <>
          You have not set up a profile. Please add some info.{" "}
          <Link to="/create-profile" className="btn btn-primary my-1">
            Create profile
          </Link>
        </>
      )}
      <div className="dash-buttons">
        <a href="edit-profile.html" className="btn btn-light">
          <i className="fas fa-user-circle text-primary"></i> Edit Profile
        </a>
        <a href="add-experience.html" className="btn btn-light">
          <i className="fab fa-black-tie text-primary"></i> Add Experience
        </a>
        <a href="add-education.html" className="btn btn-light">
          <i className="fas fa-graduation-cap text-primary"></i> Add Education
        </a>
      </div>

      <h2 className="my-2">Experience Credentials</h2>
      <table className="table">
        <thead>
          <tr>
            <th>Company</th>
            <th className="hide-sm">Title</th>
            <th className="hide-sm">Years</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>{profile && profile.company}</td>
            <td className="hide-sm">{profile && profile.status}</td>
            <td className="hide-sm">02-03-2009 - 01-02-2014</td>
            <td>
              <button className="btn btn-danger">Delete</button>
            </td>
          </tr>
          <tr>
            <td>Traversy Media</td>
            <td className="hide-sm">Instructor & Developer</td>
            <td className="hide-sm">02-03-2015 - Now</td>
            <td>
              <button className="btn btn-danger">Delete</button>
            </td>
          </tr>
        </tbody>
      </table>

      <h2 className="my-2">Education Credentials</h2>
      <table className="table">
        <thead>
          <tr>
            <th>School</th>
            <th className="hide-sm">Degree</th>
            <th className="hide-sm">Years</th>
            <th />
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Northern Essex</td>
            <td className="hide-sm">Associates</td>
            <td className="hide-sm">02-03-2007 - 01-02-2009</td>
            <td>
              <button className="btn btn-danger">Delete</button>
            </td>
          </tr>
        </tbody>
      </table>

      <div className="my-2">
        <button className="btn btn-danger">
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

export default connect(mapStateToProps, { getCurrentProfile })(Dashboard);
