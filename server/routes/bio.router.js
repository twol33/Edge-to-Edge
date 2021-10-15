const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();

/**
 * GET route template
 */
router.get('/:id', (req, res) => {
  const queryText = 'SELECT * FROM "user" WHERE "id" = $1;';
  pool.query( queryText, [ req.params.id ])
  .then(( result ) => { res.send( result.rows)})
  .catch (( error ) => {
    console.log('Error getting BIO information', error );
    res.sendStatus(500);
  })
});

/**
 * POST route template
 */
router.post('/', (req, res) => {
  // POST route code here
});

module.exports = router;
