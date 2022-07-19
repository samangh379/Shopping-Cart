import React, { useCallback, useContext } from "react";
import { Link } from "react-router-dom";
import styles from "./NavBar.module.css";
//Icon
import ShopIcon from "../../assets/icons/shop.svg";
//context
import { CartContext } from "../../Context/CartContextProvider";

const NavBar = () => {
    const { state } = useContext(CartContext);
    return (
        <div className={styles.firstContainer}>
            <div className={styles.container}>
                <div className={styles.navbarInfo}>
                    <Link to="/products">Products</Link>
                    <Link to="/SignUp">Account</Link>
                    <Link to="/aboutus">AboutUs</Link>
                </div>
                <div className={styles.cart}>
                    <Link to="/cart">
                        <img src={ShopIcon} alt="picture" />
                    </Link>
                    <span>{state.itemCounter}</span>
                </div>
            </div>
        </div>
    );
};

export default NavBar;
