// function geoloc (coordonnees, nameStadium, imgStadium) {

// function geoloc(coordonnees, nameStadium, imgStadium) {
//     // var coordonnees = {};
//     var map = new google.maps.Map(document.getElementById('map'), {
//       zoom: 10,
//       center: coordonnees
//     });
//     var contentString = '<div id="content">'+
//         '<div id="siteNotice">'+
//         '</div>'+
//         '<h1 id="firstHeading" class="firstHeading"> '+ nameStadium +' </h1>'+
//         '<div id="bodyContent">'+
//         '<p><img src='+imgStadium+'></p>'+
//         '</div>'+
//         '</div>';

//     var infowindow = new google.maps.InfoWindow({
//       content: contentString
//     });

//     var marker = new google.maps.Marker({
//       position: coordonnees,
//       map: map 
//     //   title: 'Uluru (Ayers Rock)'
//     });
//     marker.addListener('click', function() {
//       infowindow.open(map, marker);
//     });
//   }

$("#test").click(function () {
    geoloc({ lat: 55.817765, lng: 37.5515217 }, 'Luzhniki Stadium', 'https://upload.wikimedia.org/wikipedia/commons/e/e6/Luzhniki_Stadium%2C_Moscow.jpg');

});
$("#test2").click(function () {
    geoloc({ lat: 55.817765, lng: 37.440363 }, 'Otkrytiye Arena', 'https://upload.wikimedia.org/wikipedia/commons/5/50/Stadium_Spartak_in_Moscow.jpg');

});

$(document).ready(function () {
    // geoloc({lat: 55.817765,lng: 37.5515217}, 'Luzhniki Stadium', 'https://upload.wikimedia.org/wikipedia/commons/e/e6/Luzhniki_Stadium%2C_Moscow.jpg');

    // geoloc({lat: 55.817765,lng: 37.5515217}, 'Luzhniki Stadium', 'https://upload.wikimedia.org/wikipedia/commons/e/e6/Luzhniki_Stadium%2C_Moscow.jpg');
    // geoloc({lat: 55.817765,lng: 37.5515217}, 'Luzhniki Stadium', 'https://upload.wikimedia.org/wikipedia/commons/e/e6/Luzhniki_Stadium%2C_Moscow.jpg');
    // geoloc({lat: 55.817765,lng: 37.5515217}, 'Luzhniki Stadium', 'https://upload.wikimedia.org/wikipedia/commons/e/e6/Luzhniki_Stadium%2C_Moscow.jpg');
    // geoloc({lat: 55.817765,lng: 37.5515217}, 'Luzhniki Stadium', 'https://upload.wikimedia.org/wikipedia/commons/e/e6/Luzhniki_Stadium%2C_Moscow.jpg');
    // geoloc({lat: 55.817765,lng: 37.5515217}, 'Luzhniki Stadium', 'https://upload.wikimedia.org/wikipedia/commons/e/e6/Luzhniki_Stadium%2C_Moscow.jpg');
});

function geoloc(coordonnees, nameStadium, imgStadium) {
    // console.log(uluru,nameStadium,imgStadium);
    var map = new google.maps.Map(document.getElementById('map'), {
        zoom: 10,
        center: coordonnees
    });

    // <h5 class="modal-title" id="exampleModalLongTitle">Modal title</h5>
    var contentString = '<div class="text-center">' +
        '<h1 > ' + nameStadium + ' </h1>' +
        '<img src=' + imgStadium + ' class="w-50 ">' +
        '</div>';

    var infowindow = new google.maps.InfoWindow({
        content: contentString
    });

    var marker = new google.maps.Marker({
        position: coordonnees,
        map: map
        // title: 'Uluru (Ayers Rock)'
    });
    marker.addListener('click', function () {
        infowindow.open(map, marker);
    });
}

// }



