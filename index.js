function fetchBooks() {
  // Return the fetch promise
  return fetch('https://anapioficeandfire.com/api/books')
    .then(response => response.json())
    .then(json => {
      renderBooks(json);
      return json; // Return the JSON for testing purposes
    });
}

function renderBooks(books) {
  const main = document.querySelector('main');
  books.forEach(book => {
    const h2 = document.createElement('h2');
    h2.innerHTML = book.name;
    main.appendChild(h2);
  });
}

document.addEventListener('DOMContentLoaded', function() {
  fetchBooks();
});