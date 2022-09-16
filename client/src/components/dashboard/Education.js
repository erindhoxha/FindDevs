import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";

const Education = ({ profile: { profile } }) => {
  return (
    <tbody>
      {profile?.education.map((edu) => (
        <tr key={edu._id}>
          <td>{edu.school}</td>
          <td className="hide-sm">{edu.degree}</td>
          <td className="hide-sm">
            {new Date(`${edu.from}`).toLocaleDateString("gb-en")} -{" "}
            {edu.current ? "Current" : edu.to}
          </td>
          <td>
            <button className="btn btn-danger">Delete</button>
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

export default connect(mapStateToProps, {})(Education);
