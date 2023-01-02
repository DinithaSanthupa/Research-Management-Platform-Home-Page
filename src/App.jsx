import React from 'react';

import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Home from './pages/Home/Home';
import Welcome from './pages/Welcome/Welcome';
import Login from './pages/SignIn/Login';
import Reset from './pages/Reset/Reset';
import LoginWithCode from './pages/LoginWithCode/LoginWithCode';

import './App.css';

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/*" element={<Home />} />
          <Route path="/welcome" element={<Welcome />} />
          <Route path="/login" element={<Login />} />
          <Route path="/reset" element={<Reset />} />
          <Route path="/accsescode" element={<LoginWithCode />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
