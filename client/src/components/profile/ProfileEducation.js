import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import ProfileEducationItem from './ProfileEducationItem';

const ProfileEducation = ({ profile }) => {
  return (
    <div className="profile-edu bg-white p-2">
      <h2 className="text-primary">Education</h2>
      {profile.education.length > 0 ? (
        <Fragment>
          {profile.education.map((item, index) => (
            <ProfileEducationItem education={item} key={index} />
          ))}
        </Fragment>
      ) : (
        <h4>No education credentials</h4>
      )}
    </div>
  );
};

ProfileEducation.propTypes = {
  profile: PropTypes.object.isRequired,
};

export default ProfileEducation;
