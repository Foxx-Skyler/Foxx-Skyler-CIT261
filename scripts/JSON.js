function getJSON(){
    var request = new XMLHttpRequest();
    request.open('GET', 'https://therpgplayer.github.io/Skyler-Fluency/scripts/cartoon-list.json');
    request.onload = function(){
        var data = JSON.parse(request.responseText);
        var myJSON = JSON.stringify(request.responseText);
        var htmlString = '';
        
        for (i = 0; i < data.length; i++) {
            htmlString += '<p>' + data[i].name + ' is a ' + data[i].species + ', owned by the ' + data[i].company + ' company. </p>';
        }
        
        var element = document.getElementById('jsonText');
        element.innerHTML = htmlString;
        
        document.getElementById("stringified").innerHTML = myJSON;
        
        console.log(data);
    };
    request.send();
}

function getStringify(){
    
    var arr = [ "Mickey", "Donald", "Goofy", "Pluto" ];
    var myJSON = JSON.stringify(arr);
    document.getElementById("stringified").innerHTML = myJSON;
    
}