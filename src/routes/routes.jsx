// eslint-disable-next-line no-unused-vars
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from '../pages/home';
import About from '../pages/About';
import Services from '../pages/Services';
import PrintPlot from '../pages/Printers-and-Plotters';

const Routers = () => {
    return (
        <Routes>
            <Route path="/" element={<Home/>} />
            <Route path="/About" element={<About/>} />
            <Route path='/Services' element={<Services />} />
            <Route path="Printers-and-Plotters" element={<PrintPlot/>} />
        </Routes>
    );
};

export default Routers;