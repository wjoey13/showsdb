/*jshint esversion: 6 */

const { Router } = require('express');
const pool = require('../db');

const router = Router();



router.get('/', (request, response, next) => {
    pool.query('SELECT * FROM episodesinseasons', (err, res) => {
        if (err) return next(err);

        response.json(res.rows);
    });
});

router.get('/info', (request, response, next) => {
    pool.query('SELECT * FROM episodesinseasons JOIN episodes ON episodes.title = episodesinseasons.episode', (err, res) => {
        if (err) return next(err);

        response.json(res.rows);
    });
});



module.exports = router;