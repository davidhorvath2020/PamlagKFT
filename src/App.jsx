import { useState } from 'react';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import Layout from './compontents/Layout';
import Home from './pages/Home';

import Kutyaknak from './pages/Kutyáknak/Kutyáknak';
import Harness from './pages/Kutyáknak/Hámok';
import HamokDetails from './pages/Kutyáknak/HámokDetails';
import Collar from './pages/Kutyáknak/Nyakörvek';
import Leash from './pages/Kutyáknak/Pórázok';
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Layout />} >
          <Route index element={<Home />} />

          <Route path='/Kutyáknak' element={<Kutyaknak />} />
          <Route path='Kutyáknak/Hámok' element={<Harness />} />
          <Route path='Kutyáknak/Hámok/:id' element={<HamokDetails/>} />

          <Route path='Kutyáknak/Nyakörvek' element={<Collar />} />
          <Route path='Kutyáknak/Pórázok' element={<Leash />} />
          <Route path='/Macskáknak' element={<h1>Soon..</h1>} />

        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App;
