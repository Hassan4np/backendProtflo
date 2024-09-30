const { MongoClient, ServerApiVersion } = require('mongodb');

const uri = "mongodb://localhost:27017";
let client;

const getDatabaseClient = async () => {
    if (!client) {
        client = new MongoClient(uri, {
            serverApi: {
                version: ServerApiVersion.v1,
                strict: true,
                deprecationErrors: true,
            }
        });
        // await client.connect(); 
    }
    return client;
}

module.exports = getDatabaseClient;
