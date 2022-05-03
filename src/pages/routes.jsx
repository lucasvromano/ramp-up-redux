import React from 'react';
import { Route, Routes } from 'react-router-dom';
import List from '../pages/List/List';
import Register from './Register/Register';

const RouterConfig = () => (
  <Routes>
    <Route path="/list" element={<List />} />
    <Route path="/register" element={<Register />} />
    <Route path="/" element={<List replace to="/list" />} />
  </Routes>
);

export default RouterConfig;