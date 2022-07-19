import React, { useContext } from "react";
import { Link } from "react-router-dom";
import styles from "./Product.module.css";
//function
import { shorten, isInCart, quantityCount } from "../helper/function";

//Context
import { CartContext } from "../../Context/CartContextProvider";

// logo
import RemoveIcon from "../../assets/icons/trash.svg";

const Product = ({ productData }) => {
    const { state, dispatch } = useContext(CartContext);

    return (
        <div className={styles.container}>
            <img src={productData.image} style={{ width: "200px", height: "150px" }} />
            <h3>{shorten(productData.title)}</h3>
            <p>{productData.price} $</p>

            <div className={styles.desc}>
                <Link to={`/Products/${productData.id}`}>Details</Link>
                <div className={styles.btn}>
                    {isInCart(state, productData.id) ? (
                        <button
                            style={{ width: "28px" }}
                            onClick={() => dispatch({ type: "INCREASER", payload: productData })}>
                            +
                        </button>
                    ) : (
                        <button onClick={() => dispatch({ type: "ADD_ITEM", payload: productData })}>
                            Add to cart
                        </button>
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
                                dispatch({ type: "DECREASE", payload: productData });
                            }}>
                            -
                        </button>
                    )}
                    {quantityCount(state, productData.id) === 1 && (
                        <button
                            onClick={() => {
                                dispatch({ type: "REMOVE_ITEM", payload: productData });
                            }}>
                            <img src={RemoveIcon} style={{ width: "12px" }} />
                        </button>
                    )}
                </div>
            </div>
        </div>
    );
};

export default Product;
