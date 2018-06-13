var express = require('express');
var fs = require('fs');
var router = express.Router();

/**
 * Affiche tous les joueurs
 */
function getjoueurs(){
    joueurs = fs.readFileSync(__dirname+"/datas/joueurs.json");
    joueurs = JSON.parse(joueurs);
    console.log(joueurs);
    return joueurs;
}
/**
 * Route qui affiche tous les joueurs
 */
router.get('/', function(req, res){
    var result = "";
    result = getjoueurs();
    res.json(result);
})
module.exports = router