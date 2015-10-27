var addForm = function(title){

    // create an empty array to store the list elements
    this.list = [];
    // store the title
    this.title = title;

    // create all the elements
    this.elem = document.createElement('div');
    this.header = document.createElement('header');
    this.addForm = document.createElement('div');
    this.ul = document.createElement('ul');

    // add classes where needed for styling
    this.addForm.classList.add('add-form');


    //set the content of each element
    this.header.innerHTML = <h3>'+title+'</h3><div class ="button add"></div>;
    this.addForm.innerHTML = '<input type="text">';
    this.addForm.classList.add('close');

    // append the elements to the container
    this.elem.appendChild(this.header);
    this.elem.appendChild(this.addForm);
    this.elem.appendChild(this.ul);

    // select the element with a class 'add' and make it open the form and focus the input field
       this.header.querySelectorAll('.add')[0].addEventListener('click',function(ev){
            this.addForm.classList.remove('close');
            this.addForm.classList.add('open');
            this.addForm.querySelectorAll('input')[0].focus();
       }.bind(this));

       // function that adds an item
    Accordian.prototype.addItem = function(item) {
      // push the item to the list
      this.list.push(item);
      // create a li
      var listItem = document.createElement('li');
      // set the content of the li
      listItem.innerHTML = '<span>'+item.content+'</span>';
