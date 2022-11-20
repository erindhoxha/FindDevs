import React, { Fragment, useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Spinner from '../layout/Spinner';
import { getPost } from '../../actions/post';
import { NavLink, useParams } from 'react-router-dom';
import PostItem from '../posts/PostItem';
import Alert from '../layout/Alert';
import CommentForm from './CommentForm';
import CommentItem from './CommentItem';
import setAuthToken from '../../utils/setAuthToken';
import store from '../../store';
import { loadUser } from '../../actions/auth';
import { LOGOUT } from '../../actions/types';

const Post = ({ getPost, deleteComment, post: { post, loading } }) => {
  const { id } = useParams();
  useEffect(() => {
    if (localStorage.token) {
      setAuthToken(localStorage.token);
    }
    store.dispatch(loadUser());
    window.addEventListener('storage', () => {
      if (!localStorage.token) store.dispatch({ type: LOGOUT });
    });
    getPost(id);
  }, [getPost, id]);
  return loading || post === null ? (
    <Spinner />
  ) : (
    <Fragment>
      <Alert />
      <NavLink to="/posts" className="btn">
        Back to posts
      </NavLink>
      <PostItem post={post} showActions={false} />
      <CommentForm postId={post._id} />
      <div className="comments">
        {post?.comments?.length > 0
          ? post.comments.map((comment, index) => (
              <CommentItem
                key={comment._id}
                comment={comment}
                postId={post._id}
              />
            ))
          : ''}
      </div>
    </Fragment>
  );
};

Post.propTypes = {
  getPost: PropTypes.func.isRequired,
  post: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  post: state.post,
});

export default connect(mapStateToProps, { getPost })(Post);
