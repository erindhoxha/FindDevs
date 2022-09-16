import React, { useEffect } from "react";
import PropTypes from "prop-types";
import { getCurrentProfile } from "../../actions/profile";
import { connect } from "react-redux";
import Spinner from "../layout/Spinner";
import { Link } from "react-router-dom";
import DashboardActions from "./DashboardActions";
import Alert from "../layout/Alert";

function Dashboard({ getCurrentProfile, auth, profile: { profile, loading } }) {
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
        <tbody>
          {profile &&
            profile.experience &&
            profile.experience.map((exp) => (
              <tr>
                <td>{exp.company}</td>
                <td className="hide-sm">{exp.title}</td>
                <td className="hide-sm">
                  {new Date(`${exp.from}`).toLocaleDateString("gb-en")} -{" "}
                  {exp.current ? "Current" : exp.to}
                </td>
                <td>
                  <button className="btn btn-danger">Delete</button>
                </td>
              </tr>
            ))}
        </tbody>
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
        <tbody>
          {profile &&
            profile.education &&
            profile.education.map((edu) => (
              <tr key={edu._id}>
                <td>{edu.school}</td>
                <td className="hide-sm">{edu.degree}</td>
                <td className="hide-sm">
                  {new Date(`${edu.from}`).toLocaleDateString("gb-en")} -{" "}
                  {edu.current
                    ? "Current"
                    : new Date(`${edu.to}`).toLocaleDateString("gb-en")}
                </td>
                <td>
                  <button className="btn btn-danger">Delete</button>
                </td>
              </tr>
            ))}
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
