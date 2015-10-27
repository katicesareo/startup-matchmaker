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


var Gallery = function(user){



    this.elem = document.createElement('div'); //created div
    this.ul = document.createElement('ul');  //created ul
    //this.li = document.createElement('li');  //created li
    //createn another div


    this.elem.classList.add('gallery');  //added class "gallery" to div
    //this.photoDiv.classList.add('meta');  //we got meta from css, meta is a class

    this.elem.appendChild(this.ul);  //appended ul to "gallery" div
    //this.ul.appendChild(this.li);   //appended li to ul

    //document.getElementById('container').appendChild(this.elem);  //grabbing "container" div that is in HTML and appended "gallery" div (child) to "container" div (parent)



    photos.forEach(function(photo) { //looping through photos
     var li = document.createElement('li'); // create a new li everytime we loop
     li.style.backgroundImage = '#FFFFFF'; //set the background image of the li
     li.style.backgroundSize = 'cover';
     //li.innerHTML  = '<div class="meta"></div>';
     li.innerHTML = '<div class="stats"><div>'+username+'</div></div><div class="meta"><h5>'+avatar_image+'</h5></div>';   //set the innerHTML (a lot more needed here)
     //li.innerHTML = '<div="meta"><h5>'+photo.name+'</h5><h6>'+photo.user.firstname+''+photo.user.lastname+'</h6></div>''<div class="stats">'+photo.rating+''</div>’;


     this.ul.appendChild(li);
     console.log(photo);


   }.bind(this));


  document.getElementById('container').appendChild(this.elem);  //grabbing "container" div that is in HTML and appended "gallery" div (child) to "container" div (parent)


};


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


// aside-container: string for list
var
