import axios from "axios";
import React, { useEffect, useState } from "react";
import styles from "./HomePage.module.css";
import shopCart from "../../assets/shopCart.jpeg";
import arrow from "../../assets/arrow.png";
import { shorten } from "../helper/function";
import { Link } from "react-router-dom";
import Aria from "../../assets/aria.jpeg";
import youTube from "../../assets/youtube.png";
import twitter from "../../assets/twitter.png";
import linkedin from "../../assets/linkedin.png";
import rightArrow from "../../assets../../assets/right-arrow.png";
import soundCloud from "../../assets/SoundCloud.png";

const HomePage = () => {
    const [products, setProducts] = useState([]);
    const [currentSlide, setCurrentSlide] = useState(0);
    const data = [
        {
            id: 1,
            name: "Kate Wilson",
            title: "Co-Founder of DELKA",
            img: "https://images.pexels.com/photos/428321/pexels-photo-428321.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
            icon: youTube,
            desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat magnam dolorem recusandae perspiciatis ducimus vel hic temporibus. ",
        },
        {
            id: 2,
            name: "Aria Noveiri",
            title: "Ui/UX Designer",
            img: Aria,
            icon: twitter,
            desc: "Saman is my friend for longtime, he has been learned programming from a year ago, he is hardWork person that you can rely on!",
            featured: true,
        },
        {
            id: 3,
            name: "Martin Harold",
            title: "CEO of ALBI",
            img: "https://images.pexels.com/photos/3863793/pexels-photo-3863793.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
            icon: linkedin,
            desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat magnam dolorem",
        },
    ];

    useEffect(() => {
        axios.get("https://fakestoreapi.com/products").then((response) => {
            const data = response.data;
            setProducts(data);
        });
    }, []);

    const checkHandler = (way) => {
        way === "left" ? setCurrentSlide(currentSlide > 0 ? currentSlide - 1 : 3) : setCurrentSlide(currentSlide < 3 ? currentSlide + 1 : 0);
    };

    return (
        <div>
            <div className={styles.container}>
                <div className={styles.header}>
                    <img src={shopCart} />
                    <p>MetaForce</p>
                    <span>Shopping Cart</span>
                </div>
                <div className={styles.main}>
                    <div className={styles.product} style={{ transform: `translateX(-${currentSlide * 100}vw)` }}>
                        {products.slice(5, 9).map((item) => {
                            return (
                                <div key={item.id} className={styles.productContainer}>
                                    <div className={styles.productItems}>
                                        <div className={styles.left}>
                                            <div className={styles.leftContainer}>
                                                <h2>{shorten(item.title)}</h2>
                                                <p>{item.description}</p>
                                            </div>
                                        </div>
                                        <div className={styles.right}>
                                            <img src={item.image} />
                                        </div>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                    <img src={arrow} className={styles.leftArrow} onClick={() => checkHandler("left")} />
                    <img src={arrow} className={styles.rightArrow} onClick={() => checkHandler()} />
                    <Link to="/Products">View All Products</Link>
                </div>
                <div className={styles.testimonial}>
                    <h1>Testimonials</h1>
                    <div className={styles.testimonialContainer}>
                        {data.map((d) => (
                            <div className={d.featured ? styles.cardFeatured : styles.card} key={d.id}>
                                <div className={styles.topBar}>
                                    <img src={rightArrow} />
                                    <img src={d.img} />
                                    <img src={d.icon} />
                                </div>
                                <div className={styles.mainBar}>{d.desc}</div>
                                <div className={styles.bottom}>
                                    <h3>{d.name}</h3>
                                    <h4>{d.title}</h4>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
                <div className={styles.footer}>
                    <div className={styles.leftFooter}>
                        <h3>Get support</h3>
                        <ul>
                            <li>Support site</li>
                            <li>Product documentation</li>
                            <li>Knowledge base</li>
                            <li>System status</li>
                            <li>Report abuse</li>
                        </ul>
                    </div>
                    <div className={styles.mainFooter}>
                        <h3>Contact us</h3>
                        <ul>
                            <li>Ask Question</li>
                            <li>Give Advice</li>
                            <li>Report issue</li>
                        </ul>
                    </div>

                    <div className={styles.rightFooter}>
                        <img src={soundCloud} />
                    </div>
                </div>{" "}
            </div>
        </div>
    );
};

export default HomePage;
