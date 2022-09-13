import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import styles from "./ProductDetails.module.css";
import axios from "axios";

const ProductDetails = (props) => {
    const [product, setProduct] = useState([]);
    const params = useParams();
    const id = params.id;
    useEffect(() => {
        axios.get(`https://fakestoreapi.com/Products/${id}`).then((response) => {
            const data = response.data;
            setProduct(data);
        });
    }, []);
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
