const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();

router.put('/', (req,res) => {
    let statusChange = req.body

    let queryText = 'UPDATE "status" SET "on_snow" = NOT "on_snow" WHERE "id" = $1;'
    pool.query( queryText, [ statusChange ])
    .then( result => {
        res.send(200)
    }).catch ( error => {
        res.send(500)
    })
})

module.exports = router;
