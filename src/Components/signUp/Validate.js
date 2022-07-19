export const Validate = (data, type) => {
    const error = {};

    if (!data.email) {
        error.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(data.email)) {
        error.email = "Email is not valid";
    } else {
        delete error.email;
    }

    if (!data.password) {
        error.password = "Password is required";
    } else if (data.password.length < 6) {
        error.password = "Password need to be 6 characters or more";
    } else {
        delete error.password;
    }

    if (type === "signup") {
        if (!data.name.trim()) {
            error.name = "User Name required";
        } else {
            delete error.name;
        }
        if (!data.confirmPassword) {
            error.confirmPassword = "Confirm password";
        } else if (data.confirmPassword !== data.password) {
            error.confirmPassword = "Password  not match";
        } else {
            delete error.confirmPassword;
        }
        if (!data.isAccepted) {
            error.isAccepted = "Accept our regulation";
        } else {
            delete error.isAccepted;
        }
    }

    return error;
};
