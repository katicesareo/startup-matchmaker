// test variable text - returning the username/image of each user in the gallery
var user =[{
  firstName: "kris",
  lastName: "Coulson",
  username: "kris",
  password: "password",
  avatar: {
    image: "kkjajkdssds"
  }
}]
console.log(user[0].lastName)
//drag and drop
//add below into loop with each li


//dragged function 
var div = document.getElementById('dragged');
console.log(div)
div.addEventListener('dragstart', function(ev){
    dragged = event.target;
    event.target.style.opacity = .5;
});

div.addEventListener("dragged", function(event){
  event.target.styleopacity= "";
}, false);

//drop function
document.addEventListener("drop", function(event){
  //prevent default action
  event.preventDefault();
  //move dragged elem to the selected drop target
  if (event.target.className == "droppable") {
      div.parent.Node.removeChild(div);
      div.classList.remove('drag');
      div.classList.add('drag2');
  };
})
// build loop through container
