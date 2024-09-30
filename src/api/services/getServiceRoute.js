const express = require('express')
var router = express.Router();

const getServiceRoute = (database) =>{
    router.get("/service",async(req,res)=>{
        const ServicesCollation = database.collection("service");
        const result = await ServicesCollation.find().toArray();
        res.send(result)
    })
    return router
}


module.exports = getServiceRoute;