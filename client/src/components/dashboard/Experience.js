import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";

const Experience = ({ profile: { profile } }) => {
  return (
    <tbody>
      {profile?.experience.map((exp) => (
        <tr key={exp._id}>
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
  );
};

Experience.propTypes = {
  profile: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  profile: state.profile,
});

export default connect(mapStateToProps, {})(Experience);
