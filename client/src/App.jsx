import { React, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Route, Routes } from "react-router-dom";
import { ReactNotifications } from "react-notifications-component";
import "react-notifications-component/dist/theme.css";

import Categories from "./components/Articles/Categories/Categories";
import Category from "./components/Articles/Category/Category";
import { getUserDetails } from "./features/User/userActions";
import ProtectedRoute from "./routing/ProtectedRoute";
import SuperuserRoute from "./routing/SuperuserRoute";
import Navbar from "./components/UI/Navbar/Navbar";
import Footer from "./components/UI/Footer/Footer";
import Home from "./components/Home/Home";
import Profile from "./components/Profile/Profile";
import ProfileSettings from "./components/Profile/ProfileSettings";
import AdminDashboard from "./components/Admin/AdminDashboard";
import Room from "./components/RelaxRoom/Room/Room";
import ResetPassword from "./components/Profile/ResetPassword";
import RoomChicago from "./components/RelaxRoom/RoomChicago/RoomChicago";
import RoomClevelend from "./components/RelaxRoom/RoomClevelend/RoomClevelend";
import LondonGalery from "./components/RelaxRoom/VRLondonGalery/LondonGalery";
import RussianGalery from "./components/RelaxRoom/VRRussianMuseum/RussianGallery";
import NotFound from "./components/NotFound/NotFound";

function App() {
  const dispatch = useDispatch();
  const { userInfo, success } = useSelector((state) => state.user);

  useEffect(() => {
    if (!userInfo) dispatch(getUserDetails());
  }, [userInfo, dispatch]);

  const appContent = (
    <section className="h-full flex flex-col justify-between items-center">
      <ReactNotifications />
      <Navbar />
      <Routes>
        <Route path="" element={<Home />} />
        <Route path="/categories" element={<Categories />} />
        <Route path="/categories/:id" element={<Category />} />
        <Route path="/relaxroom" element={<Room />} />
        <Route path="/chicagoartmuseum" element={<RoomChicago />} />
        <Route path="/clevelendartmuseum" element={<RoomClevelend />} />
        <Route path="/russianmuseum" element={<RussianGalery />} />
        <Route path="/londongallery" element={<LondonGalery />} />
        <Route element={<ProtectedRoute />}>
          <Route path="/profile-settings" element={<ProfileSettings />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/password-reset" element={<ResetPassword />} />
        </Route>
        <Route element={<SuperuserRoute />}>
          <Route path="/admin-dashboard" element={<AdminDashboard />} />
        </Route>
        
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </section>
  );

  return success && appContent;
}

export default App;
