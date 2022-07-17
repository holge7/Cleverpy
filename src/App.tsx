import React from 'react';
import './App.css';
import { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from './store/hooks';
import { fetchPosts } from './store/posts/postsSlice';

import Content from './components/content/Content';
import Nav from './components/nav/Nav';
import Sidebar from './components/sidebar/Sidebar';

function App() {
  const {posts, loading, error} = useAppSelector((state)=>state.posts);
  const dispatch = useAppDispatch();
  
  useEffect(()=>{
      dispatch(fetchPosts())
  },[])

  return (
    <div className="App">
      <nav id='Nav'>
        <Nav />
      </nav>
      <aside id='Sidebar'>
        <Sidebar />
      </aside>
      <section id='Section'>
        <Content />
      </section>
    </div>
  );
}

export default App;
