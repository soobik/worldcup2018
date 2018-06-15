
/**
 * fonction qui en fonction du choix de l'utilisateur lors de l'appel de celle ci
 * execute une fonction ajax qui recupere la data correspondant au choix de l'utilisateur
 * @param {string} param 
 * @param {function} cb 
 */
var reponse = "";
var services = function (param, cb) {

    var service = "http://localhost:3007/";

    switch (param) {
        case 'equipes':
            service = service + "get_equipes";
            break;
        case 'groups':
            service = service + "get_groups";
            break;
        case 'knockout':
            service = service + "get_knockout";
            break;
        case 'stadiums':
            service = service + "get_stadiums";
            break;
        // case 'stadium':
        //     service = service + "get_stadium";
        //     break;
        case 'joueurs':
            service = service + "get_joueurs";
            break;
        case 'knockoutstadium':
            service = service + "get_knockoutstadium";
            break;
        default:
            break;
    }
    myData(service, function (data) {
        reponse = data;
      //  console.log("dans process");
        cb(data);
    }, reponse)

   // console.log("apres mydata ");

    return reponse;
}

myData = function (service, cb, reponse) {
 //   console.log('dans myData');
    $.ajax({
        type: 'GET',
        url: service,
        success: function (data) {
     //       console.log("Dans success Ajax");
            cb(data);
        },
        failed: function (data, status) {
            return false;
        }
    });
}
