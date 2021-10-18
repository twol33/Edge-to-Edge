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
router.post('/:id', (req, res) => {
  const username = req.body.username;
  const password = encryptLib.encryptPassword(req.body.password);
  const first_name = '';
  const last_name = '';
  const image_url = '';

  const queryText = `INSERT INTO "user" (username, password, first_name, last_name, image_url)
                     VALUES ( $1, $2, $3, $4, $5 )`
  pool.query(queryText, [username, password, first_name, last_name, image_url])
    .then(() => res.sendStatus(201))
    .catch((err) => {
    console.log('User registration failed: ', err);
    res.sendStatus(500);
  });
 
  // POST route code here
});

module.exports = router;
