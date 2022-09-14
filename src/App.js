import React, { useState } from 'react';

import Login from './Login.js';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Home from './pages/Home.js';


function App() {

  const [show, setShow] = useState(false)
  const on = () => {
    console.log("On func");
  }
  return (
    <>

      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />}/>            
          <Route path="/login" element={<Login />}/>            
        </Routes>
      </BrowserRouter>

    </>
  );
}

export default App;
