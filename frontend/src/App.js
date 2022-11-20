import React from 'react';
import Header from "./pages/Header/index.js";
import MainPage from "./pages/Home";
import Register from "./pages/Register/index.js"
import Login from "./pages/Login/index.js";
import StorageTab from "./pages/Home/StorageTab.js";
import WarehouseDetails from "./pages/Warehouse/index.js";
import AboutSection from "./pages/About/index.js"
import ContactSection from "./pages/Contact/index.js";
import Footer from "./pages/Footer/index.js";
import Test from "./components/Test.js";
import Partner from "./components/Partner.js";
import Storage from "./components/Storage";
import Map from "./pages/Map/Map"
import Careers from "./pages/Careers/index"

import { Routes, Route } from "react-router-dom";
import "./components/css/style.css";

const App = () =>
{
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={ <MainPage /> } />
        <Route path="/register" element={ <Register /> } />
        <Route path="/login" element={ <Login /> } />
        <Route path="/storage" element={ <Storage /> } />
        <Route path="/storageTab" element={ <StorageTab /> } />
        <Route path="/WarehouseDetails" element={ <WarehouseDetails /> } />
        <Route path="/partner" element={ <Partner /> } />
        <Route path="/locations" element={ <Map /> } />
        <Route path="/careers" element={ <Careers /> } />
        <Route path="/about" element={ <AboutSection /> } />
        <Route path="/contact" element={ <ContactSection /> } />
        <Route path="/test" element={ <Test /> } />
      </Routes>
      <Footer />
    </div>
  );
};

export default App;
