import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom';
import Moment from 'react-moment';
import { deleteComment } from '../../actions/post';

const CommentItem = ({ postId, comment, auth, deleteComment }) => {
  return (
    <div className="post bg-white p-1 my-1">
      <div>
        <NavLink to={`/profile/${comment.user}`}>
          <img className="round-img" src={comment.avatar} alt="" />
          <h4>{comment.name}</h4>
        </NavLink>
      </div>
      <div>
        <p className="my-1">{comment.text}</p>
        <p className="post-date">
          Posted on <Moment format="YYYY/MM/DD">{comment.date}</Moment>
        </p>
        {!auth.loading && comment.user === auth?.user?._id && (
          <button
            onClick={(e) => deleteComment(postId, comment._id)}
            type="button"
            className="btn btn-danger"
          >
            <i className="fas fa-times"></i>
          </button>
        )}
      </div>
    </div>
  );
};

CommentItem.propTypes = {
  postId: PropTypes.number.isRequired,
  comment: PropTypes.object.isRequired,
  auth: PropTypes.object.isRequired,
  deleteComment: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  auth: state.auth,
});

export default connect(mapStateToProps, { deleteComment })(CommentItem);
