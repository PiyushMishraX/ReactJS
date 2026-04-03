import React from "react";

import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import About from "./pages/About";
import { Route , Routes } from "react-router-dom";
import Product from "./pages/Product";
import NotFound from "./pages/NotFound";

const App = () => {
  return (
    <div className="h-screen bg-black text-white ">
      <Navbar />
      {/* <About /> */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/product" element={<Product />} />

        <Route path="*" element={<NotFound/>}/>
      </Routes>
      <Footer />
    </div>
  );
};

export default App;
