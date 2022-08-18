//search document by element ID//

/*const search = document.getElementById('search-books');
const bookList = document.getElementById('book-list');

console.log(search, bookList); */

// access document via ClassName//

const titles = document.getElementsByClassName('title');
//checks if item is array - returns false as it is not //
console.log(Array.isArray(titles));
//converts item to array - returns true//
console.log(Array.isArray(Array.from(titles)));

Array.from(titles).forEach(function(title){
  console.log(title);
});





