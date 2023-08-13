import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import Poster from '../Poster/Poster';
import Products from '../Products/Products';
import Categories from '../Categories/Categories';
import Banner from '../Banner/Banner';

import { filterByPrice } from '../../features/products/productsSlice';

const Home = () => {
  const defaultLEssPrice = 200;
  const {products: { list, filtered }, categories} = useSelector((state) => state);
  const dispatch = useDispatch();

  useEffect(() => {
    if(!list.length) return;

    dispatch(filterByPrice(defaultLEssPrice))
  }, [dispatch, list.length])
  return (
    <>
      <Poster />
      <Products products={list} amount={5} title="Tranding"/>
      <Categories categories={categories.list} amount={5} title="Worth seeing"/>
      <Banner />
      <Products products={filtered} amount={5} title={`Less then ${defaultLEssPrice}`}/>
    </>
  );
};

export default Home;