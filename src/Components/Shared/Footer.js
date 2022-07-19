import React from "react";
import styles from "./Footer.module.css";
const Footer = () => {
    return (
        <div
            className={styles.container}
            style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                backgroundColor: "#f9f9f9",
            }}>
            &copy;2022 Saman Gholami. All rights reserved
        </div>
    );
};

export default Footer;
