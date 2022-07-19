import React, { createContext, useEffect, useState } from "react";
//API
import { getProducts } from "../services/api";

export const ProductContext = createContext();

const ProductContextProvider = (props) => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        const fetchApi = async () => {
            setProducts(await getProducts());
        };
        fetchApi();
    }, []);

    return (
        <div>
            <ProductContext.Provider value={products}>{props.children}</ProductContext.Provider>
        </div>
    );
};

export default ProductContextProvider;
