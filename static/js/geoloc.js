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



$(document).ready(function() {      
    geoloc(1,{lat: 55.817765,lng: 37.5515217}, 'Luzhniki Stadium', 'https://upload.wikimedia.org/wikipedia/commons/e/e6/Luzhniki_Stadium%2C_Moscow.jpg');
    // geoloc({lat: 55.817765,lng: 37.5515217}, 'Luzhniki Stadium', 'https://upload.wikimedia.org/wikipedia/commons/e/e6/Luzhniki_Stadium%2C_Moscow.jpg');
    // geoloc({lat: 55.817765,lng: 37.5515217}, 'Luzhniki Stadium', 'https://upload.wikimedia.org/wikipedia/commons/e/e6/Luzhniki_Stadium%2C_Moscow.jpg');
    // geoloc({lat: 55.817765,lng: 37.5515217}, 'Luzhniki Stadium', 'https://upload.wikimedia.org/wikipedia/commons/e/e6/Luzhniki_Stadium%2C_Moscow.jpg');
    // geoloc({lat: 55.817765,lng: 37.5515217}, 'Luzhniki Stadium', 'https://upload.wikimedia.org/wikipedia/commons/e/e6/Luzhniki_Stadium%2C_Moscow.jpg');
    // geoloc({lat: 55.817765,lng: 37.5515217}, 'Luzhniki Stadium', 'https://upload.wikimedia.org/wikipedia/commons/e/e6/Luzhniki_Stadium%2C_Moscow.jpg');
});

function geoloc(id, coordonnees, nameStadium, imgStadium) {
    // console.log(uluru,nameStadium,imgStadium);
    var newMap = document.createElement("div"); 
    newMap.id 
    var map = new google.maps.Map(document.getElementById('map'), {
        zoom: 10,
        center: coordonnees
    });

    var contentString = '<div >' +
        '<div ">' +
        '</div>' +
        '<h1 > ' + nameStadium + ' </h1>' +
        '<div >' +
        '<p><img src='+imgStadium+'></p>'+
        '</div>' +
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



