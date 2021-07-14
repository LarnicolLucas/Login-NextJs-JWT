const crypto = require('crypto');

export default function hashSalt(password, salt){

    const hashPassword = crypto.createHash("sha256")
        .update(password+salt)
        .digest("hex")
    ;

    return salt+hashPassword



}