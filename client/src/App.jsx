import { React, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Route, Routes } from 'react-router-dom';

import Categories from './components/Categories/Categories';
import Category from './components/Category/Category';
import AddArticle from './components/Category/AddArticle';
import { getUserDetails } from './features/User/userActions';

import ProtectedRoute from './routing/ProtectedRoute';
import SuperuserRoute from './routing/SuperuserRoute';
import ArticlesRoute from './routing/ArticlesRoute';
import Navbar from './components/UI/Navbar/Navbar';
import Footer from './components/UI/Footer/Footer';
import Register from './components/Auth/Register';
import Login from './components/Auth/Login';
import Home from './components/Home/Home';
import Profile from './components/Profile/Profile';
import ProfileSettings from './components/Profile/ProfileSettings';
import AdminDashboard from './components/Admin/AdminDashboard';
import Room from './components/Room/Room';
import BackRoom from './components/BackRoom/BackRoom';

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
        <Route path="/categories" element={<Categories />} />
        <Route path="/categories/:id" element={<Category />} />
        <Route element={<ArticlesRoute />}>
          <Route path="/addarticle" element={<AddArticle />} />
        </Route>
        <Route path="/relaxroom" element={<Room />} />
        <Route path="" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/backroom" element={<BackRoom />} />
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
