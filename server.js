/**
 * Initialisation du serveur + ajout d'express
 */
const express = require('express');
var parser = require('json-parser');
var fs = require('fs');
const app = express();
const port = 2004;

app.use(express.static('static'));
/**
 * affichage des équipes
 */
var equipes = require('./equipes.js');
app.use('/get_equipes', equipes);

/**
 * affichage des knockout
 */
var knockout = require('./knockout.js');
app.use('/get_knockout', knockout);

/**
 * affichage des groupes
 */
var groups = require('./groups.js');
app.use('/get_groups', groups);

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

app.get('/stadium', function(req, res){
    res.sendfile(__dirname + '/datas/stadium.json');
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
 * Route vers le fichier groups.json
 */
app.get('/get_all_groups', function(req, res){
    res.sendFile(__dirname + '/datas/groups.json');
});

/*
app.get('/get_equipe', function(req, res){
    res.sendFile(__dirname + '/datas/equipes.json');
});
*/


app.get('/groups/a', function (req, res) { 
    res.send('Welcome');
})
app.get('/groups/b', function (req, res) { 
    res.send('Welcome');
})
app.get('/groups/c', function (req, res) { 
    res.send('Welcome');
})
app.get('/groups/d', function (req, res) { 
    res.send('Welcome');
})

app.get('/groups/e', function (req, res) { 
    res.send('Welcome');
})
app.get('/groups/f', function (req, res) { 
    res.send('Welcome');
})
app.get('/groups/g', function (req, res) { 
    res.send('Welcome');
})
app.get('/groups/h', function (req, res) { 
    res.json(get_group())
})



/**
 * Route vers date du match
 */

/**
 * Port d'écoute du serveur
 */
app.listen(port, function(){
    console.log('server ON');
})

/**
 * connerie a ne pas toucher !
*/
// var get_group = function(){

// fs.readFile('datas/groups.json', 'utf8',alexandre())

// }

// var alexandre = function(error, data) {
//     var obj = JSON.parse(data);
//     var object = obj.groups;
//     console.log(object);
//     var string = JSON.stringify(object);
//     console.log(tab);
// }


