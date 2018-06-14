
$(document).ready(function() {
    
    $.ajax({
        type: 'GET',
        url: 'http://localhost:5002/get_equipes',
        success: function (listeEquipe) {
            for (var i = 0; i < listeEquipe.length; i++) {
                console.log(listeEquipe);
                //recupere les joueurs
                var equipe = "";
                
                    if(listeEquipe.id === 1){
                        equipe = flag + pays;
                    }

                $('#liste_equipe').append('<article class="col-md-2 m-3 border"><p><a href="" data-toggle="modal" data-target="#exampleModal"><img class="w-100" src="' + listeEquipe[i].flag+ '" /></a><h2 class="nom_pays text-center text-primary">'  + listeEquipe[i].pays + '</h2> </p></article>');
                
            };
            
        },
        error: function (resultat, statut, erreur) {

            alert('ERROR 404');
        }
    });
});  
