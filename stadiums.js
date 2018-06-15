var express = require('express');
var fs = require('fs');
var router = express.Router();

/**
 * Affiche tous les stades
 */
function getStadium(){
    stadiums = fs.readFileSync(__dirname+"/datas/stadiums.json");
    stadium = JSON.parse(stadiums);
  //  console.log(stadium);
    return stadium;
}
function getStadiumById(nb){
    stadiums = getStadium();
    stadium = stadiums.stadiums[nb-1];
  //  console.log(stadium);
    return stadium;
}
// router.get('/get_stadiums/:id', function(req, res){
//     id = req.params.id;
//     var result = "";
//     result = getStadiumById(id);
//  //   console.log(result.name);
//     res.json(result);
// });
/**
 * Route qui affiche tous les stades
 */
router.get('/', function(req, res){
    var result = "";
    result = getStadium();
    res.json(result);
})
/**
 * Route qui affiche le stade choisi 
 */
router.get('/:id', function (req, res) {
    var id = req.params.id;
 //   console.log(id)
    var result = "";
    result = getStadiumById(id);
    console.log(result);
    res.json(result);
  })
module.exports = router