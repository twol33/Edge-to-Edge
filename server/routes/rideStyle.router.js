const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();

// /**
//  * GET route template
//  */
// router.get('/ridestyle', (req, res) => {
//     const queryText = `SELECT * FROM "ride_style" WHERE "id" = $1;`;
//     pool.query( queryText, [ req.params.id ] )
//   // GET route code here
// });

/**
 * POST route template
 */
router.post('/', (req, res) => {
  const rideStatus = req.body;
    console.log('this is the ride Style', rideStatus);
    console.log('this is the req.body', req.body);
    
    

    let queryText = `INSERT INTO "ride_style" ( "style" )
                    VALUES ( $1 )`;
    pool.query( queryText, [ rideStatus.style ])
    .then( result => {
        res.send(200)
    }).catch( error => {
        res.send(500)
    })
});

module.exports = router;