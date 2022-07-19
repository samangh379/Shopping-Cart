import React from "react";
import "./App.css";
import { Route, Routes, Navigate } from "react-router-dom";

//Components
import Store from "./Components/Store";
import ProductDetails from "./Components/ProductDetails";
import NavBar from "./Components/Shared/NavBar";
import ShopCart from "./Components/Shared/ShopCart";
import Footer from "./Components/Shared/Footer";
import SignUpInfo from "./Components/signUp/SignUpInfo";
import LoginInfo from "./Components/signUp/LoginInfo";
import AboutUs from "./Components/Shared/AboutUs";

//Context
import ProductContextProvider from "./Context/ProductContextProvider";
import CartContextProvider from "./Context/CartContextProvider";

const App = () => {
    return (
        <ProductContextProvider>
            <CartContextProvider>
                <NavBar />
                <Routes>
                    <Route path="/Products/:id" element={<ProductDetails />} />
                    <Route path="/Products" element={<Store />} />
                    <Route path="/aboutUs" element={<AboutUs />} />
                    <Route path="/cart" element={<ShopCart />} />
                    <Route path="/login" element={<LoginInfo />} />
                    <Route path="/SignUp" element={<SignUpInfo />} />
                    <Route path="/*" element={<Navigate to="/Products" />} />
                </Routes>
                <Footer />
            </CartContextProvider>
        </ProductContextProvider>
    );
};

export default App;
