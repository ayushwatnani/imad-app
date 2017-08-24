//Submit username/password to login 

var submit = document.getElementById('submit_btn');
submit.onclick = function(){
  //create a request object
  var request = new XMLHttpRequest();
  
  //capture the response and store it in a variable
  request.onreadystatechange = function() {
      if(request.readyState === XMLHttpRequest.DONE){
          //take some action
          if(request.status === 200){
              //capture a list of names and render it as a list
             console.log('user logged in');
             alert('Logged in successfully');
          }else if(request.status === 403){
              alert('username/password incorrect');
          }else if(request.status === 500){
              alert('something went wrong on the server');
          }
      }
  };
  
  var username = document.getElementById('username');
  var password = document.getElementById('password');
  console.log(username);
  console.log(password);
  var name = nameInput.value;
  request.open('POST', 'http://ayushwatnani.imad.hasura-app.io/login', true);
  request.setRequestHeader('Content-Type', 'application/json');
  request.send(JSON.stringify({username: username, password: password}));
};