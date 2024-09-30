const express = require('express')
var router = express.Router();

const postServiceRoute = () =>{
    router.post("/service", async(req,res)=>{
        const ServicesCollation = database.collection("service");
        const allsercive = req.body;
        const result = await ServicesCollation.insertOne(allsercive);
        res.send(result)
    })
    return router;
}

module.exports = postServiceRoute;