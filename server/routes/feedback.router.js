const express = require('express');
const router = express.Router();
const pool = require('../modules/pool');


// POST router that sends user feedback to data base
router.post('/', (req, res)=>{
    console.log(req.body)
    let queryPost = `INSERT INTO "feedback" ("feeling", "understanding", "support", "comments")
                        VALUES ($1, $2, $3, $4);`
    pool.query(queryPost, [
                req.body.feeling,           // $1
                req.body.understanding,     // $2
                req.body.support,           // $3
                req.body.comments           // $4
            ]).then(()=>{
                res.sendStatus(201);
            }).catch((error)=>{
                console.log('ERROR in POST server', error);
                res.sendStatus(500);
            })
})

module.exports = router;