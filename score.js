var express = require('express');
var fs = require('fs');
var router = express.Router();

/**
 * fonction qui recupere tous les scores des pays
 */
function getScore(){
    scores = fs.readFileSync(__dirname + "/datas/scrore.json");
    score = JSON.parse(scores);
    console.log(score);
    return score;
}
/**
 * fonction qui récupére les score des equipes en fonction
 * de l'id
 * @param {string} id 
 */
function getScoreById(id){
    var id_score = 0;
    id_score = id - 1;

    if(id != undefined){
        scores = getScore();
        score = score[id_score];
        console.log(score);
    }
    return score;
}
/**
 * route qui affiche tous les scores de tous les pays
 */
router.get('/', function(req, res){
    var result ="";
    result= getScore();
    res.json(result);
})
/**
 * route qui affiche le score selon l'id de l'équipe choisie
 * qui est passé en parametre url
 */
router.get('/:id', function(req, res){
    var id = req.params.id;
    var result = "";
    result = getScoreById(id);
    res.json(result);
})

module.exports = router;