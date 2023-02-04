import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Signin from './home/Signin';
import Signup from './home/Signup';
import ForgotPassword from './home/ForgotPassword';


function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Signin />} />
        <Route path="/signin" element={<Signin />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />
    </Routes>
  </BrowserRouter>
  );
}

export default App;
