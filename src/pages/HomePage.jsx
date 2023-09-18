import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import Home from '../components/Home/Home';

const HomePage = () => {
  return (
    <>
      <Home />
      <Suspense fallback={null}>
        <Outlet />
      </Suspense>
    </>
  );
};

export default HomePage;
