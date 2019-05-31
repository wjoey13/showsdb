/*jshint esversion: 6 */

const { Router } = require('express');
const pool = require('../db');

const router = Router();

router.get('/', (request, response, next) => {
    pool.query('SELECT * FROM series', (err, res) => {
        if (err) return next(err);

        response.json(res.rows);
    });
});

router.get('/list', (request, response, next) => {
    pool.query('SELECT * FROM series JOIN seasons ON seasons.title = series.season', (err, res) => {
        if (err) return next(err);

        response.json(res.rows);
    });
});


module.exports = router;