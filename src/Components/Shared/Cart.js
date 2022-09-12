import React, { useContext } from "react";
import styles from "./Cart.module.css";
import { useDispatch, useSelector } from "react-redux";
import { increase, decrease, removeItem } from "../../Redux/Cart/cartAction";

//function
import { shorten } from "../helper/function";

//ICon
import RemoveIcon from "../../assets/icons/trash.svg";

const Cart = (props) => {
    const state = useSelector((state) => state.stateCart);
    const dispatch = useDispatch();
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
                    <button onClick={() => dispatch(decrease(props.data))}>-</button>
                ) : (
                    <button onClick={() => dispatch(removeItem(props.data))}>
                        <img src={RemoveIcon} style={{ width: "12px", backgroundColor: "#ee384e" }} />
                    </button>
                )}
                <button onClick={() => dispatch(increase(props.data))}>+</button>
            </div>
        </div>
    );
};

export default Cart;
