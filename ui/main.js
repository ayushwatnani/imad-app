//counter
var button = document.getElementById('counter');
button.onClick = function(){
    // make a request to counter end point.
    //capture the response and store it in a variable.
    //render the variable in the correct span.
    var request = new XMLHttpRequest();
    counter = counter + 1;
    var span = document.getElementById('count');
    innerHTML = counter.toString();
};