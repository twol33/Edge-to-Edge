const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();

router.post('/', (req, res) => {
  const rideStatus = req.body;
  let userId = req.user.id;
    console.log('this is the ride Style', rideStatus);
    console.log('this is the req.body', req.body);
    
    

    let queryText = `INSERT INTO "ride_style" ( "style", "user_id")
                    VALUES ( $1, $2 )`;
    pool.query( queryText, [ rideStatus.style, userId ])
    .then( result => {
        res.send(200)
    }).catch( error => {
        res.send(500)
    })
});

module.exports = router;