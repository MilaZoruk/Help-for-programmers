import { useEffect } from 'react';
import { useNavigate, Outlet } from 'react-router-dom';
import { useSelector } from 'react-redux';

const SuperuserRoute = () => {
  const navigate = useNavigate('/');
  const { userInfo } = useSelector((state) => state.user);

  useEffect(() => {
    if (!userInfo && userInfo?.role !== 'superuser') navigate('/');
  }, [userInfo, navigate]);

  return <Outlet />;
};
export default SuperuserRoute;
