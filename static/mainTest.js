
$.ajax({
    url: "http://127.0.0.1:3012/datas/groups.json",
    success : function(data){
        console.log(data.groups[a])
        for (var i=0; i<data.length; i++){
            $("#test").append('<p>' + data[i].groups + '</p>')
        }
    }
})