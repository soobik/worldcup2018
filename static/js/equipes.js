$.ajax({
    url: 'http://localhost:3012/get_equipes',
    type : 'GET',
    success : function(data){
        tab = []
        console.log(data);
        for (var i=0; i<4; i++){
            $('#groupeA').append('<li class="list-inline-item col-md-2 text-center">'+ '<p>' + data[i].pays + '</p>' + '<img class="w-25" src ="'+ data[i].flag+'">'+ '</li>')
            
        }
        for (var i=4; i<8; i++){
            $('#groupeB').append('<li class="list-inline-item col-md-2 text-center">'+ '<p>' + data[i].pays + '</p>' + '<img class="w-25" src ="'+ data[i].flag+'">'+  '</li>')
            
        }
        for (var i=8; i<12; i++){
            $('#groupeC').append('<li class="list-inline-item col-md-2 text-center">'+ '<p>' + data[i].pays + '</p>' + '<img class="w-25" src ="'+ data[i].flag+'">'+  '</li>')
            
        }
        for (var i=12; i<16; i++){
            $('#groupeD').append('<li class="list-inline-item col-md-2 text-center">'+ '<p>' + data[i].pays + '</p>' + '<img class="w-25" src ="'+ data[i].flag+'">'+  '</li>')
            
        }
        for (var i=16; i<20; i++){
            $('#groupeE').append('<li class="list-inline-item col-md-2 text-center">'+ '<p>' + data[i].pays + '</p>' + '<img class="w-25" src ="'+ data[i].flag+'">'+  '</li>')
            
        }
        for (var i=20; i<24; i++){
            $('#groupeF').append('<li class="list-inline-item col-md-2 text-center">'+ '<p>' + data[i].pays + '</p>' + '<img class="w-25" src ="'+ data[i].flag+'">'+  '</li>')
            
        }
        for (var i=24; i<28; i++){
            $('#groupeG').append('<li class="list-inline-item col-md-2 text-center">'+ '<p>' + data[i].pays + '</p>' + '<img class="w-25" src ="'+ data[i].flag+'">'+  '</li>')
            
        }
        for (var i=28; i<32; i++){
            $('#groupeH').append('<li class="list-inline-item col-md-2 text-center">'+ '<p>' + data[i].pays + '</p>' + '<img class="w-25" src ="'+ data[i].flag+'">'+  '</li>')
            
        }
    }
})
