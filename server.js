/**
 * Initialisation du serveur + ajout d'express
 */
const express = require('express');
var fs = require('fs');
const app = express();
const port = 3012;

var parser = require('json-parser');

app.use(express.static('static'));
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
    res.sendFile(__dirname + '/groups.json')
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



fs.readFile('groups.json', 'utf8', function(error, data) {
    // console.log(data);
    var obj = JSON.parse(data);
    console.log(obj.groups.a);
    for(var i =0; i<obj.length; i++){
        
    }
});


