import Update from "./update"
import WrongAutent from "./wrongAutent";

export default async function BlockCount(_id, res, dbParams){
    try{

        const filter = { _id: _id };
        const update = {
            $set: {
                blockTime: new Date()
            },
        };

        const record = await Update(filter, update, dbParams);

        WrongAutent(res, "Count has been blocked. Try Later")

    }catch(err){
        console.log(err)
    }

}