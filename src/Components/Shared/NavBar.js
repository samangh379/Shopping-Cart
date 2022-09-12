import React, { useCallback, useContext, useState } from "react";
import { Link } from "react-router-dom";
import styles from "./NavBar.module.css";
import { useSelector } from "react-redux";
//Icon
import ShopIcon from "../../assets/icons/shop.svg";

const NavBar = () => {
    const state = useSelector((state) => state.cartState);
    const [menuOpen, setMenuOpen] = useState(false);
    return (
        <div className={styles.firstContainer}>
            <div className={styles.container}>
                <div
                    className={menuOpen ? styles.MenuOpen : styles.Menu}
                    onClick={() => {
                        setMenuOpen(!menuOpen);
                    }}>
                    <span className="line1"></span>
                    <span className="line2"></span>
                    <span className="line3"></span>
                </div>

                <div className={styles.navbarInfo}>
                    <Link to="/products">Products</Link>
                    <Link to="/SignUp">Account</Link>
                    <Link to="/aboutus">AboutUs</Link>
                </div>
                <div className={styles.menuBar}>
                    <div className={menuOpen ? styles.active : styles.nav}>
                        <ul>
                            <li onClick={() => setMenuOpen(false)}>
                                <Link to="/products">Products</Link>
                            </li>
                            <li onClick={() => setMenuOpen(false)}>
                                <Link to="/SignUp">Account</Link>
                            </li>
                            <li onClick={() => setMenuOpen(false)}>
                                <Link to="/aboutus">AboutUs</Link>
                            </li>
                        </ul>
                    </div>
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
