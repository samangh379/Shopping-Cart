import React from "react";
import "./App.css";
import { Route, Routes, Navigate } from "react-router-dom";
import { Provider } from "react-redux";

//Components
import Store from "./Components/Store";
import ProductDetails from "./Components/ProductDetails";
import NavBar from "./Components/Shared/NavBar";
import ShopCart from "./Components/Shared/ShopCart";
// import HomePage from "./Components/Shared/HomePage";
import SignUpInfo from "./Components/signUp/SignUpInfo";
import LoginInfo from "./Components/signUp/LoginInfo";
import AboutUs from "./Components/Shared/AboutUs";

//Redux
import store from "./Redux/store";

const App = () => {
    return (
        <Provider store={store}>
            <NavBar />
            <Routes>
//                 <Route path="/homepage" element={<HomePage />} />
                <Route path="/Products/:id" element={<ProductDetails />} />
                <Route path="/Products" element={<Store />} />
                <Route path="/aboutUs" element={<AboutUs />} />
                <Route path="/cart" element={<ShopCart />} />
                <Route path="/login" element={<LoginInfo />} />
                <Route path="/SignUp" element={<SignUpInfo />} />
                <Route path="/SignUp" element={<SignUpInfo />} />
                <Route path="/*" element={<Navigate to="/homepage" />} />
            </Routes>
        </Provider>
    );
};

export default App;
