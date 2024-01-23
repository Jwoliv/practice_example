import React from 'react';
import PostItem from './PostItem';

const PostsList = (props) => {
  return (
    <div>
      <hr></hr>
      <div>
        {props.posts.map(post => <PostItem post={post} />)}
      </div>
    </div>
  );
}

export default PostsList;
