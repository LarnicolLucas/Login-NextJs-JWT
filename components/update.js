import connectMongo from '../../dbConnect.js'

const Update = async (filter, update, dataBaseTarget)=> {

    const query = async (client)=> {
        try{
    
            const db = client.db(dataBaseTarget.database); 
            const col = db.collection(dataBaseTarget.collection);

            const result = await col.updateOne(filter, update);

            return "updated"
    
        }catch(err){
            console.log(err)
        }
    }

    return connectMongo(query)

}

export default Update