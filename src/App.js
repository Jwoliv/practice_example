import React, { useState } from 'react';
import Counter from './component/Counter';
import InputField from './component/InputField';
import PostsList from './component/PostsList';
import PostForm from './component/PostForm';
import './styles/App.css';

function App() {
  const [posts, setPosts] = useState([
    {id: 1, title: 'example of the first post 1', likes: 24, dislikes: 0},
    {id: 2, title: 'example of the first post 2', likes: 54, dislikes: 9},
    {id: 3, title: 'example of the first post 3', likes: 12, dislikes: 1},
    {id: 4, title: 'example of the first post 4', likes: 24, dislikes: 112},
    {id: 5, title: 'example of the first post 5', likes: 234, dislikes: 2}
  ]);

  const removePostFromListById = (id) => {
    const updatedPosts = posts.filter(post => post.id !== id);
    setPosts(updatedPosts);
  }

  const createNewPost = (newPost) => {
    setPosts([...posts, newPost]);
  }

  return (
    <div>
      <h1>Example of the test</h1>
      <Counter/>
      <InputField/>
      <PostsList posts={posts} deleteById={removePostFromListById} createNewPost={createNewPost} titleList={"example of the list title"}/>
    </div>
  );
}

export default App;
