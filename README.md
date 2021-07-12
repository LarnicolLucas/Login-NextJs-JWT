# Login-NextJs-JWT

## Overview
Modular server side Login process work with NextJs Backend environement, MongoDB Atlas and JWT.

## Features
Backend authentication :
- Backend Password regex validation
- Blocking users attempts if wrong password (>5)
- Limit 3 accounts by IP
- Hash and Salt password

## Running the project
Copy the folder in /pages/api/ in NextJS folder.
Set params.js file
- Mongo Database Name
- Mongo Collection Name
- Regex (password validation chars)
- Time of blocking count (when too many attempts)
- Time of cookie expiration
- Login and password for Mongo connection
- Cookie Parameters
*Don't forget to change public and private key with RSA encryption.

```javascript
const params = {
    db: {
        database: "", //Mongo Database Name
        collection: "" //Mongo Collection Name
    },
    regex: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/, //Client password validation
    resetAttemptTime: 1, //Hours. Numbers hours of blocking time count (when too many attempts)
    cookieExp: 2, //Days. Numbers of days of expiration cookie
    mongoAcces: {
        log: "", //mongoDB Atlas Login Name
        password: "" //mongoDB Atlas connection Password
    },
    cookie: {
        secure: false, //set true for HTTPS only
        httpOnly: true //set true for prevent XSS
    }
};

```

Post password and login with client-side fetch api like this :
```javascript
const response = await fetch('/api/login/'+route, {
            method: "POST",
            body: JSON.stringify(data),
            headers: { 'Content-Type': 'application/json' }
        });

        const responseData = await response.json();

        return responseData
```
## Dependecies
- NextJS
- JWT
- MongoDB Atlas

