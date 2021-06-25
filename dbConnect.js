import params from './params';

const MongoClient = require('mongodb').MongoClient;

const uri = `mongodb+srv://${params.mongoAcces.log}:${params.mongoAcces.password}@cluster0.fby0d.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`;

const Connect = async (fn) => {
    const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });
    try {
        const open = await client.connect();
        const doSomthing = await fn(client);
        const close = await client.close();

        return doSomthing
        
    }catch(err){
        console.log(err)
    }
}

export default Connect