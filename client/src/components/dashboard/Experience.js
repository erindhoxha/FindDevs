import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { format } from "date-fns";
import { deleteExperience } from "../../actions/profile";

const Experience = ({ profile: { profile }, deleteExperience }) => {
  return (
    <tbody>
      {profile?.experience.map((exp) => (
        <tr key={exp._id}>
          <td>{exp.company}</td>
          <td className="hide-sm">{exp.title}</td>
          <td className="hide-sm">
            {format(new Date(exp.from), "MM/dd/yyyy")} -{" "}
            {exp.current ? "Current" : format(new Date(exp.to), "MM/dd/yyyy")}
          </td>
          <td>
            <button
              onClick={() => deleteExperience(exp._id)}
              className="btn btn-danger"
            >
              Delete
            </button>
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

export default connect(mapStateToProps, { deleteExperience })(Experience);
