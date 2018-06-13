var express = require('express');
var fs = require('fs')
var router = express.Router();

//TODO : rendre dynamique une fois que ça fonctione
var equipes = [
    {
        "id": 1,
        "pays": "Russie",
        "flag": "https://upload.wikimedia.org/wikipedia/commons/d/d4/Flag_of_Russia.png"
    },
     {
        "id": 2,
        "pays": "Arabie Saoudite",
        "flag": "https://upload.wikimedia.org/wikipedia/commons/2/21/Flag_of_Colombia.svg"
    }
];

//fonction asynchrone
function _get_equipe_from_json_async(){
    fs.readFile(__dirname+"/datas/equipes.json", "UTF-8",function read(err, data){
        if(err)
       {
           throw err;
       } 
       equipes = data;
       //console.log(equipes);
       processFile();
   });

}



function processFile(){
   //
   
}

function getEquipeById(id){
    var id_in_json = 0;
    id_in_json = id - 1;

    if(id != undefined)
    {
        equipes = fs.readFileSync(__dirname+"/datas/equipes.json"); 
        equipe = JSON.parse(equipes); 
        equipe = equipe[id_in_json]; 
        console.log(equipe);
    } 
    return equipe;
}

//Routes
/**
 * Affiche les équipes en fonction de leurs id passer en parametre
 * dans l'url 
 * exemple : http://localhost:3012/get_equipes/1 ou 2 ou 3 etc...
 */
router.get('/:id', function(req, res){
   //_get_equipe_from_json();
   var json_a_envoyer = "";
   var id = req.params.id;
   equipes = fs.readFileSync(__dirname+"/datas/equipes.json");
   equipes = JSON.parse(equipes);
   json_a_envoyer = getEquipeById([id]);
   res.json(json_a_envoyer);

   //test getEquipeById()
    // json_a_envoyer = getEquipeById(4);
    //
});

//Exporte les routes
module.exports = router;

