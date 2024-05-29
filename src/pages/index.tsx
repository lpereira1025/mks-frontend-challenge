"use client";
import React, { useState, useEffect } from 'react';
import Head from 'next/head';
import fetchProducts from '../api/fetchProducts';
import Header from '../components/Header/Header';
import Footer from '../components/Footer/Footer';
import Products from '../components/Products/Products';
import Loading from '../components/Loading/Loading';


export default function Home() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getProducts = async () => {
      try {
        const products = await fetchProducts();
        setProducts(products);
      } catch (error) {
        console.error('Error fetching products:', error);
      } finally {
        setLoading(false);
      }
    };

    getProducts();
  }, []);

  if (loading) {
    return <Loading/>;
  }

  return (
    <div>
      <Head>
        <title>MKS Sistemas</title>
        <meta name="description" content="MKS Company Code Challenge" />
      </Head>
      <main>
        <Header />
        <Products products={products} />
        <Footer />
      </main>
    </div>
  );
}