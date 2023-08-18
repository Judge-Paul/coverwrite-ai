import React, { Fragment } from "react";
import Home from "./pages/Home";
import Navbar from "./components/Navbar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Footer from "./components/Footer";

export default function App() {
  return (
    <BrowserRouter>
      <Fragment>
        <Navbar />
      </Fragment>
      <Routes>
        <Route element={<Home />} path="/" />
      </Routes>
      <Fragment>
        <Footer />
      </Fragment>
    </BrowserRouter>
  );
}
