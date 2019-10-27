iAmDiv.before('before');
iAmDiv.after('after');

let firstLi = document.createElement('li');
firstLi.innerHTML = 'the real 1st';
iAmOl.prepend(firstLi);

let lastLi = document.createElement('li');
lastLi.innerHTML = 'the real last';
iAmOl.append(lastLi);

let newP = document.createElement('p');
newP.innerHTML = 'My name is [Hidden]';
iAmP.replaceWith(newP);