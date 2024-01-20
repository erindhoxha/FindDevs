import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import ProfileExperienceItem from './ProfileExperienceItem';

const ProfileExperience = ({ profile }) => {
  return (
    <div className="profile-exp bg-white p-2">
      <h2 className="text-primary">Experience</h2>
      {profile.experience.length > 0 ? (
        <Fragment>
          {profile.experience.map((item, index) => (
            <ProfileExperienceItem experience={item} key={index} />
          ))}
        </Fragment>
      ) : (
        <h4>No experience credentials</h4>
      )}
    </div>
  );
};

ProfileExperience.propTypes = {
  profile: PropTypes.object.isRequired,
};

export default ProfileExperience;
