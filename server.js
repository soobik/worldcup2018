/**
 * Initialisation du serveur + ajout d'express
 */
const express = require('express');
const app = express();
var parser = require('json-parser');
var fs = require('fs');
var port = require('./port.js');
var route = require('./routes/routes.js')

app.set('views', __dirname + '/');
app.use(express.static('static'));
app.use(route);


/**
 * Route vers index.html
 */
app.get('/', function (req, res) {
    res.sendFile(__dirname + '/index.html');
    
});

app.get('/stadiums', function (req, res) {
    res.sendFile(__dirname + '/stadium.html');
    
});
/**
 * Route vers equipe.html
 */
app.get('/equipe', function(req, res){
    res.sendFile(__dirname + '/equipe.html');
});
/**
 *  Route vers match.html
 */
app.get('/match', function(req, res){
    res.sendFile(__dirname + '/match.html');
});

/**
 * Route vers page résultat
 */

app.get('/joueurs', function(req, res){
    res.sendFile(__dirname + '/joueurs.html');
});
/**
 * Route vers knockout.html
 */
app.get('/knockout', function(req, res){
    res.sendFile(__dirname + '/knockout.html');
})
/**
 * Route vers score.html
 */

app.get('/score', function(req, res){
    res.sendFile(__dirname+'/score.html');
})
/**
 * Route vers stadium.json
 */
app.get('/stadium', function(req, res){
    res.sendFile(__dirname + '/datas/stadium.json');
});
/**
 * Route vers le fichier groups.json
 */
app.get('/get_all_groups', function(req, res){
    res.sendFile(__dirname + '/datas/groups.json');
});

/**
 * Port d'écoute du serveur
 */
app.listen(port, function(){
    console.log('server ON');
})

