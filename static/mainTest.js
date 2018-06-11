$(function(){

    console.log(get_groups());

})

var get_groups = function(){
    $.ajax({url :'http://127.0.0.1:3012/groups', 
        success: function(data){
            console.log(data);
            for (var cle in data){
                $("#test").append(data[cle])
            };
        }
    });
}
