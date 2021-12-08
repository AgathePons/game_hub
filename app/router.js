const express = require("express");
const router = express.Router();

//* Récupérer le fichier games.json
const games = require('./data/games.json');

//! tester si ça existe ou pas ? locals ? doc express 
router.get('/', (request, response) => {

    response.render('index', {
        isDiceRoller: false,
        games: games,
    });
});

router.get('/game/:nomDuJeu', (request, response) => {
    if (request.params.nomDuJeu === 'diceRoller') {
        response.render('diceRoller', {
            isDiceRoller: true,
            games: games,
        });
    } else if (request.params.nomDuJeu === 'fourchette') {
            response.render('fourchette', {
                isDiceRoller: false,
                games: games,
            });
    } else {
        response.render('notFound', {
            isDiceRoller: false,
            games: games,
        })
    }
});

module.exports = router;