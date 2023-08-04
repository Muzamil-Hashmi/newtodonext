'use client'
import React from 'react'
import HomePage from '../components/Home/Home'
import Edit from '@/components/Edit';
import { Provider } from 'react-redux';
import store from '@/store/store';

const Home = () => {
  return (
    <>
      <Provider store={store}>
        <HomePage />
      </Provider>
    </>
  )
}

export default Home