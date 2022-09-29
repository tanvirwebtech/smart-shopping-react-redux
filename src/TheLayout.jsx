import React from "react";
import Footer from "./common/footer/Footer";
import Header from "./common/header/Header";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/home/Home";
import Product from "./pages/product/Product";
import { Suspense } from "react";
const About = React.lazy(() => import("./pages/about/About"));
const Shop = React.lazy(() => import("./pages/shop/Shop"));
const Login = React.lazy(() => import("./pages/login/Login"));
const Cart = React.lazy(() => import("./pages/cart/Cart"));

export default function TheLayout() {
    return (
        <>
            <header>
                <Header></Header>
            </header>
            <main className="mt-40">
                <Suspense fallback={<>Loading</>}>
                    <Routes>
                        <Route path="/" element={<Home />}></Route>
                        <Route path="/about" element={<About />}></Route>
                        <Route path="/all-products" element={<Shop />}></Route>
                        <Route path="/login" element={<Login />}></Route>
                        <Route path="/cart" element={<Cart />}></Route>
                        <Route
                            path="/product/:id"
                            element={<Product />}
                        ></Route>
                    </Routes>
                </Suspense>
            </main>
            <footer>
                <Footer></Footer>
            </footer>
        </>
    );
}
