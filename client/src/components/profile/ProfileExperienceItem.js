import React from 'react';
import PropTypes from 'prop-types';
import Moment from 'react-moment';

const ProfileExperienceItem = ({ experience }) => {
  return (
    <div>
      <h3 className="text-dark">{experience.company && experience.company}</h3>
      <p>
        {experience.from ? (
          <Moment format="YYYY/MM/DD">{experience.from}</Moment>
        ) : (
          ''
        )}{' '}
        - {experience.current && 'Current'}
        {experience.to && <Moment format="YYYY/MM/DD">{experience.to}</Moment>}
      </p>
      <p>
        <strong>Position: </strong>
        {experience.title}
      </p>
      <p>
        <strong>Description: </strong>
        {experience.description}
      </p>
    </div>
  );
};

ProfileExperienceItem.propTypes = {
  experience: PropTypes.object.isRequired,
};

export default ProfileExperienceItem;
