const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();

/**
 * GET route template
 */
router.get('/ridestyle', (req, res) => {
    const queryText = `SELECT * FROM "ride_style" WHERE "id" = $1;`;
    pool.query( queryText, [ req.params.id ] )
  // GET route code here
});

/**
 * POST route template
 */
router.post('/', (req, res) => {
  // POST route code here
});

module.exports = router;