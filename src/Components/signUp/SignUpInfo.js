import React, { useEffect, useState } from "react";
import SignUp from "./SignUp";

import { Validate } from "./Validate";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { notify } from "./toast";

const SignUpInfo = () => {
    const [data, setData] = useState({
        name: "",
        email: "",
        password: "",
        confirmPassword: "",
        isAccepted: "",
    });

    const [error, setError] = useState({});
    const [touched, setTouched] = useState({});

    const touchHandler = (event) => {
        setTouched({ ...touched, [event.target.name]: true });
    };

    useEffect(() => {
        setError(Validate(data, "signup"));
    }, [data, touched]);

    const ChangeHandler = (event) => {
        if (event.target.name === "isAccepted") {
            setData({ ...data, [event.target.name]: event.target.checked });
        } else setData({ ...data, [event.target.name]: event.target.value });
    };
    const submitHandler = (event) => {
        event.preventDefault();

        if (!Object.keys(error).length) {
            notify("You Signed in successfully!", "success");
        } else {
            notify("Invalid data", "error");

            setTouched({
                name: true,
                email: true,
                password: true,
                confirmPassword: true,
                isAccepted: true,
            });
        }
    };

    return (
        <div>
            <div>
                <SignUp
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

export default SignUpInfo;
