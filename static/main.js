$(function(){
    // $.ajax({
    //     url: "http://localhost:3091/get_equipes",
    //     success : function(data){
    //         console.log(data);
    //         for (var cle in data){
    //             $("#test").append('<img class="w-25" src='+data[cle].flag+'>' + data[cle].pays )
    //         }
    //     }
    // });
})


var services = function(param){ 
    var service = "http://localhost:2004/";
    // console.log(service);
    // console.log(param)
    switch (param) {
        case 'equipes':
            service = service+"get_equipes";
            // console.log(service);
            break;
        case 'groups':
            service = service+"get_groups";
            // console.log(service);
            break;
        case 'knockout':
            service = service+"get_knockout";
            // console.log(service);
            break;
        default:
            // console.log('error');
            break;
    }  
    $.ajax({
        type: 'GET',
        url: service,
        success : function(data){
            //console.log(data);
            return data;
        },
        failed : function(data, status){
            return false;
        }
    })
}





// var equipes = services("equipes")
// services("groups")