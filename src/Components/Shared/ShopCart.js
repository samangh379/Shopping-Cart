import React, { useContext } from "react";
import styles from "./ShopCart.module.css";
//components
import Cart from "./Cart";
//function
import { fixed } from "../helper/function";

//context
import { CartContext } from "../../Context/CartContextProvider";
import { Link } from "react-router-dom";

const ShopCart = () => {
    const { state, dispatch } = useContext(CartContext);

    return (
        <div className={styles.firstContainer}>
            <div className={styles.container}>
                <div className={styles.card}>
                    {state.selectedItem.map((item) => (
                        <Cart key={item.id} data={item} />
                    ))}
                </div>
                {state.itemCounter > 0 && (
                    <div className={styles.checkout}>
                        <p>
                            <span>Total Items : </span>
                            {state.itemCounter}
                        </p>
                        <p>
                            <span>Total Payment : </span>
                            {fixed(state.total)} $
                        </p>
                        <div className={styles.clickBtn}>
                            <button onClick={() => dispatch({ type: "CHECKOUT" })}>
                                Check out
                            </button>
                            <button onClick={() => dispatch({ type: "CLEAR" })}>Clear</button>
                        </div>
                    </div>
                )}

                {state.checkOut && (
                    <div
                        style={{
                            display: "flex",
                            alignItems: "center",
                            flexDirection: "column",
                            alignItems: "center",
                        }}>
                        <h3>You Checked out successfully</h3>
                        <Link to="/Products">Buy more</Link>
                    </div>
                )}

                {!state.checkOut && state.itemCounter === 0 && (
                    <div>
                        <h3>Want to buy</h3>
                        <Link to="/Products">Go Back to Products</Link>
                    </div>
                )}
            </div>
        </div>
    );
};

export default ShopCart;
