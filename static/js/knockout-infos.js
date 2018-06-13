
/*AJOUT DYNAMIQUE DES TITRES AVEC ID DANS LE HTML*/


//ROUND OF 16

$(function () {
    services("knockout", function (data) {
        console.log(data.knockout.round_16.name);
        $('#round').append(data.knockout.round_16.name);
    })
});


//QUARTER-FINALS

$(function () {
    services("knockout", function (data) {
        console.log(data.knockout.round_8.name);
        $('#quarter').append(data.knockout.round_8.name);
    })
});


//SEMI-FINALS


$(function () {
    services("knockout", function (data) {
        console.log(data.knockout.round_4.name);
        $('#semi').append(data.knockout.round_4.name);
    })
});


//THIRD PLACE PLAY-OFF


$(function () {
    services("knockout", function (data) {
        console.log(data.knockout.round_2_loser.name);
        $('#third').append(data.knockout.round_2_loser.name);
    })
});



//FINAL


$(function () {
    services("knockout", function (data) {
        console.log(data.knockout.round_2.name);
        $('#final').append(data.knockout.round_2.name);
    })
});




/*AJOUT DYNAMIQUE DES SCORES AVEC ID DANS LE HTML*/



//ROUND OF 16


$(function () {
    services("knockout", function (data) {
        console.log(data.knockout.home_result + " " + data.knockout.away_result);
        $('#score1').append(data.knockout.home_result + " " + data.knockout.away_result);
    })
});

