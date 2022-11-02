import { React, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Route, Routes } from 'react-router-dom';

import Articles from './components/Articles/Articles';
import Article from './components/Article/Article';
import { getUserDetails } from './features/User/userActions';

import ProtectedRoute from './routing/ProtectedRoute';
import SuperuserRoute from './routing/SuperuserRoute';
import Navbar from './components/UI/Navbar/Navbar';
import Footer from './components/UI/Footer/Footer';
import Register from './components/Auth/Register';
import Login from './components/Auth/Login';
import Home from './components/Home/Home';
import Profile from './components/Profile/Profile';
import ProfileSettings from './components/Profile/ProfileSettings';
import AdminDashboard from './components/Admin/AdminDashboard';
import Room from './components/Room/Room';
import ResetPassword from './components/Profile/ResetPassword';

function App() {
  const dispatch = useDispatch();
  const { userInfo, success } = useSelector((state) => state.user);

  useEffect(() => {
    if (!userInfo) dispatch(getUserDetails());
  }, [userInfo, dispatch]);

  const appContent = (
    <section className="h-full flex flex-col justify-between items-center">
      <Navbar />
      <Routes>
        <Route path="/articles" element={<Articles />} />
        <Route path="/article" element={<Article />} />
        <Route path="/relaxroom" element={<Room />} />
        <Route path="" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route element={<ProtectedRoute />}>
          <Route path="/profile-settings" element={<ProfileSettings />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/password-reset" element={<ResetPassword />} />
        </Route>
        <Route element={<SuperuserRoute />}>
          <Route path="/admin-dashboard" element={<AdminDashboard />} />
        </Route>
      </Routes>
      <Footer />
    </section>
  );

  return success && appContent;
}

export default App;
