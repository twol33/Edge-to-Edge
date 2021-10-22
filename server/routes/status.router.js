const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();

router.put('/:id', (req,res) => {
    let statusChange = req.body.params;
    let userId = req.params.id;
    console.log(statusChange);

    let queryText = `UPDATE "user" SET "is_on_snow" = $1 WHERE "id" = $2;`
    pool.query( queryText, [ statusChange, userId ])
    .then( result => {
        res.send(200)
    }).catch ( error => {
        res.send(500)
    })
})

module.exports = router;
