//counter
var button = document.getElementById('counter');
button.onClick = function(){
    // make a request to counter end point.
     var request = new XMLHttpRequest();
     
    //capture the response and store it in a variable.
    request.onreadystatechange = function(){
        if(request.readystate === XMLHttpRequest.DONE){
            // take some action
            if(request.status === 200){
                var counter = request.responseText;
                var span = document.getElementById('count');
                innerHTML = counter.toString();
            }
        }
    }
    
    //Make the request.
    request.open('GET', 'https://imad.hasura.io/code/files/ui%2Fmain.js', true);
    request.send(null);
   
   
};