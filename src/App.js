import React, { useState } from 'react';
import Counter from './component/Counter';
import InputField from './component/InputField';
import PostsList from './component/PostsList';
import './styles/App.css';

function App() {
  const [posts, setPosts] = useState([
    {id: 1, title: 'example of the first post 1', likes: 24, dislikes: 0},
    {id: 2, title: 'example of the first post 2', likes: 54, dislikes: 9},
    {id: 3, title: 'example of the first post 3', likes: 12, dislikes: 1},
    {id: 4, title: 'example of the first post 4', likes: 24, dislikes: 112},
    {id: 5, title: 'example of the first post 5', likes: 234, dislikes: 2}
  ]);
  
  const [newPost, setNewPost] = useState({ id: posts.length + 1, title: '', likes: 0, dislikes: 0 });

  const addNewPost = (event) => {
    setPosts([...posts, newPost]);
    setNewPost({ ...newPost, id: posts.length + 2, title: ''});
  };

  return (
    <div>
      <h1>Example of the test</h1>
      <Counter/>
      <InputField/>
      <input type="text" placeholder="title" value={newPost.title} onChange={event => setNewPost({...newPost, title: event.target.value})}/>
      <button type="submit" onClick={addNewPost}>add new post</button>
      <PostsList posts={posts} titleList={"example of the list title"}/>
    </div>
  );
}

export default App;
