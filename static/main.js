$(function(){
    $.ajax({
        url: "http://127.0.0.1:3012/equipe",
        success : function(data){
            console.log(data);
            $("#test").append( data[0].pays )
        }
    })
})