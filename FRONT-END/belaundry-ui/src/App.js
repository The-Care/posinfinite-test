import React from 'react';
import { Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import DetailProductPage from './pages/DetailProductPage';
import DetailInvoicePage from './pages/DetailInvoicePage';
import AddProductPage from './pages/AddProductPage';
import Loading from './components/Loading';

function App() {
  return (
    <>
      <Loading />
      <Routes>
        <Route path="/*" element={<HomePage />} />
        <Route path="/product/detail/:id" element={<DetailProductPage />} />
        <Route path="/product/invoice" element={<DetailInvoicePage />} />
        <Route path="/product/add" element={<AddProductPage />} />
      </Routes>
    </>
  );
}

export default App;
