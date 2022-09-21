import React from "react";
import Footer from "./common/footer/Footer";
import Header from "./common/header/Header";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/home/Home";
import About from "./pages/about/About";
import Shop from "./pages/shop/Shop";
import Login from "./pages/login/Login";
import Product from "./pages/product/Product";
import Cart from "./pages/cart/Cart";

export default function TheLayout() {
    return (
        <>
            <header>
                <Header></Header>
            </header>
            <main>
                <Routes>
                    <Route path="/" element={<Home />}></Route>
                    <Route path="/about" element={<About />}></Route>
                    <Route path="/all-products" element={<Shop />}></Route>
                    <Route path="/login" element={<Login />}></Route>
                    <Route path="/cart" element={<Cart />}></Route>
                    <Route path="/product/:id" element={<Product />}></Route>
                </Routes>
            </main>
            <footer>
                <Footer></Footer>
            </footer>
        </>
    );
}
