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
                       $('.liste_joueurs').append('<article class="col-md-6>"' + joueurs.nomJoueur + '</artcile>');
                    }

                    else{
                        $('.liste_joueurs').append('<article class="col-md-6>"' + joueurs + '</artcile>');
                    }
                
                };
            },
            error: function (resultat, statut, erreur) {
    
                alert('ERROR 404');
            }
        });
    });  
});
