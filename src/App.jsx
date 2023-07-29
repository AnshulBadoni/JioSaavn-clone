import React from "react";
import { Navbar, Home, Player, Search } from "./components/";
import { BrowserRouter, Routes, Route } from "react-router-dom";


const HomePage = () => {
  return (
    <>
      <Navbar />
      <Home />
    </>
  );
};

const App = () => {
  
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/player/:id" element={<Player />} />
        <Route path="/search" element={<Search />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
