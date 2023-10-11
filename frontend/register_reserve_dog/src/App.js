
import React from 'react';
import './css/App.css';
import Navbar from './header';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './pages/home.js';
import Login from './pages/login.js';
import Register from './pages/register.js';
import Logout from './redirects/logout.js';
import Delete from './redirects/delete.js';
import Calendar from './pages/calendar.js';

function App() {
return (
    <BrowserRouter>
    <Navbar />
    <Routes>
        <Route exact path='/' element={<Home />} />
        <Route path='/login' element={<Login/>} />
        <Route path='/register' element={<Register/>} />
        <Route path='/logout' element={<Logout/>} />
        <Route path='/delete' element={<Delete/>} />
        <Route path='/visit' element={<Calendar />} />
    </Routes>
    </BrowserRouter>
);
}
  
export default App;