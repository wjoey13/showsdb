/*jshint esversion: 6 */
const { Router } = require('express');
const pool = require('../db');

const router = Router();

router.get('/', (request, response, next) => {
    pool.query('SELECT * FROM animes ORDER BY id ASC', (err, res) => {
        if (err) return next(err);

        response.json(res.rows);
    });
});

router.get('/:id', (request, response, next) => {
    const { id } = request.params;
    pool.query('SELECT * FROM animes WHERE id = $1', [id], (err, res) => {
        if (err) return next(err);

        response.json(res.rows);
    });
});

router.post('/', (request, response, next) => {
    const { title, cover, synopsis } = request.body;

    pool.query(
        'INSERT INTO animes(title, cover, synopsis) VALUES($1, $2, $3)', [title, cover, synopsis],
        (err, res) => {
            if (err) return next(err);

            response.redirect('animes');
        }
    );
});

router.put('/:id', (request, response, next) => {
    const { id } = request.params;
    const keys = ['title', 'cover', 'synopsis', 'numSeasons'];
    const fields = [];

    keys.forEach(key => {
        if (request.body[key]) fields.push(key);
    });

    fields.forEach((field, index) => {
        pool.query(
            `UPDATE animes SET ${field}=($1) WHERE id=($2)`, [request.body[field], id],
            (err, res) => {
                if (err) return next(err);

                if (index === fields.length - 1) response.redirect('/animes');
            }
        );
    });
});

router.delete('/:id', (request, response, next) => {
    const { id } = request.params;

    pool.query('DELETE FROM animes WHERE id=($1)', [id], (err, res) => {
        if (err) return next(err);

        response.redirect('/animes');
    });
});

module.exports = router;