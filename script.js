//search document by element ID//

/*const search = document.getElementById('search-books');
const bookList = document.getElementById('book-list');

console.log(search, bookList); */

// access document via ClassName//

/*const titles = document.getElementsByClassName('title');
//checks if item is array - returns false as it is not //
console.log(Array.isArray(titles));
//converts item to array - returns true//
console.log(Array.isArray(Array.from(titles)));

Array.from(titles).forEach(function(title){
  console.log(title);
}); 
*/
/*
//query selector practice//

const wmf = document.querySelector('#book-list li:nth-child(2) .name');
//console.log(wmf);

//returns only 1 element, returns first//

var books = document.querySelector('#book-list li .name');
//console.log(books);

//returns All elements that fit the criteria//

books = document.querySelectorAll('#book-list li .name');
//console.log(books);

//best method in this case as it allows you to see the titles clearly//

Array.from(books).forEach(function(book){
    console.log(book);
})
*/

/*
//editing text and HTML content//

var books = document.querySelectorAll('#book-list li .name');

Array.from(books).forEach(function(book){
    book.textContent += '(book title)'; 
})

//with a Nodelist you can use the .forEach method alone i.e books.forEach is valid here//

//set the html to target as a variable//
const bookList = document.querySelector('#book-list');
//replace all with an = //
bookList.innerHTML = '<h2>Books and more books...</h2>';
//+= to append element//
bookList.innerHTML += '<p>This is how you add HTML</p>'
*/

/*
//Nodes//

const banner = document.querySelector('#page-banner');

console.log('#page-banner node type is:', banner.nodeType);

//this returns the type of node we are accessing//

console.log('#page-banner node name is:', banner.nodeName);

//returns the name of node in readable form//

console.log('#page-banner has child nodes:', banner.hasChildNodes());

//returns true if there are child nodes, false if not//

const clonedBanner = banner.cloneNode(true);
console.log(clonedBanner);

//clone a node, true must be set for the full node including child to be selected//
*/

/*
//traversing DOM from parent to child and vice versa//

const bookList = document.querySelector('#book-list');
console.log('the parent node is:', bookList.parentNode);
console.log('the parent node is:', bookList.parentElement.parentElement);

//get child nodes//
console.log(bookList.childNodes);
//get child elements//
console.log(bookList.children);
*/

//traversing between sibling elements//

/*

const bookList = document.querySelector('#book-list');

console.log('#book-list next sibling:', bookList.nextSibling);
console.log('#book-list next element sibling:', bookList.nextElementSibling);
console.log('#book-list previous sibling:', bookList.previousSibling);
console.log('#book-list previous element sibling:', bookList.previousElementSibling);

bookList.previousElementSibling.querySelector('p').innerHTML += '<br />Too cool for everyone else!';

*/

//Event listeners//

//delete function on site//

/*var btns = document.querySelectorAll('#book-list .delete');

Array.from(btns).forEach(function(btn){
    btn.addEventListener('click' , function(e){
        const li = e.target.parentElement;
        li.parentNode.removeChild(li)
    })
})*/

//how to prevent default behaviour of link//

/*
const link = document.querySelector('#page-banner a');

link.addEventListener('click', function(e){
    e.preventDefault();
    console.log('navigation to', e.target.textContent,'was prevented');
})
*/

//event bubbling, used for delete function//

const list = document.querySelector('#book-list ul');

list.addEventListener('click', function(e){
    if(e.target.className == 'delete'){
        const li = e.target.parentElement;
        list.removeChild(li);
    }
})

//interacting with forms//

//add books//

const addForm = document.forms['add-book'];
addForm.addEventListener( 'submit', function(e){
    e.preventDefault();

    //create new elements//
    const value = addForm.querySelector('input[type ="text"]').value;
    const li = document.createElement('li');
    const bookName = document.createElement('span');
    const deleteBtn = document.createElement('span');

    // add text content//

    bookName.textContent = value;
    deleteBtn.textContent = 'delete';

    // append to DOM //
    li.appendChild(bookName);
    li.appendChild(deleteBtn);
    list.appendChild(li);
    //list.insertBefore(li, list.querySelector('li:first-child'));
    
    //append classes//
    bookName.classList.add("name");
    deleteBtn.classList.add("delete");

    // reset form input//

    document.getElementById('add-book').reset();
    
});

// hide books using checkbox//

const hideBox = document.querySelector("#hide");
hideBox.addEventListener('change', function(e){
    if(hideBox.checked){
        list.style.display = "none";
    } else {
        list.style.display = "initial";
    }
})

// filter books//

const searchBar = document.forms["search-books"].querySelector('input');
searchBar.addEventListener('keyup',function(e)  {
    const term = e.target.value.toLowerCase();
    const books = list.getElementsByTagName('li');
    Array.from(books).forEach(function(book) {
        const title = book.firstElementChild.textContent;
        if(title.toLowerCase().indexOf(e.target.value)!= -1){
            book.style.display = "block";
        } else {
            book.style.display = 'none';
        }
    });
});

// tabbed content //

const tabs = document.querySelector('.tabs');
const panels = document.querySelectorAll('.panel');
tabs.addEventListener('click', function(e){
    if(e.target.tagName == 'LI'){
        const targetPanel = document.querySelector(e.target.dataset.target);
        Array.from(panels).forEach(function(panel){
            if (panel == targetPanel){
                panel.classList.add('active');
            } else {
                panel.classList.remove('active');
            }
        });
    }
});

