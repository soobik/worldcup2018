

    $(document).ready(function() {
        var equipes = [];

        //recupere les equipes
        services("equipes", function (data) {
            equipes = data;
            //console.log(equipes[5].flag);
        })


        $.ajax({
            type: 'GET',
            url: 'http://localhost:5002/get_joueurs',
            success: function (listeJoueurs) {
                for (var i = 0; i < listeJoueurs.joueurs.length; i++) {
                    //recupere les joueurs
                    var player = "";
                   
                     if(listeJoueurs.joueurs[i] === 1){
                        player = joueurs.nomJoueur + joueurs.id_equipes;
                     }

                    $('#liste_joueurs').append('<li class="list-group-item"><h4>' + listeJoueurs.joueurs[i].nomJoueur + '</h4>' + equipes[listeJoueurs.joueurs[i].id_equipes-1].pays +  '</p><img class="player_flag" src="' + equipes[listeJoueurs.joueurs[i].id_equipes-1].flag + '" /></li>');
                };
                
            },
            error: function (resultat, statut, erreur) {
    
                alert('ERROR 404');
            }
        });
    });  

