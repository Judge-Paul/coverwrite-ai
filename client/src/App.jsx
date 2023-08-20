import React, { Fragment, lazy } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import lazyLoading from "./components/lazyLoading";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

const Home = lazyLoading(() => import("./pages/Home"));
const NotFound = lazyLoading(() => import("./pages/NotFound"));
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
