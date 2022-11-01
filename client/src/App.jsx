import { Route, Routes } from 'react-router-dom';
import React from 'react';

import Articles from './components/Articles/Articles';
import Article from './components/Article/Article';
import Register from './components/Auth/Register';
import Home from './components/Home/Home';

function App() {
  return (
    <Routes>
      <Route path="" element={<Home />} />
      <Route path="/register" element={<Register />} />
      <Route path="/articles" element={<Articles />} />
      <Route path="/article" element={<Article />} />
    </Routes>
  );
}

export default App;
