import React, { useEffect, useState } from "react";
import Login from "./Login";

import { Validate } from "./Validate";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { notify } from "./toast";

const LoginInfo = () => {
    const [data, setData] = useState({
        email: "",
        password: "",
    });

    const [error, setError] = useState({});
    const [touched, setTouched] = useState({});

    const touchHandler = (event) => {
        setTouched({ ...touched, [event.target.name]: true });
    };

    useEffect(() => {
        setError(Validate(data, "login"));
    }, [data, touched]);

    const ChangeHandler = (event) => {
        if (event.target.name === "isAccepted") {
            setData({ ...data, [event.target.name]: event.target.checked });
        } else setData({ ...data, [event.target.name]: event.target.value });
    };
    const submitHandler = (event) => {
        event.preventDefault();

        if (!Object.keys(error).length) {
            notify("You Logged in successfully!", "success");
        } else {
            notify("this password isn't match with email", "error");

            setTouched({
                email: true,
                password: true,
            });
        }
    };

    return (
        <div>
            <div>
                <Login
                    name={data.name}
                    email={data.email}
                    password={data.password}
                    confirmPassword={data.confirmPassword}
                    isAccepted={data.isAccepted}
                    problem={error}
                    Changer={ChangeHandler}
                    Focuser={touchHandler}
                    toucher={touched}
                    submit={submitHandler}
                />
            </div>
            <ToastContainer />
        </div>
    );
};

export default LoginInfo;
