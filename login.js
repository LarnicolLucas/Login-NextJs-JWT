import BadAttempt from './components/addBadAttempt.js';
import Get from './components/get.js'
import hashSalt from './components/hashSlat.js';
import params from "./params"
import wrongAutent from "./components/wrongAutent"
import ResetAttempt from './components/resetAttempt.js';

import jwt from './components/createJWT'
import CreateCookie from './components/createCookie.js';


export default async function HandleRequest(req, res){

    const body = req.body;
    const {ObjectID} = require("mongodb");

    try {

        const user = await Get({login: body.login}, params.db);
        const userId = new ObjectID(user[0]._id);

        //user don't exist
        if(user.length === 0) return wrongAutent(res, "Login or Password is not register");
        //user has blocked count

        if((new Date()) - user[0].blockTime < params.resetAttemptTime*60*60*1000) return wrongAutent(res, "Count has been blocked. Try Later")

        const comparePasswords = hashSalt(body.password, user[0].salt) === user[0].password;

        if(!comparePasswords) return BadAttempt(userId, res, params.db, user[0].attempt);

        const ClearAttempt = await ResetAttempt(userId, params.db);

        const token = jwt({user: {name: body.login, id: userId}}, params.cookieExp);

        CreateCookie(token, res, req);

        return res.status(200).json({error: false, message: "User autentified", token: token})


    }catch(err){
        console.log(err)
    }
}