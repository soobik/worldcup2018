/**
 * Initialisation du serveur + ajout d'express
 */
const express = require('express');
const app = express();

app.use(express.static('public'));
/**
 * Route vers index.html
 */
app.get('/', function (req, res) {
    res.sendFile(__dirname, + '/index.html')
});

/**
 * Route vers le fichier groups.json
 */
app.get('/groups', function(req, res){
    res.sendFile(__dirname + ('/groups.json'))
});

/**
 * Port d'écoute du serveur
 */
app.listen(3012, function(){
    console.log('server ON');
})