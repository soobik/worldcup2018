/**
 * Initialisation du serveur + ajout d'express
 */
const express = require('express');
var parser = require('json-parser');
var fs = require('fs');
const app = express();
const port = 3012;

app.use(express.static('static'));
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
 * Route vers le fichier groups.json
 */
app.get('/get_groups', function(req, res){
    res.sendFile(__dirname + '/datas/groups.json');
});

app.get('/get_equipe', function(req, res){
    res.sendFile(__dirname + '/datas/equipes.json');
});


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
    res.send('Welcome');
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

// var get_groups = function(){

//     fs.readFile('datas/groups.json', 'utf8', function(error, data) {
        
//             var obj = JSON.parse(data);
//             var object = obj.groups
//             console.log(object);
//             var string = JSON.stringify(object);
//             //console.log(string);
//     })
    
// }






