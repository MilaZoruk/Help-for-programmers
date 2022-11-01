import { Route, Routes } from 'react-router-dom';

import Articles from './components/Articles/Articles';
import Register from './components/Auth/Register';
import Home from './components/Home/Home';

function App() {
  return (
    <Routes>
      <Route path="" element={<Home />} />
      <Route path="/register" element={<Register />} />
      <Route path="/articles" element={<Articles />} />
    </Routes>
  );
}

export default App;
