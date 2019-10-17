var btn = document.getElementById("btn");
var musicContainer = document.getElementById("music-info");

btn.addEventListener("click", function() {
    var pull = new XMLHttpRequest();
    
    pull.open('GET', '../api/music_list.json');
    
    pull.onload = function(){
        if (pull.status >= 200 && pull.status < 400) {
        var ourData = JSON.parse(pull.responseText);
        renderHTML(ourData);
        } else {
            console.log("We connected to the server, but it returned an error.");
        }
    }

    pull.send();

});

//This is a test that outputs first 5 songs in database from the API
function renderHTML(data){
    var htmlString = "";
    
    for (i = 0; i < 5; i++) {
        htmlString += "<p>" + data[i].song + " is a song by " + data[i].artist;
        htmlString += "</p>";
    }
    
    musicContainer.insertAdjacentHTML('beforeend', htmlString);
}