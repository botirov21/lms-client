import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Navbar from './pages/navbar/navbar';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Welcome from './pages/welcome/welcome';
import Home from './pages/programs/programs';
import DetailPrograms from './pages/programs/programsDetail';
import MyProfile from './pages/myProfile/myProfile';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <Navbar/>
    <Routes>
      <Route path="/" element={<Welcome/>}/>
      <Route path="/myPrograms" element={<Home/>}/>
      <Route path="/detailPrograms" element={<DetailPrograms/>}/>
      <Route path="/myProfile" element={<MyProfile/>}/>
    </Routes>
  </BrowserRouter>
);


