var req = new xhrHandler();
var button = document.getElementById('createuser');


button.addEventListener('click',function(){
  console.log('click');
  req.request('POST', 'http://vvvvvv.club/api/user', { 
    firstName: document.getElementById("firstNameInput").value,
    lastName: document.getElementById("lastNameInput").value,
    username: document.getElementById("userNameInput").value,
    password: document.getElementById("passwordInput").value,
    email: document.getElementById("emailInput").value,
    avatar: {
      image: document.getElementById("imageInput").value
    }
  }).then(function(){
    //do something when there is a response
  });
});
