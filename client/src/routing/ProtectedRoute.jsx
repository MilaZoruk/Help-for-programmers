import { useSelector } from 'react-redux';
import { Outlet } from 'react-router-dom';

const ProtectedRoute = () => {
  const { userInfo } = useSelector((state) => state.user);

  if (!userInfo) {
    return (
      <div>
        <h1>404 Not Found :(</h1>
      </div>
    );
  }

  return <Outlet />;
};
export default ProtectedRoute;
