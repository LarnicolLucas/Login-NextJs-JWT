import Update from "./update"
import wrongAutent from "./wrongAutent"
import BlockCount from './addBlockCount.js';

export default async function BadAttempt(id, res, dbParams, userAttempt) {

    if(userAttempt >= 5) return BlockCount(id, res, dbParams);

    try{

        const filter = { _id: id };
        const update = {
            $inc: {
                attempt: 1,
            },
        };

        const record = await Update(filter, update, dbParams)

        return wrongAutent(res, "Login or Password is not register")

    }catch(err){
        console.log(err)
    }
}