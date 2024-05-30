"use client";
import Head from 'next/head';
import HomePage from './homePage';
import Provider from '../context/Provider'


export default function Home() {

  return (
    <Provider>
      <Head>
        <title>MKS Sistemas</title>
        <meta name="description" content="MKS Company Code Challenge" />
      </Head>
      <main>
        <HomePage />
      </main>
    </Provider>
  );
}