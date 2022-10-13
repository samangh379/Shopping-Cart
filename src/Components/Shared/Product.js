import React from "react";
import { Link } from "react-router-dom";
import styles from "./Product.module.css";
import { useDispatch, useSelector } from "react-redux";
import { decrease, increase, removeItem, addItem } from "../../Redux/Cart/cartAction";
//function
import { shorten, isInCart, quantityCount } from "../helper/function";

//

// logo
import RemoveIcon from "../../assets/icons/trash.svg";

const Product = ({ productData }) => {
    const state = useSelector((state) => state.cartState);

    const dispatch = useDispatch();

    return (
        <div className={styles.container}>
            <img src={productData.image} style={{ width: "200px", height: "150px" }} />
            <h3>{shorten(productData.title)}</h3>
            <p>{productData.price} $</p>

            <div className={styles.desc}>
                <Link to={`/Products/${productData.id}`}>Details</Link>
                <div className={styles.btn}>
                    {isInCart(state, productData.id) ? (
                        <button style={{ width: "28px" }} onClick={() => dispatch(increase(productData))}>
                            +
                        </button>
                    ) : (
                        <button onClick={() => dispatch(addItem(productData))}>Add to cart</button>
                    )}

                    {quantityCount(state, productData.id) > 0 && (
                        <span
                            style={{
                                backgroundColor: " rgb(91, 125, 235) ",
                                padding: "2px",
                                borderRadius: "8px",
                                textAlign: "center",
                                color: "#f9f9f9",
                            }}>
                            {quantityCount(state, productData.id)}
                        </span>
                    )}

                    {quantityCount(state, productData.id) > 1 && (
                        <button
                            style={{ width: "28px" }}
                            onClick={() => {
                                dispatch(decrease(productData));
                            }}>
                            -
                        </button>
                    )}
                    {quantityCount(state, productData.id) === 1 && (
                        <button
                            onClick={() => {
                                dispatch(removeItem(productData));
                            }}
                            style={{}}>
                            <img src={RemoveIcon} style={{ width: "12px", height: "fit-content" }} />
                        </button>
                    )}
                </div>
            </div>
        </div>
    );
};

export default Product;
