import React from "react";
import { Route, Routes } from 'react-router-dom';
import Login from './components/Login.jsx';
import MainFeed from './components/MainFeed.jsx';


const App = () => {
  return (
    <Routes>
      <Route path='/' element={<Login/>} />
      <Route path='/feed' element={<MainFeed/>} />
    </Routes>
  );
};


export default App;
