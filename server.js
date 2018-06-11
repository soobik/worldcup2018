const express = require('express');
const app = express();

app.use(express.static('public'));

app.get('/', function (req, res) {
    res.sendFile(__dirname, + '/index.html')
});

/**
 * Route vers le fichier groups.json
 */
app.get('/groups', function(req, res){
    res.sendFile(__dirname + ('/groups.json'))
});

app.listen(3012, function(){
    console.log('server ON');
})