import connectMongo from '../../dbConnect'

const Get = async (objectToFind, dataBaseTarget)=> {

    const query = async (client)=> {
        try{
    
            const db = client.db(dataBaseTarget.database);
    
            const col = db.collection(dataBaseTarget.collection);
    
            const result = await col.find(objectToFind).toArray()
    
            return result
    
        }catch(err){
            console.log(err)
        }
    }

    return connectMongo(query)

}

export default Get