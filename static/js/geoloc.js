/**
 *  Affichage de la map google avec selon les coordonées
 * @param {Object} coordonnees 
 * @param {String} nameStadium 
 * @param {String} imgStadium 
 */
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