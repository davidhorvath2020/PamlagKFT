import { useState } from 'react';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import Layout from './compontents/Layout';
import Home from './pages/Home';

import Kutyaknak from './pages/Kutyáknak/Kutyáknak';
import Harness from './pages/Kutyáknak/Harness';
import Collar from './pages/Kutyáknak/Collar';
import Leash from './pages/Kutyáknak/Leash';
import ProductsDetails from './pages/Kutyáknak/ProductsDetails';
import './App.css';


import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyCMolGIXGzVkpW5iA11h4ChjyEOIJQBg7w",
  authDomain: "pamlag-kft.firebaseapp.com",
  projectId: "pamlag-kft",
  storageBucket: "pamlag-kft.appspot.com",
  messagingSenderId: "644802287406",
  appId: "1:644802287406:web:e1ed7f6fae61f1abfeccbf"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Layout />} >
          <Route index element={<Home />} />
          <Route path='/Kutyáknak' element={<Kutyaknak />} />

          <Route path='Kutyáknak/Hámok' element={<Harness />} />
          <Route path='Kutyáknak/Hámok/:id' element={<ProductsDetails />} />

          <Route path='Kutyáknak/Nyakörvek' element={<Collar />} />
          <Route path='Kutyáknak/Nyakörvek/:id' element={<ProductsDetails />} />

          <Route path='Kutyáknak/Pórázok' element={<Leash />} />
          <Route path='Kutyáknak/Pórázok/:id' element={<ProductsDetails />} />


          <Route path='/Macskáknak' element={<h1>Soon..</h1>} />

        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App;
