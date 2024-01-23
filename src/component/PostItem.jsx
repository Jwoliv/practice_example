import React from 'react';

const PostItem = (props) => {
  return (
    <div>
      <h2>Title: {props.post.title}</h2>
      <ul>
        <li>Likes: {props.post.likes}</li>
        <li>Dislikes: {props.post.dislikes}</li>
      </ul>
    </div>
  );
}

export default PostItem;
