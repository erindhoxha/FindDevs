import React from 'react';
import PropTypes from 'prop-types';
import Moment from 'react-moment';

const ProfileEducationItem = ({ education }) => {
  return (
    <div>
      <h3 className="text-dark">{education.school && education.school}</h3>
      <p>
        {education.from ? (
          <Moment format="YYYY/MM/DD">{education.from}</Moment>
        ) : (
          ''
        )}{' '}
        - {education.current && 'Current'}
        {education.to && <Moment format="YYYY/MM/DD">{education.to}</Moment>}
      </p>
      <p>
        <strong>Degree: </strong>
        {education.degree ?? education.degree}
      </p>
      <p>
        <strong>Field of Study: </strong>
        {education.fieldofstudy ?? education.fieldofstudy}
      </p>
      <p>
        <strong>Description: </strong>
        {education.description ?? education.description}
      </p>
    </div>
  );
};

ProfileEducationItem.propTypes = {
  education: PropTypes.object.isRequired,
};

export default ProfileEducationItem;
