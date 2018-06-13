

    $(document).ready(function() {
        $.ajax({
            type: 'GET',
            url: 'http://localhost:4002/get_joueurs',
            success: function (listeJoueurs) {
                for (var i = 0; i < listeJoueurs.joueurs.length; i++) {
                    
                    var player = "";
                   
                     if(listeJoueurs.joueurs[i] === 1){
                        player = joueurs.nomJoueur + joueurs.pays;
                     }

                    $('#liste_joueurs').append('<li class="list-group-item"><h2>' + listeJoueurs.joueurs[i].nomJoueur + '<h2> ' + listeJoueurs.joueurs[i].pays+ '</li>');
                };
                
            },
            error: function (resultat, statut, erreur) {
    
                alert('ERROR 404');
            }
        });
    });  

