const express = require('express')
const app = express()
const port = process.env.PORT || 5000;
app.use(express.json())
const getDatabaseClient = require('./db/connectdb');
const { getServiceRoute, postServiceRoute } = require('./GlobalRouter');


async function run() {
    try {
        const client = await getDatabaseClient();
        const database = client.db("serviceDB");


        // services---->
        app.use(getServiceRoute(database));
        app.use(postServiceRoute(database))


        await client.db("admin").command({ ping: 1 });
        console.log("Mongodb connected Running.........!");
    } finally {
        // await client.close();
    }
}
run().catch(console.dir);;

app.get('/', (req, res) => {
    res.send('Hello Hassan...............!')
  })
  
  app.listen(port, () => {
    console.log(`Running...... on port ${port}`)
  })