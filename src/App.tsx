import './App.css';
import { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from './store/hooks';
import { fetchPosts } from './store/posts/postsSlice';

import Content from './components/content/Content';
import Nav from './components/nav/Nav';
import Sidebar from './components/sidebar/Sidebar';
import Login from './components/login/Login';

function App() {
  const {login} = useAppSelector(state => state.user);
  const dispatch = useAppDispatch();
  
  useEffect(()=>{
    if (login) {
      dispatch(fetchPosts())
    }
  },[login])


  if (!login) {
    return (
      <div id='Login'>
        <Login />
      </div>
    )
  }

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
