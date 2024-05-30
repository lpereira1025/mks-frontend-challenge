"use client";
import React, { useContext, useEffect } from 'react';
import Head from 'next/head';
import fetchProducts from '../api/fetchproducts';
import Header from '../components/Header/Header';
import Footer from '../components/Footer/Footer';
import Products from '../components/Products/Products';
import Loading from '../components/Loading/Loading';
import Provider from '../context/Provider'
import AppContext from '../context/AppContext'
import Cart from '../components/Cart/Cart'


const HomePage= () => {
  const {products, setProducts, loading, setLoading} = useContext(AppContext);

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
    <Provider>
      <Head>
        <title>MKS Sistemas</title>
        <meta name="description" content="MKS Company Code Challenge" />
      </Head>
      <main className='mainHomePage'>
          <Header />
          <div className='mainContainer'>
            <Products products={products} />
          </div>
          <Footer />
          <Cart/>
      </main>
    </Provider>
  );
}

export default HomePage;