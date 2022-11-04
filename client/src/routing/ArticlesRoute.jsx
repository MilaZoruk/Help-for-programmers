import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import AddArticle from '../components/Category/AddArticle';

const ArticlesRoute = () => {
  const navigate = useNavigate('/');
  const { userInfo } = useSelector((state) => state.user);

  useEffect(() => {
    if (
      !userInfo &&
      (userInfo?.role !== 'admin' || userInfo?.role !== 'superuser')
    )
      navigate('/');
  }, [userInfo, navigate]);

  return <AddArticle />;
};

export default ArticlesRoute;
