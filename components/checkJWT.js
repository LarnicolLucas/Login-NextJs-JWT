const jwt = require('jsonwebtoken');
const fs = require('fs')

export default function checkJwt(){

    var cert = fs.readFileSync('./pages/api/login/publicKey.pem');

    jwt.verify(token, cert, function(err, decoded) {
        return decoded
    });
}