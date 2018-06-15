
$(document).ready(function() {
    // $('#myModal').on('shown.bs.modal', function () {
    //     $('#myInput').trigger('focus')
    // })
    var url = 'http://localhost:5002/';
    var service_get_equipe = 'get_equipes';
    var service_get_joueurs_ajax = 'joueurs_ajax';
    $.ajax({
        type: 'GET',
        url: url+service_get_equipe,
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

            alert('ERROR 404 1');
        }
    });



    $('#exampleModal').on('shown.bs.modal', function () {
        // Remplis le modal avec nue liste de joueurs
        // TODO : lier la bonne liste de joueurs
        $.ajax({
            type: 'GET',
            url: url+service_get_joueurs_ajax,
            success: function (data) {
                $("#joueurs").empty();
                $("#joueurs").append(data);
                //console.log(data);
                console.log("equipes.js get joueurs_ajax dans modal");
            },
            error: function (resultat, statut, erreur) {

                alert('ERROR 404 2');
            }
        });
    })
});  
