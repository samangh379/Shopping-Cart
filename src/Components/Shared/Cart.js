import React, { useContext } from "react";
import styles from "./Cart.module.css";

//Context
import { CartContext } from "../../Context/CartContextProvider";

//function
import { shorten } from "../helper/function";

//ICon
import RemoveIcon from "../../assets/icons/trash.svg";

const Cart = (props) => {
    const { state, dispatch } = useContext(CartContext);

    const { image, title, price, quantity } = props.data;
    return (
        <div className={styles.container}>
            <img src={image} alt="picture" className={styles.photo} />
            <div className={styles.text}>
                <h3>{shorten(title)}</h3>
                <p>{price} $</p>
            </div>
            <div>{quantity}</div>
            <div className={styles.quantity}>
                {quantity > 1 ? (
                    <button onClick={() => dispatch({ type: "DECREASE", payload: props.data })}>
                        -
                    </button>
                ) : (
                    <button onClick={() => dispatch({ type: "REMOVE_ITEM", payload: props.data })}>
                        <img
                            src={RemoveIcon}
                            style={{ width: "12px", backgroundColor: "#ee384e" }}
                        />
                    </button>
                )}
                <button onClick={() => dispatch({ type: "INCREASER", payload: props.data })}>
                    +
                </button>
            </div>
        </div>
    );
};

export default Cart;
