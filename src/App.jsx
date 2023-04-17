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
