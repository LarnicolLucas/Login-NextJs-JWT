const params = {
    db: {
        database: "login",
        collection: "users"
    },
    regex: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/,
    resetAttemptTime: 1,
    cookieExp: 2,
    mongoAcces: {
        log: "",
        password: ""
    },
    cookie: {
        secure: false,
        httpOnly: true
    }
};

export default params