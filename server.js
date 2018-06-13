/**
 * Initialisation du serveur + ajout d'express
 */
const express = require('express');
const app = express();
var parser = require('json-parser');
var fs = require('fs');
var port = require('./port.js');
var route = require('./routes/routes.js')
var mustacheExpress = require('mustache-express');
var path = require('path');

app.engine('html', mustacheExpress());
app.set('view engine', 'mustache');
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
 * Route vers knockout.html
 */
app.get('/knockout', function(req, res){
    res.sendFile(__dirname + '/knockout.html');
})
/**
 * Route vers score.html
 */

app.get('/score', function(req, res){
    // res.sendFile(__dirname+'/score.html');
    var equipe = getEquipes();
    // var classe = classement();
    res.render('score.html', {
        equipes: equipe
        // classement: classe
    });
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
 * Route vers date du match
 */

/**
 * Port d'écoute du serveur
 */
app.listen(port, function(){
    console.log('server ON');
})

function classement () {
    var obj = fs.readFileSync(__dirname+'/datas/groups.json');
    var object = JSON.parse(obj);
    console.log(object.groups.a.matches[0].home_result);
    return object;
}

function getEquipes () {
    var obj = fs.readFileSync(__dirname + '/datas/equipes.json');
    var object = JSON.parse(obj);
    console.log(object[0].pays);
    return object
}