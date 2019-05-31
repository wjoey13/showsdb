/*jshint esversion: 6 */
const { Router } = require('express');

const animes = require('./animes');
const episodes = require('./episodes');
const seasons = require('./seasons');
const series = require('./series');
const episodesinseasons = require('./episodesinseasons');


const router = Router();

router.use('/animes', animes);
router.use('/episodes', episodes);
router.use('/seasons', seasons);
router.use('/series', series);
router.use('/episodesinseasons', episodesinseasons);



module.exports = router;