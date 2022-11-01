import { Route, Routes } from 'react-router-dom';

import Register from './components/Auth/Register';
import Home from './components/Home/Home';
import Room from './components/Room/Room';

function App() {
  return (
    <Routes>
      <Route path="" element={<Home />} />
      <Route path="/register" element={<Register />} />
      <Route path="/relaxroom" element={<Room />} />
    </Routes>
  );
}

export default App;
