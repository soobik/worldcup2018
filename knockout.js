var express = require('express');
var router = express.Router();
var fs = require('fs');

/**
 * Affiche tous les knockout
 */
function getKnockout(){
    knockouts = fs.readFileSync(__dirname+"/datas/knockout.json");
    knockout = JSON.parse(knockouts);
    out = knockout;
    return out;
}
/**
 * Affiche les knockout en fonction du round passer en parametre par url 
 * exemple : http://localhost:3012/get_knockout/roud_16 ou 8 ou 4  ou 2
 */
function getKnockoutByRound(round){
    knockout = getKnockout();
    round = knockout.knockout[round];
    return round;
}
/**
 * Route pour afficher tous les knockout
 */
router.get('/', function (req, res) { 
    var result = "";
    result = getKnockout();
    res.json(result);
 });
/**
 * Route pour affiche les knockout classé par round
 */
 router.get('/:round', function(req, res){
    round = req.params.round
    var result = "";
    result = getKnockoutByRound(round);
    res.json(result);
 })

 module.exports = router;