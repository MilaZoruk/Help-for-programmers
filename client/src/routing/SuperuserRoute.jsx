import { useEffect } from 'react';
import { useNavigate, Outlet } from 'react-router-dom';
import { useSelector } from 'react-redux';

const SuperuserRoute = () => {
  const navigate = useNavigate('/');
  const { userInfo } = useSelector((state) => state.user);

  useEffect(() => {
    if (userInfo.role !== 'superuser') navigate('/');
  }, [userInfo.role, navigate]);

  if (!userInfo && userInfo.role !== 'superuser') {
    return (
      <div>
        <h1>404 Not Found :(</h1>
      </div>
    );
  }

  return <Outlet />;
};
export default SuperuserRoute;
