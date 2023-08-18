import React, { Fragment } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";
export default function App() {
  return (
    <BrowserRouter>
      <Fragment>
        <Navbar />
      </Fragment>
      <Routes>
        <Route element={<Home />} path="/" />
        <Route element={<NotFound />} path="/*" />
      </Routes>
      <Fragment>
        <Footer />
      </Fragment>
    </BrowserRouter>
  );
}
