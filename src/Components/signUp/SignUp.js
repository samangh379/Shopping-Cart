import React from "react";
import { Link } from "react-router-dom";
import styles from "./SignUp.module.css";

const SignUp = (props) => {
    return (
        <div className={styles.container}>
            <form onSubmit={props.submit} className={styles.formContainer}>
                <h1 className={styles.header}>Sign Up</h1>
                <div className={styles.formField}>
                    <label>Name</label>
                    <input
                        className={
                            props.problem.name && props.toucher.name
                                ? styles.fromUncompleted
                                : styles.formInput
                        }
                        type="text"
                        name="name"
                        value={props.name}
                        onChange={props.Changer}
                        onFocus={props.Focuser}
                    />
                    {props.problem.name && props.toucher.name && <span>{props.problem.name}</span>}
                </div>
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
                <div className={styles.formField}>
                    <label>Confirm Password</label>
                    <input
                        className={
                            props.problem.confirmPassword && props.toucher.confirmPassword
                                ? styles.fromUncompleted
                                : styles.formInput
                        }
                        type="password"
                        name="confirmPassword"
                        value={props.confirmPassword}
                        onChange={props.Changer}
                        onFocus={props.Focuser}
                    />
                    {props.problem.confirmPassword && props.toucher.confirmPassword && (
                        <span>{props.problem.confirmPassword}</span>
                    )}
                </div>
                <div className={styles.formField}>
                    <label>I accept terms of privacy policy</label>
                    {props.problem.isAccepted && props.toucher.isAccepted && (
                        <span>{props.problem.isAccepted}</span>
                    )}
                    <input
                        className={
                            props.problem.isAccepted && props.toucher.isAccepted
                                ? styles.fromUncompleted
                                : styles.formInput
                        }
                        type="checkbox"
                        name="isAccepted"
                        value={props.isAccepted}
                        onChange={props.Changer}
                        onFocus={props.Focuser}
                    />
                </div>

                <div className={styles.accept}>
                    <Link to="/login">Login</Link>
                    <button type="submit">Sign Up</button>
                </div>
            </form>
        </div>
    );
};

export default SignUp;
