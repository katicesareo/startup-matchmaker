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
    this.addForm.innerHTML = '<input type="text">';
