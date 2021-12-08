const express = require("express");
const router = express.Router();

router.get('/', (request, response) => {
    response.render('index', {
        isDiceRoller: false
    });
  });

router.get('/game/fourchette',(request, response) => {
    response.render('fourchette', {
        isDiceRoller: false
    });
  });

router.get('/game/diceRoller',(request, response) => {
    response.render('diceRoller', {
        isDiceRoller: true
    });
  });


module.exports = router;
