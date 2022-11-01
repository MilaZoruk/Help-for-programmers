import { Route, Routes } from 'react-router-dom';

import Register from './components/Auth/Register';
import Home from './components/Home/Home';

function App() {
  return (
    <Routes>
      <Route path="" element={<Home />} />
      <Route path="/register" element={<Register />} />
    </Routes>
  );
}

export default App;
