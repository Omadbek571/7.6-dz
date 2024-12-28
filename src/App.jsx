import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Detailes from './pages/Detailes';
import About from './pages/About';
import Card from './pages/Card';
import ErrorPage from './pages/ErrorPage';
import Products from './pages/Products';

function App() {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/details/:id' element={<Detailes />} />
        <Route path='/about' element={<About />} />
        <Route path='/card' element={<Card />} />
        <Route path='/products' element={<Products />} />
        <Route path='*' element={<ErrorPage />} />
      </Routes>
    </div>
  );
}

export default App;
