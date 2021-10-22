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

router.get('/', (req,res) => {
    let userId = req.user.id;

    const queryText = 'SELECT "ride_style"."style" FROM "ride_style" WHERE "user_id" = $1 ORDER BY "id" DESC LIMIT 1;'
    pool.query( queryText, [ userId ])
    .then(( result ) => {
        res.send( result.rows )
    }).catch(( error ) => {
        console.log('error getting rider style', error );
        res.sendStatus(500);
    })
})

module.exports = router;