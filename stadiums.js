var express = require('express');
var fs = require('fs');
var router = express.Router();

/**
 * Affiche tous les stades
 */
function getStadium(){
    stadiums = fs.readFileSync(__dirname+"/datas/stadiums.json");
    stadium = JSON.parse(stadiums);
    console.log(stadium);
    return stadium;
}
/**
 * Route qui affiche tous les stades
 */
router.get('/', function(req, res){
    var result = "";
    result = getStadium();
    res.json(result);
})
module.exports = router