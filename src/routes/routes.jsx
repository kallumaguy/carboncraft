// eslint-disable-next-line no-unused-vars
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from '../pages/home';
import About from '../pages/About';
import Services from '../pages/Services';
import PrintPlot from '../pages/Printers-and-Plotters';
import Enquiry from '../pages/Enquiry';
import Furnitures from '../pages/Furnitures';
import DeskLap from '../pages/Desktops-and-Laptops';

const Routers = () => {
    return (
        <Routes>
            <Route path="/" element={<Home/>} />
            <Route path="/About" element={<About/>} />
            <Route path='/Services' element={<Services />} />
            <Route path="Printers-and-Plotters" element={<PrintPlot/>} />
            <Route path="Desktops-and-Laptops" element={<DeskLap />} />
            <Route path="Furnitures" element={<Furnitures/>} />
            <Route path='/Enquiry' element={<Enquiry/>}/>
            <Route path="/enquire/:item" element={<Enquiry />} />
        </Routes>
    );
};

export default Routers;