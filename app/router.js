const express = require("express");
const router = express.Router();

//* Récupérer le fichier games.json
const games = require('./data/games.json');

router.get('/', (request, response) => {
    response.render('index', {
        games: games,
    });
});


// Chercher dans le tableau et comparer :nomDuJeu avec la clé name
// et si === afficher le bon js et le bon css en s'appuyant sur les autres clés
router.get('/game/:nomDuJeu', (request, response) => {

    const gameObject = games.find(gameObject => gameObject.name === request.params.nomDuJeu);

    if (gameObject) {
        response.locals.gameObject = gameObject;
        response.render(gameObject.name, {
            games: games, 
            gameObject: gameObject,
        });
        console.log(gameObject.jsFile);
    } else {
        response.render('notFound', {
            games: games,
        });
    }
});

router.use(function (request, response, next) {
    response.render('notFound', {
        games: games
    });
  });

module.exports = router;