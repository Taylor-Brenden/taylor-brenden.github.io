var pull = new XMLHttpRequest();
pull.open('GET', '../api/music_list.json');
pull.onload = function(){
    var ourData = JSON.parse(pull.responseText);
}
