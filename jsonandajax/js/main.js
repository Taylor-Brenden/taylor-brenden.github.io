//creating some variables to be used throughout code
var pageCounter = 1;
var animalContainer = document.getElementById("animal-info");
var btn = document.getElementById("btn");

//what happens when button is clicked
btn.addEventListener("click", function() {
    var ourRequest = new XMLHttpRequest(); //XMLHttpRequest is an inherent object that requests data from another source without refreshing browser
    ourRequest.open('GET', 'https://learnwebcode.github.io/json-example/animals-' + pageCounter + '.json'); //GET pulls from a json file, while the url is the location of said file
    ourRequest.onload = function() { //onload is a method that initiates immediately as a page is loaded
        if (ourRequest.status >= 200 && ourRequest.status < 400) { 
            var ourData = JSON.parse(ourRequest.responseText); //JSON.parse converts the json file as plaintext to javascript objects //responseText is the text from ourRequest, which is the url provided above.
            renderHTML(ourData); //renderHTML is a function created below filled with ourData, which is the objects from the url json file.
        } else {
            console.log("We connected to the server, but it returned an error.");
        }
    
    };

    ourRequest.onerror = function() { // another way to error handle
        console.log("Connection error");
    };

    ourRequest.send(); //The method that actually sends the request

    pageCounter++;

    if (pageCounter > 3) {
        btn.classList.add("hide-me");
    }
});

function renderHTML(data) { //this function simply organizes the object values into a readable format
    var htmlString = "";

    for (i = 0; i < data.length; i++) {
        htmlString += "<p>" + data[i].name + " is a " + data[i].species + " that likes to eat ";

        for (ii = 0; ii < data[i].foods.likes.length; ii++) {
            if (ii == 0) {
                htmlString += data[i].foods.likes[ii];
            } else {
                htmlString += " and " + data[i].foods.likes[ii];
            }
        }

        htmlString += ' and dislikes ';

        for (ii = 0; ii < data[i].foods.dislikes.length; ii++) {
            if (ii == 0) {
                htmlString += data[i].foods.dislikes[ii];
            } else {
                htmlString += " and " + data[i].foods.dislikes[ii];
            }
        }

        htmlString += '.</p>';

    }

    animalContainer.insertAdjacentHTML('beforeend', htmlString); //insertAdjacentHTML is an inherent method as well as beforeend is an inherent value //It basically adds html before the end of animalContainer which is an empty div
}