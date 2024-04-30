import React from "react";
import { Route, Routes } from 'react-router-dom';
import Login from './components/Login.jsx';
import Signup from './components/Signup.jsx';
import Feed from './components/Feed.jsx';


const App = () => {
  return (
    <Routes>
      <Route path='/' element={<Login/>} />
      <Route path='/signup' element={<Signup/>} />
      <Route path='/feed' element={<Feed/>} />
    </Routes>
  );
};


export default App;
