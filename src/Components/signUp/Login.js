import React from "react";
import styles from "./SignUp.module.css";
import { Link } from "react-router-dom";

const Login = (props) => {
    return (
        <div className={styles.container}>
            <form onSubmit={props.submit} className={styles.formContainer}>
                <h1 className={styles.header}>Login</h1>

                <div className={styles.formField}>
                    <label>Email</label>
                    <input
                        className={
                            props.problem.email && props.toucher.email
                                ? styles.fromUncompleted
                                : styles.formInput
                        }
                        type="text"
                        name="email"
                        value={props.email}
                        onChange={props.Changer}
                        onFocus={props.Focuser}
                    />
                    {props.problem.email && props.toucher.email && (
                        <span>{props.problem.email}</span>
                    )}
                </div>
                <div className={styles.formField}>
                    <label>Password</label>
                    <input
                        className={
                            props.problem.password && props.toucher.password
                                ? styles.fromUncompleted
                                : styles.formInput
                        }
                        type="password"
                        name="password"
                        value={props.password}
                        onChange={props.Changer}
                        onFocus={props.Focuser}
                    />
                    {props.problem.password && props.toucher.password && (
                        <span>{props.problem.password}</span>
                    )}
                </div>

                <div className={styles.accept2}>
                    <Link to="/signup">Sign Up</Link>
                    <button type="submit">Login</button>
                </div>
            </form>
        </div>
    );
};

export default Login;
