import axios from "axios";
import React, { useEffect, useState } from "react";
import styles from "./HomePage.module.css";

const HomePage = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        axios.get("https://fakestoreapi.com/products").then((response) => {
            const data = response.data;
            setProducts(data);
        });
    }, []);

    return (
        <div>
            <div className={styles.container}>
                <div className={styles.header}>
                    <img src="#" />
                    <span></span>
                </div>
                <div className={styles.main}>
                    <div className={styles.product}>
                        <div className={styles.productContainer}>
                            {products.slice(0, 6).map((item) => {
                                return (
                                    <div key={item.id} className={styles.itemContainer}>
                                        <img src={item.image} />
                                        <div className={styles.itemMain}>
                                            <div className={styles.itemPrice}> </div>
                                            <div className={styles.itemTag}> </div>
                                        </div>

                                        <div className={styles.itemBtn}>
                                            <button className={styles.detailsBtn}></button>
                                            <button className={styles.shopBtn}></button>
                                        </div>
                                    </div>
                                );
                            })}
                        </div>
                    </div>
                </div>
                <div className={styles.testimonial}>
                    <div className={styles.testimonialContainer}>
                        <div className={styles.writerInfo}>
                            <span></span>
                            <img src="#" />
                            <span></span>
                        </div>
                    </div>
                    <div className={styles.testimonialContainer}>
                        <div className={styles.writerInfo}>
                            <span></span>
                            <img src="#" />
                            <span></span>
                        </div>
                    </div>
                    <div className={styles.testimonialContainer}>
                        <div className={styles.writerInfo}>
                            <span></span>
                            <img src="#" />
                            <span></span>
                        </div>
                    </div>
                    <div className={styles.footer}>
                        <div className={styles.contact}></div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HomePage;
