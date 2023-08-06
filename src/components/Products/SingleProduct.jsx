import React, { useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import Products from './Products';
import Product from './Product';
import { useGetProductQuery } from '../../features/api/apiSlice';
import { getRelatedProducts } from '../../features/products/productsSlice';
import { ROUTES } from '../../utils/routes'

const SingleProduct = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const {list, related} = useSelector(({products}) => products);

  const { data, isLoading, isFetching, isSuccess } = useGetProductQuery({ id });

  useEffect(() => {
    if(!isLoading && !isFetching && !isSuccess) {
      navigate(ROUTES.HOME)
    }
  },[isLoading, isFetching, isSuccess, navigate])

  useEffect(() => {
    if (!data || !list.length) return;

    dispatch(getRelatedProducts(data.category.id));
  },[data, list.length, dispatch])

  return !data
    ? (<section className="preloader">Loading...</section>)
    : (
      <>
        <Product {...data} />
        <Products products={related} amount={5} title="Related products"></Products>
      </>
    );
};

export default SingleProduct;