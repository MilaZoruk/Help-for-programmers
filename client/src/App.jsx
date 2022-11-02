import { React, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Route, Routes } from 'react-router-dom';

import Categories from './components/Categories/Categories';
import Category from './components/Category/Category';
import { getUserDetails } from './features/User/userActions';

import ProtectedRoute from './routing/ProtectedRoute';
import Navbar from './components/UI/Navbar/Navbar';
import Footer from './components/UI/Footer/Footer';
import Register from './components/Auth/Register';
import Login from './components/Auth/Login';
import Home from './components/Home/Home';
import Profile from './components/Profile/Profile';
import ProfileSettings from './components/Profile/ProfileSettings';
import Room from './components/Room/Room';

function App() {
  const dispatch = useDispatch();
  const { userInfo } = useSelector((state) => state.user);

  useEffect(() => {
    if (!userInfo) dispatch(getUserDetails());
  }, [userInfo, dispatch]);

  return (
    <section className="h-full flex flex-col justify-between items-center">
      <Navbar />
      <Routes>
        <Route path="/categories" element={<Categories />} />
        <Route path="/categories/:id" element={<Category />} />
        <Route path="/relaxroom" element={<Room />} />
        <Route path="" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route element={<ProtectedRoute />}>
          <Route path="/profile-settings" element={<ProfileSettings />} />
          <Route path="/profile" element={<Profile />} />
        </Route>
      </Routes>
      <Footer />
    </section>
  );
}

export default App;
