const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();

/**
 * GET route template
 */
router.get('/', (req, res) => {
  const queryText = `SELECT "user"."username", "status"."on_snow" FROM "user"
                     JOIN "status"
                     ON "user"."id" = "status"."id";`
  pool.query( queryText )
  .then(( result ) => {
    res.send( result.rows )
  }).catch(( error ) => {
    console.log('error in getting active users information');
    res.send(500);
  })
});

/**
 * POST route template
 */
router.post('/', (req, res) => {
  // POST route code here
});

module.exports = router;
