
// DYNAMISER LES TITRES AVEC UNE BOUCLE POUR SIMPLIFIER LE CODE



$(function () {
    services("knockout", function (data) {

        var rounds = data.knockout;
        var monhtml = "";
console.log( data.knockout)
        //je boucle ici
        var compteur = 0;
        $.each(rounds, function (index, value) {
           
            console.log(value.name);
            monhtml = "<span>" + value.name + "</span>";
            
            // condition intermédiaire pour modifier les id pour appliquer l'affichage des rounds
            
            if (compteur == 0){
                $('#montest0').append(monhtml);
            }
            if (compteur == 1){
                $('#montest1').append(monhtml);
            }
            if (compteur == 2){
                $('#montest2').append(monhtml);
            }
            if (compteur == 3){
                $('#montest3').append(monhtml);
            }
            if (compteur == 4){
                $('#montest4').append(monhtml);
            }

            compteur = compteur +1;
            // permet de remettre à zero la boucle  
            monhtml="";
        });
        //boucle fini ici

    })
});


// FIN DE LA BOUCLE
