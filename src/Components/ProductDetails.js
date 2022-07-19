import React, { useContext } from "react";
import { Link, useParams } from "react-router-dom";

import styles from "./ProductDetails.module.css";
//Context
import { ProductContext } from "../Context/ProductContextProvider";
const ProductDetails = (props) => {
    const params = useParams();
    const id = params.id;
    const Data = useContext(ProductContext);
    const product = Data[id - 1];
    const { image, title, description, price, category } = product;

    return (
        <div className={styles.firstContainer}>
            <div className={styles.container}>
                <img src={image} />
                <div className={styles.desc}>
                    <h3>{title}</h3>
                    <p>{description}</p>
                    <p>
                        <span>Category</span>: {category}
                    </p>
                    <div className={styles.details}>
                        <span>{price} $</span>
                        <Link to="/Products">Back to Shop</Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProductDetails;
