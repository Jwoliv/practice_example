import React from 'react';
import Counter from './component/Counter';
import InputField from './component/InputField';
import PostsList from './component/PostsList';
import './styles/App.css';

function App() {
  let posts = [
    {title: 'example of the first post 1', likes: 24, dislikes: 0},
    {title: 'example of the first post 2', likes: 54, dislikes: 9},
    {title: 'example of the first post 3', likes: 12, dislikes: 1},
    {title: 'example of the first post 4', likes: 24, dislikes: 112},
    {title: 'example of the first post 5', likes: 234, dislikes: 2}
  ]

  return (
    <div>
      <h1>Example of the test</h1>
      <Counter/>
      <InputField/>
      <PostsList posts={posts}/>
    </div>
  );
}

export default App;
