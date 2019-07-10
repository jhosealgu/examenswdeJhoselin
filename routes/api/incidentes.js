var express = require('express');
var router = express.Router();

function initIncidente(db){
    var incidentesColl = db.collection('incidentes');
    router.get('/', (req, res, next)=>{
        res.status(200).json({"api":"1"});
    });

    return router;
}

module.exports = initIncidente;