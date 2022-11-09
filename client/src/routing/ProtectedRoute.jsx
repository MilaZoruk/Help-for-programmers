import { useSelector } from "react-redux";
import { Outlet } from "react-router-dom";

import NotFound from "../components/NotFound/NotFound";

const ProtectedRoute = () => {
  const { userInfo } = useSelector((state) => state.user);

  if (!userInfo) {
    return <NotFound />;
  }

  return <Outlet />;
};
export default ProtectedRoute;
