import React from "react";

import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import About from "./pages/About";
import { Route , Routes } from "react-router-dom";

const App = () => {
  return (
    <div className="h-screen bg-black text-white ">
      <Navbar />
      {/* <About /> */}
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
      <Footer />
    </div>
  );
};

export default App;
