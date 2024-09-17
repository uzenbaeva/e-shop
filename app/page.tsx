'use client';
import Header from '@/components/Header';
import React, { useEffect, useState } from 'react';
import Footer from '@/components/Footer/footer';
import Discounts from '@/components/Discounts/discounts';
import Countdown from '@/components/FlashSales/index';
import ProductCard from '@/components/AllProducts/productCard';
const Home: React.FC = () => {
  return (
    <>
      <Header />
      <Discounts />
      <Countdown />
      <ProductCard />
      <Footer />
    </>
  );
};

export default Home;
