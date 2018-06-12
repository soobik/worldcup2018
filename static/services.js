var services = function(param){ 
    var service = "http://localhost:2004/";
    // var myData = "";
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

    console.log("Avant myData");

    myData = function(err, cb){
        console.log('toto');
    $.ajax({
        type: 'GET',
        url: service,
        success : function(data, cb){
            console.log("Dans success Ajax");
            var cb = function(data){
                console.log("dans le callback de success");
            }
            cb();
            // datas = data;
            
            //return data;
        },
        failed : function(data, status){
            return false;
        }
        });
        
       
    }
    
    //myData();
    console.log();
    
    var traitement = function(){
        console.log("dans process");
    }
    
    // console.log(myData);    
}




// var equipes = services("equipes")
// services("groups")