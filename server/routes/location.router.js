const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();


router.post('/', (req, res) => {
    let newLocation = req.body;

    let queryText = `INSERT INTO "ride_style" ( "state", "resort" )
                     VALUES ( $1, $2 );`;
    pool.query( queryText, [ newLocation.state, newLocation.resort ])
        .then( result => {
            res.send(200)
        }).catch( error => {
            res.send(500)
        })
});

module.exports = router;