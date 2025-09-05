import React from 'react';
import { Route, Routes } from 'react-router';

import { ListProducts } from '../pages/ListProducts';

export const AppRouter = () => {
  return (
    <>
        <Routes>
          <Route path='/' element={<ListProducts />} />
        </Routes>
    </>
  )
}
