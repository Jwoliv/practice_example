import React from 'react';
import PostItem from './PostItem';

const PostsList = ({posts, titleList, ...props}) => {
  return (
    <div>
      <h1>{titleList}</h1>
      <hr></hr>
      <div>
        {posts.map(post => <PostItem post={post} key={post.id}/>)}
      </div>
    </div>
  );
}

export default PostsList;
