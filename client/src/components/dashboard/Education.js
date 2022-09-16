import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { format, formatDistance, subDays } from "date-fns";
import { deleteEducation } from "../../actions/profile";

const Education = ({ profile: { profile }, deleteEducation }) => {
  return (
    <tbody>
      {profile?.education.map((edu) => (
        <tr key={edu._id}>
          <td>{edu.school}</td>
          <td className="hide-sm">{edu.degree}</td>
          <td className="hide-sm">
            {format(new Date(edu.from), "MM/dd/yyyy")} -{" "}
            {edu.current ? "Current" : format(new Date(edu.to), "MM/dd/yyyy")}
          </td>
          <td>
            <button
              onClick={() => deleteEducation(edu._id)}
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

Education.propTypes = {
  profile: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  profile: state.profile,
});

export default connect(mapStateToProps, { deleteEducation })(Education);
