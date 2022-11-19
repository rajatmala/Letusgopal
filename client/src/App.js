import React from 'react';
import Header from "./components/Header.js";
import MainPage from "./pages/Home";
import Register from "./pages/Register/index.js"
import Login from "./pages/Login/index.js";
import StorageTab from "./pages/Home/StorageTab.js";
import WarehouseDetails from "./pages/Warehouse/index.js";
import AboutSection from "./pages/About/index.js"
import ContactSection from "./pages/Contact/index.js";
import Footer from "./components/Footer.js";
import Test from "./components/Test.js";
import Partner from "./components/Partner.js";
import CardSection from './components/CardSection.js';
import "./components/css/style.css";
import { Routes, Route } from "react-router-dom";

const App = () =>
{
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={ <MainPage /> } />
        <Route path="/register" element={ <Register /> } />
        <Route path="/login" element={ <Login /> } />
        <Route path="/storage" element={ <CardSection /> } />
        <Route path="/storageTab" element={ <StorageTab /> } />
        <Route path="/WarehouseDetails" element={ <WarehouseDetails /> } />
        <Route path="/partner" element={ <Partner /> } />
        <Route path="/about" element={ <AboutSection /> } />
        <Route path="/contact" element={ <ContactSection /> } />
        <Route path="/test" element={ <Test /> } />
      </Routes>
      <Footer />
    </div>
  );
};

export default App;
