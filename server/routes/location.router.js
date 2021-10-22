const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();

router.get('/', (req,res) => {
    let userId = req.user.id;

    const queryText = `SELECT * FROM "location" WHERE "user_id" = $1 ORDER BY "date" DESC;`;
    pool.query( queryText, [ userId ])
    .then(( result ) => { 
        res.send( result.rows )
    }).catch (( error ) => {
        console.log('Error getting location information', error );
        res.sendStatus(500);
    })
})  

router.post('/', (req, res) => {
    let newLocation = req.body;
    let userId = req.user.id;

    let queryText = `INSERT INTO "location" ( "state", "resort", "user_id" )
                     VALUES ( $1, $2, $3 );`;
    pool.query( queryText, [ newLocation.state, newLocation.resort, userId ])
        .then( result => {
            res.send(200)
        }).catch( error => {
            res.send(500)
        })
});

module.exports = router;