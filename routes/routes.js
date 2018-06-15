var express = require('express');
var router = express.Router();

/**
 * Affiche tous les equipes participante
 * Affiche aussi une equipe choisie en fonction de son id 
 */
var equipes = require('../equipes.js');
router.use('/get_equipes', equipes);
/**
 * affichage des knockout
 */
var knockout = require('../knockout.js');
router.use('/get_knockout', knockout);
router.use('/get_knockoutstadium',knockout);
/**
 * affichage de la totalité des groupes et des groupes en 
 * fonction de leur lettre
 */
var groups = require('../groups.js');
router.use('/get_groups', groups);
/**
 * affiche tous les stade lors de la worldCup
 */
var stadium = require('../stadiums.js');
router.use('/get_stadiums', stadium);
// router.use('/get_stadium', stadium);
/**
 * affiches les scores des pays de la worldcup
 */

var joueurs = require('../joueurs.js');
router.use('/get_joueurs', joueurs);
module.exports = router;
