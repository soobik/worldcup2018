/**
 * Initialisation du serveur + ajout d'express
 */
const express = require('express');
var parser = require('json-parser');
var fs = require('fs');
const app = express();
const port = 2004;
var route = require('./routes/routes.js')

app.use(express.static('static'));
app.use(route);

/**
 * Route vers index.html
 */
app.get('/', function (req, res) {
    res.sendFile(__dirname + '/index.html');
    
});
/**
 * Route vers equipe.html
 */
app.get('/equipe', function(req, res){
    res.sendfile(__dirname + '/equipe.html');
});
/**
 *  Route vers match.html
 */
app.get('/match', function(req, res){
    res.sendfile(__dirname + '/match.html');
});

/**
 * Route vers knockout.html
 */
app.get('/knockout', function(req, res){
    res.sendfile(__dirname + '/knockout.html');
})

/**
 * Route vers stadium.json
 */
app.get('/stadium', function(req, res){
    res.sendfile(__dirname + '/datas/stadium.json');
});
/**
 * Route vers le fichier groups.json
 */
app.get('/get_all_groups', function(req, res){
    res.sendFile(__dirname + '/datas/groups.json');
});

/**
 * Route vers date du match
 */

/**
 * Port d'écoute du serveur
 */
app.listen(port, function(){
    console.log('server ON');
})


