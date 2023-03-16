import React from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import Header from './Header';

const Layout = () => {
  const location = useLocation();

  const title = location.pathname === '/' ? 'City view' : location.pathname.substring(9);

  return (
    <>
      <Header title={title} />
      <Outlet />
    </>
  );
};

export default Layout;
