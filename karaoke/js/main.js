var btn = document.getElementById("btn");
var musicContainer = document.getElementById("music-info");

var pull = new XMLHttpRequest();
pull.open('GET', '../api/music_list.json');

pull.onload = function(){
    var ourData = JSON.parse(pull.responseText);
    renderHTML(ourData);
}

//This is a test that outputs first 5 songs in database from the API
function renderHTML(data){
    var htmlString = "";
    
    for (i = 0; i < 5; i++) {
        htmlString += "<p>" + data[i].song + " is a song by " + data[i].artist;
        htmlString += "</p>";
    }
    musicContainer.insertAdjacentHTML('beforeend', htmlString);
}