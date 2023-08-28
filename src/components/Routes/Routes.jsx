import React from 'react';
import { Routes, Route } from 'react-router-dom';

import { ROUTES } from '../../utils/routes';

import Home from '../Home/Home';
import Profile from '../Profile/Profile';
import SingleProduct from '../Products/SingleProduct';
import SingleCategory from '../Categories/SingleCategory';

const AppRoutes = () => {
  return (
    <Routes>
      <Route index element={<Home />}/>
      <Route path={ROUTES.PRODUCT} element={<SingleProduct />}></Route>
      <Route path={ROUTES.PROFILE} element={<Profile />}></Route>
      <Route path={ROUTES.CATEGORY} element={<SingleCategory />}></Route>
    </Routes>
  );
};

export default AppRoutes;