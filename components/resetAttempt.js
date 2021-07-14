import Update from "./update";

export default async function ResetAttempt(id, dbParams){
    try{

        const filter = { _id: id };
        const update = {
            $set: {
                attempt: 0
            },
        };

        const record = await Update(filter, update, dbParams);

    }catch(err){
        console.log(err)
    }
}