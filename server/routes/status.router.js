const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();

/**
 * GET route template
 */
router.get('/', (req, res) => {
  // GET route code here
});

/**
 * POST route template
 */
router.post('/', (req, res) => {
    let rideStatus = req.body;

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
