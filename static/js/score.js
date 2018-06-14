

/*AJOUT D'UNE BOUCLE POUR LES SCORES*/


$(function () {
    services("knockout", function (data) {
        if (data) {
            for (var i = 0; i <= data.length; i++) {

                if (i == 0)
                    $("#score1").append(data.knockout.home_result + " " + data.knockout.away_result);
                else if (i != 0)
                    $("#score1").append(data.knockout.home_result + " " + data.knockout.away_result);
            }
        }
    });
});


/*DYNAMISER LES TITRES AVEC UNE BOUCLE POUR SIMPLIFIER LE CODE*/

$(function () {
    services("knockout", function (data) {
        if (data) {
            data = data.knockout.round_16;
            //console.log(data);

            // for(var knockout in dataset) { 
            //     console.log(knockout); 
            //  }
            
            // data.forEach(function(element) {
            //     console.log(element);
            //   });

            //   Object.keys(data.matches).each(function(key, i, matches) {
            //     var matches = matches[key];
               
            //     // ...
            //   });

              $.each(data.matches, function( index, value ) {
                //alert( index + ": " + value );

                //console.log( index + ": " + value );
                console.log(value);
              });
        }
    });
});




