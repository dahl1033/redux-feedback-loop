const router = express.Router();
const pool = require('../modules/pool');
const express = require('express');

// POST router that sends user feedback to data base
router.post('/submit/',  (req, res) => {
    console.log(`Adding feedback`, req.body);
    pool.query(`INSERT INTO "feedback" ("feeling", "understanding", "support", "comments") 
                VALUES ($1, $2, $3, $4);`, [
                    req.body.feeling,           // $1 feeling form feedback data from response
                    req.body.understanding,     // $2 understanding form feedback data from response
                    req.body.support,           // $3 support form feedback data from response
                    req.body.comments           // $4 comments form feedback data from response
    ]).then(result => {
        console.log('POST router completed query');
        res.sendStatus(201);
      })
      .catch(error => {
        console.log(`ERROR adding feedback query`, error);
        res.sendStatus(500);
      });
  });


module.exports = router;