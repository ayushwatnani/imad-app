//counter
var button = document.getElementById('counter');

button.onclick = function () {
    // make a request to counter end point.
     var request = new XMLHttpRequest();
     
    //capture the response and store it in a variable.
    request.onreadystatechange = function(){
        if(request.readystate === XMLHttpRequest.DONE){
            // take some action
            if(request.status === 200){
                var counter = request.responseText;
                var span = document.getElementById('count');
                span.innerHTML = counter.toString();
            }
        }
    };
    
    //Make the request.
    request.open('GET', 'http://ayushwatnani.imad.hasura-app.io/counter', true);
    request.send();
   
   
};