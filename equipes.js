var express = require('express');
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


//Routes
router.get('/', function(req, res){
   res.json(equipes);
});



//Exporte les routes
module.exports = router;


