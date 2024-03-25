const book = {
  title: "The secrets of the millionaire mind",
  author: "T. Harv Eker",
  yearPublication: 2005,
  genreBook: "Investments",
  avaliation: 0,
  avaliation: { grade: 4.5, comment: "Great Reading!" }
};

//Instantiate the book object with data from a book you like and print the book details to the console.
console.log(`Book details:
title: ${book.title}
Author: ${book.author}
Year publication: ${book.yearPublication}
Genr: ${book.genreBook}`);

// put the current year in the object

const currentYear = new Date().getFullYear();
book.agePublication = currentYear - book.yearPublication;

// show deatails with []
console.log('Book details:')
console.log('Author: ' + book['title'])
console.log('Author: ' + book['author'])
console.log('Year of publication: ' + book['yearPublication'])
console.log('Genre Book: ' + book['genreBook'])

//if in the object

if (book.avaliation === null) {
  book.avaliation = 9;
} else {
  console.log(book, "The book has already been reviewed");
}

//changing the book genre
book.genreBook = 'Aventura'

//deleting object properties

delete book.avaliation

console.log(book)
