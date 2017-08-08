console.log('Loaded!');

var element = document.getElementById('main-text');

element.innerHTML = 'New value';

// Move the image
var i = document.getElementById('madi');
var marginLeft = 0;
function moveRight(){
    marginLeft = marginLeft + 10;
    i.style.marginLeft = marginLeft + 'px';
}

i.onclick = function(){
    var interval = setInterval(moveRight, 100);
}