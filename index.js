// Appeler express et l'associer à app
const express = require("express");
const router = require('./app/router');
const app = express();
const port = 3000;

// Lier ejs et lui indiquer où chercher les views
app.set('views', './views');
app.set('view engine', 'ejs'); 

// lui donner l'endroit des fichiers statiques
app.use(express.static('public'));

// l'écoute du serveur
app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
  });

//TODO 