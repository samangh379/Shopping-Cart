import React, { useContext } from "react";
import styles from "./Store.module.css";
//Components

//Context
import { ProductContext } from "../Context/ProductContextProvider";
import Product from "./Shared/Product";

const Store = () => {
    const products = useContext(ProductContext);
    return (
        <div className={styles.container}>
            {products.length ? (
                products.map((items) => <Product key={items.id} productData={items} />)
            ) : (
                <div>
                    {/* <div className={styles.loadingWrap}>
                        <div class="loadingBoxes loadingBoxColour1"></div>
                        <div class="loadingBoxes loadingBoxColour2"></div>
                        <div class="loadingBoxes loadingBoxColour3"></div>
                        <div class="loadingBoxes loadingBoxColour4"></div>
                        <div class="loadingBoxes loadingBoxColour5"></div>
                    </div> */}
                </div>
            )}
        </div>
    );
};

export default Store;
