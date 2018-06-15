var express = require('express');
var fs = require('fs');
var router = express.Router();


/**
 * Affiche la totalité des groupes et leurs détails
 */
function getGroups() {
  groups = fs.readFileSync(__dirname + "/datas/groups.json");
  group = JSON.parse(groups);
  return group;

}
/**
 * Affiche les groupes en fonction de leurs lettre a, b, c etc ...
 */
function getGroupsLetter(lettre) {
  group = getGroups();
  groups = group.groups[lettre];
  return groups;
}
/**
 * Route pour afficher tout les groupes
 */
router.get('/', function (req, res) {
  var result = "";
  result = getGroups()
  res.json(result);

})
/**
 * Route pour afficher les groupes en fonction de leurs 
 * lettre passer en paramétre dans l'url
 * exemple : http://localhost:3012/get_groups/a ou b ou c etc...
 */
router.get('/:lettre', function (req, res) {
  var lettre = req.params.lettre;
  var result = "";
  result = getGroupsLetter(lettre);
  res.json(result);
})

module.exports = router
