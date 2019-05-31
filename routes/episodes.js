/*jshint esversion: 6 */
const { Router } = require('express');
const pool = require('../db');

const router = Router();

router.get('/', (request, response, next) => {
    pool.query('SELECT * FROM episodes ORDER BY id ASC', (err, res) => {
        if (err) return next(err);

        response.json(res.rows);
    });
});

router.get('/:id', (request, response, next) => {
    const { id } = request.params;
    pool.query('SELECT * FROM episodes WHERE id = $1', [id], (err, res) => {
        if (err) return next(err);

        response.json(res.rows);
    });
});

router.post('/', (request, response, next) => {
    const { title, enumber, plot } = request.body;

    pool.query(
        'INSERT INTO episodes(title, enumber, plot) VALUES($1, $2, $3)', [title, enumber, plot],
        (err, res) => {
            if (err) return next(err);

            response.redirect('episodes');
        }
    );
});

router.put('/:id', (request, response, next) => {
    const { id } = request.params;
    const keys = ['title', 'enumber', 'plot'];
    const fields = [];

    keys.forEach(key => {
        if (request.body[key]) fields.push(key);
    });

    fields.forEach((field, index) => {
        pool.query(
            `UPDATE episodes SET ${field}=($1) WHERE id=($2)`, [request.body[field], id],
            (err, res) => {
                if (err) return next(err);

                if (index === fields.length - 1) response.redirect('/episodes');
            }
        );
    });
});

router.delete('/:id', (request, response, next) => {
    const { id } = request.params;

    pool.query('DELETE FROM episodes WHERE id=($1)', [id], (err, res) => {
        if (err) return next(err);

        response.redirect('/episodes');
    });
});

module.exports = router;