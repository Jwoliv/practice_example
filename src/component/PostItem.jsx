import React, { useState } from 'react';

const PostItem = ({post, ...props}) => {
  return (
    <div>
      <h2>Id: {post.id}</h2>
      <h2>Title: {post.title}</h2>
      <ul>
        <li>Likes: {post.likes}</li>
        <li>Dislikes: {post.dislikes}</li>
      </ul>
    </div>
  );
}

export default PostItem;
