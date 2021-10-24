const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();

/**
 * GET route template
 */
router.get('/', (req, res) => {
  const queryText = `SELECT DISTINCT ON (username) username, "location"."state", "location"."resort", "ride_style"."style", "user"."is_on_snow" FROM "user" 
                     JOIN "location" 
                     ON "user"."id" = "location"."user_id"
                     JOIN "ride_style"
                     ON "user"."id" = "ride_style"."user_id"
                     WHERE "user"."is_on_snow" = TRUE  
                     ORDER BY username, "date" DESC;`
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
