function fetchBooks() {
  // Return the fetch call to ensure it can be tested
  return fetch("https://anapioficeandfire.com/api/books")
    .then(response => {
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
      return response.json();
    })
    .then(renderBooks) // Pass the fetched book data to renderBooks
    .catch(error => console.error("Error fetching books:", error));
}

function renderBooks(books) {
  const main = document.querySelector("main");
  books.forEach(book => {
    const h2 = document.createElement("h2");
    h2.innerHTML = book.name; // API uses `name` instead of `title`
    main.appendChild(h2);
  });
}

// Call fetchBooks when the page loads
document.addEventListener("DOMContentLoaded", function () {
  fetchBooks();
});
