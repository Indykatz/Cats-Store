import React from "react";
// import "./App.css";
import { TheApp } from "./css/App.styled";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import Navbar from "./Navbar";
import Footer from "./Footer";
import Home from "./pages/Home";
import About from "./pages/About";
import Breeds from "./pages/Breeds";
import Bengals from "./pages/Bengals";
import Contact from "./pages/Contact";
// import Basket from "./pages/Basket";

function App() {
  return (
    <TheApp>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/About" element={<About />} />
          <Route path="/Breeds" element={<Breeds />} />
          <Route path="/Bengals" element={<Bengals />} />
          <Route path="/Contact" element={<Contact />} />
          {/* <Route path="/Basket" element={<Basket />} /> */}
        </Routes>
        <Footer />
      </BrowserRouter>
    </TheApp>
  );
}

export default App;
