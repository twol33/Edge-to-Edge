const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();

router.get('/', (req,res) => {
    const queryText = `SELECT * FROM "location";`;
    pool.query( queryText )
    .then(( result ) => { 
        res.send( result.rows )
    }).catch (( error ) => {
        console.log('Error getting location information', error );
        res.sendStatus(500);
    })
})  

router.post('/', (req, res) => {
    let newLocation = req.body;

    let queryText = `INSERT INTO "location" ( "state", "resort" )
                     VALUES ( $1, $2 );`;
    pool.query( queryText, [ newLocation.state, newLocation.resort ])
        .then( result => {
            res.send(200)
        }).catch( error => {
            res.send(500)
        })
});

module.exports = router;