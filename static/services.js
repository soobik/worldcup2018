var reponse = "";

<<<<<<< HEAD
var services = function(param,cb){ 
    var service = "http://localhost:3012/";
    switch (param) {
        case 'equipes':
            service = service+"get_equipes";
            break;
        case 'groups':
            service = service+"get_groups";
            break;
        case 'knockout':
            service = service+"get_knockout";
=======
var services = function (param, cb) {
    var service = "http://localhost:2004/";
    // var myData = "";
    // console.log(service);
    // console.log(param)
    switch (param) {
        case 'equipes':
            service = service + "get_equipes";
            // console.log(service);
            break;
        case 'groups':
            service = service + "get_groups";
            // console.log(service);
            break;
        case 'knockout':
            service = service + "get_knockout";
            // console.log(service);
>>>>>>> worldcup2018/master
            break;
        case 'stadiums':
            service = service + "get_stadiums";
        default:
            break;
    }

    myData(service, function (data) {
        reponse = data;
        console.log("dans process");
        console.log("dans process " + reponse);
        cb(data);

        //console.log(data);

    }, reponse)

    console.log("apres mydata " + reponse);

    return reponse;

}

myData = function (service, cb, reponse) {
    console.log('dans myData');
    $.ajax({
        type: 'GET',
        url: service,
        success: function (data) {
            console.log("Dans success Ajax");
            cb(data);
        },
        failed: function (data, status) {
            return false;
        }
    });


}
