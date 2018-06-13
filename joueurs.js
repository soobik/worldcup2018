$(function(){

    $(document).ready(function() {
        $.ajax({
            type: 'GET',
            url: 'http://localhost:3002/joueurs',
            success: function (listeJoueurs) {
                for (var i = 0; i < listeJoueurs.length; i++) {
                    var joueurs = "";
                   // var matchEnCours = "";
                    //var scoreFinal = "";

                    if(listeJoueurs[i].country === 1){
                       joueur = joueurs.nomJoueur + joueurs.pays ;
                    }

                    else if (listeJoueurs[i].country === 2){
                        joueur = joueurs.nomJoueur + joueurs.pays ;
                    }
                    
                    else if (listeJoueurs[i].country === 3){
                        joueur = joueurs.nomJoueur + joueurs.pays ;
                    }
                    else if (listeJoueurs[i].country === 4){
                        joueur = joueurs.nomJoueur + joueurs.pays ;
                    }
                    else if (listeJoueurs[i].country === 5){
                        joueur = joueurs.nomJoueur + joueurs.pays ;
                    }
                    else if (listeJoueurs[i].country === 6){
                        joueur = joueurs.nomJoueur + joueurs.pays ;
                    }
                    else if (listeJoueurs[i].country === 7){
                        joueur = joueurs.nomJoueur + joueurs.pays ;
                    }
                    else if (listeJoueurs[i].country === 8){
                        joueur = joueurs.nomJoueur + joueurs.pays ;
                    }
                };
                $('.liste_joueurs').append('<li class="list-group-item">"' + joueurs.nomJoueur + ' ' + joueurs.pays +'</li>');
            },
            error: function (resultat, statut, erreur) {
    
                alert('ERROR 404');
            }
        });
    });  
});
