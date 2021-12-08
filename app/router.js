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

router.get('/game/fourchette',(request, response) => {
    response.render('fourchette', {
        isDiceRoller: false,
        games: games,
    });
  });

router.get('/game/diceRoller',(request, response) => {
    response.render('diceRoller', {
        isDiceRoller: true,
        games: games,
    });
  });

module.exports = router;
