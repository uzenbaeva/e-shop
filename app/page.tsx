'use client';
import { Product } from '../types/common';
import Header from '@/components/Header';
import Image from 'next/image';
import React, { useEffect, useState } from 'react';
import { productsAPI } from '@/lib/product';
import { formatCurrency } from '@/utils/formatCurrency';
import Footer from '@/components/Footer/footer';
import Discounts from '@/components/Discounts/discounts';
import Countdown from '@/components/FlashSales/index';
const Home: React.FC = () => {
  return (
    <>
      <Header />
      <Discounts />
      <Countdown />
      <Footer />
    </>
  );
};

export default Home;
