import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import styles from "./Store.module.css";
import Product from "../../src/Components/Shared/Product";
import spinner from "../../src/assets/icons/Spinner.svg";

//Redux
import { fetchProducts } from "../Redux/Products/productsAction";

const Store = () => {
    const dispatch = useDispatch();
    const productsState = useSelector((state) => state.productsState);

    useEffect(() => {
        if (!productsState.products.length) dispatch(fetchProducts());
    }, []);

    return (
        <div className={styles.container}>
            {productsState.loading ? (
                <img src={spinner} />
            ) : productsState.error ? (
                <h1>Something went wrong</h1>
            ) : (
                productsState.products.map((pro) => <Product key={pro.id} productData={pro} />)
            )}
        </div>
    );
};

export default Store;
