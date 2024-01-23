import React, { useState } from 'react';

const PostForm = ({postsLength, returnPostToParent, ...props}) => {
  const [newPost, setNewPost] = useState({ id: postsLength + 1, title: '', likes: 0, dislikes: 0 });

  
  const addNewPost = (event) => {
    returnPostToParent(newPost);
    setNewPost({ ...newPost, id: postsLength + 2, title: ''});
  };

  return (
    <div>
        <input type="text" placeholder="title" value={newPost.title} onChange={event => setNewPost({...newPost, title: event.target.value})}/>
        <button type="submit" onClick={addNewPost}>add new post</button>
    </div>
  );
}

export default PostForm;
