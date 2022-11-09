import { Outlet } from "react-router-dom";
import { useSelector } from "react-redux";
import NotFound from "../components/NotFound/NotFound";

const SuperuserRoute = () => {
  const { userInfo } = useSelector((state) => state.user);

  if (!userInfo || userInfo?.role !== "superuser") {
    return <NotFound />;
  }

  return <Outlet />;
};

export default SuperuserRoute;
