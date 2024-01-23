import React, { useState } from 'react';
import PostItem from './PostItem';
import PostForm from './PostForm';

const PostsList = ({posts, deleteById, createNewPost, titleList, ...props}) => {

  return (
    <div>
      <PostForm addNewPostToList={createNewPost} postsLength={posts.length}/>
      <h1>{titleList}</h1>
      <hr></hr>
      <div>
        {posts.map(post => <PostItem post={post} deleteById={deleteById} key={post.id}/>)}
      </div>
    </div>
  );
}

export default PostsList;
