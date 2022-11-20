import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import Moment from 'react-moment';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';
import { addLike, deletePost, removeLike } from '../../actions/post';

const PostItem = ({ auth, post, addLike, removeLike, deletePost }) => {
  console.log(auth);
  console.log(post);
  return (
    <Fragment>
      <div className="post bg-white p-1 my-1">
        <div>
          <NavLink to={`/profile/${post.user}`}>
            <img className="round-img" src={post.avatar} alt="" />
            <h4>{post.name}</h4>
          </NavLink>
        </div>
        <div>
          <p className="my-1">{post.text}</p>
          <p className="post-date">
            Posted on <Moment format="YYYY/MM/DD">{post.date}</Moment>
          </p>
          <button
            onClick={() => addLike(post?._id)}
            type="button"
            className="btn btn-light"
          >
            <i className="fas fa-thumbs-up"></i>
            <span> {post.likes.length > 0 && post.likes.length}</span>
          </button>
          <button
            onClick={() => removeLike(post?._id)}
            type="button"
            className="btn btn-light"
          >
            <i className="fas fa-thumbs-down"></i>
          </button>
          {post.comments.length > 0 && (
            <NavLink to={`/post/${post._id}`} className="btn btn-primary">
              Discussion{' '}
              <span className="comment-count">{post.comments.length}</span>
            </NavLink>
          )}
          {!auth.loading && auth?.user?._id === post.user && (
            <button
              onClick={() => deletePost(post?._id)}
              type="button"
              className="btn btn-danger"
            >
              <i className="fas fa-times"></i>
            </button>
          )}
        </div>
      </div>
    </Fragment>
  );
};

PostItem.propTypes = {
  auth: PropTypes.object.isRequired,
  post: PropTypes.object.isRequired,
  addLike: PropTypes.func.isRequired,
  removeLike: PropTypes.func.isRequired,
  deletePost: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  auth: state.auth,
});

export default connect(mapStateToProps, { addLike, removeLike, deletePost })(
  PostItem
);
