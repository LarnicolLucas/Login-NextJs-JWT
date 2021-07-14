import connectMongo from '../../dbConnect.js'

const Post = async (objectToRecord, dataBaseTarget)=> {

    const query = async (client)=> {
        try{
    
            const db = client.db(dataBaseTarget.database); 
            const col = db.collection(dataBaseTarget.collection);
    
            const result = await col.insertOne(objectToRecord);

            return "posted"
    
        }catch(err){
            console.log(err)
        }
    }

    return connectMongo(query)

}

export default Post