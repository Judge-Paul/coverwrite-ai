import React, { Fragment, lazy } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import lazyLoading from "./components/lazyLoading";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import About from "./pages/About";

const Home = lazyLoading(() => import("./pages/Home"));
const NotFound = lazyLoading(() => import("./pages/NotFound"));
const Create = lazyLoading(() => import("./pages/Create"));

// Layout component for rendering routes with navbar and footer
const Layout = ({ children }) => (
    <div>
        <Navbar />
        {children}
        <Footer />
    </div>
);

export default function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route
                    element={
                        <Layout>
                            <Home />
                        </Layout>
                    }
                    path="/"
                />
                <Route
                    element={
                        <Layout>
                            <Create />
                        </Layout>
                    }
                    path="/create"
                />
                <Route
                    element={
                        <Layout>
                            <About />
                        </Layout>
                    }
                    path="/about"
                />
                <Route
                    element={
                        <Layout>
                            <NotFound />
                        </Layout>
                    }
                    path="/*"
                />
            </Routes>
        </BrowserRouter>
    );
}
