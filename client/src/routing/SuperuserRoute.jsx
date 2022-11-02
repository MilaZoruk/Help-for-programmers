import { useSelector } from 'react-redux';
import { Outlet } from 'react-router-dom';

const SuperuserRoute = () => {
  const { userInfo } = useSelector((state) => state.user);

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
