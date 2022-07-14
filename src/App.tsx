import React from 'react';
import './App.css';
import { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from './store/hooks';
import { fetchPosts } from './store/posts/postsSlice';

import Content from './components/content/Content';

function App() {
  const {posts, loading, error} = useAppSelector((state)=>state.posts);
  const dispatch = useAppDispatch();
  
  useEffect(()=>{
      dispatch(fetchPosts())
  },[])

  return (
    <div className="App">
      <Content />
    </div>
  );
}

export default App;
