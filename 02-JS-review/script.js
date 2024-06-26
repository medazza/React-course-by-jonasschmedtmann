const data = [
  {
    id: 1,
    title: "The Lord of the Rings",
    publicationDate: "1954-07-29",
    author: "J. R. R. Tolkien",
    genres: [
      "fantasy",
      "high-fantasy",
      "adventure",
      "fiction",
      "novels",
      "literature",
    ],
    hasMovieAdaptation: true,
    pages: 1216,
    translations: {
      spanish: "El señor de los anillos",
      chinese: "魔戒",
      french: "Le Seigneur des anneaux",
    },
    reviews: {
      goodreads: {
        rating: 4.52,
        ratingsCount: 630994,
        reviewsCount: 13417,
      },
      librarything: {
        rating: 4.53,
        ratingsCount: 47166,
        reviewsCount: 452,
      },
    },
  },
  {
    id: 2,
    title: "The Cyberiad",
    publicationDate: "1965-01-01",
    author: "Stanislaw Lem",
    genres: [
      "science fiction",
      "humor",
      "speculative fiction",
      "short stories",
      "fantasy",
    ],
    hasMovieAdaptation: false,
    pages: 295,
    translations: {},
    reviews: {
      goodreads: {
        rating: 4.16,
        ratingsCount: 11663,
        reviewsCount: 812,
      },
      librarything: {
        rating: 4.13,
        ratingsCount: 2434,
        reviewsCount: 0,
      },
    },
  },
  {
    id: 3,
    title: "Dune",
    publicationDate: "1965-01-01",
    author: "Frank Herbert",
    genres: ["science fiction", "novel", "adventure"],
    hasMovieAdaptation: false,
    pages: 658,
    translations: {
      spanish: "",
    },
    reviews: {
      goodreads: {
        rating: 4.25,
        ratingsCount: 1142893,
        reviewsCount: 49701,
      },
    },
  },
  {
    id: 4,
    title: "Harry Potter and the Philosopher's Stone",
    publicationDate: "1997-06-26",
    author: "J. K. Rowling",
    genres: ["fantasy", "adventure"],
    hasMovieAdaptation: true,
    pages: 223,
    translations: {
      spanish: "Harry Potter y la piedra filosofal",
      korean: "해리 포터와 마법사의 돌",
      bengali: "হ্যারি পটার এন্ড দ্য ফিলোসফার্স স্টোন",
      portuguese: "Harry Potter e a Pedra Filosofal",
    },
    reviews: {
      goodreads: {
        rating: 4.47,
        ratingsCount: 8910059,
        reviewsCount: 140625,
      },
      librarything: {
        rating: 4.29,
        ratingsCount: 120941,
        reviewsCount: 1960,
      },
    },
  },
  {
    id: 5,
    title: "A Game of Thrones",
    publicationDate: "1996-08-01",
    author: "George R. R. Martin",
    genres: ["fantasy", "high-fantasy", "novel", "fantasy fiction"],
    hasMovieAdaptation: true,
    pages: 835,
    translations: {
      korean: "왕좌의 게임",
      polish: "Gra o tron",
      portuguese: "A Guerra dos Tronos",
      spanish: "Juego de tronos",
    },
    reviews: {
      goodreads: {
        rating: 4.44,
        ratingsCount: 2295233,
        reviewsCount: 59058,
      },
      librarything: {
        rating: 4.36,
        ratingsCount: 38358,
        reviewsCount: 1095,
      },
    },
  },
];

function getBooks() {
  return data;
}

function getBook(id) {
  return data.find((d) => d.id === id);
}

/*
// Destructuring

const book = getBook(3);
book;
// const title = book.title;
// const author = book.author;
// title;
// author;

const { title, author, pages, publicationDate, hasMovieAdaptation, genres } =
  book;
console.log(title, author, genres);

const [firstGenre, secondGenre] = genres;
console.log(firstGenre, secondGenre);

const [firstGenre1, secondGenre2, ...restGenres] = genres;
console.log(firstGenre1, secondGenre2, restGenres);

const newGenres = [...genres, "dystopian"];
newGenres;

const updatedBook = {
  ...book,
  // add new property
  moviePublicDate: "2020-01-01",
  // overwrite existing property
  pages: 300,
};
updatedBook;
// function getYear(str) {
//   return str.split("-")[0];
// }
const getYear = (str) => str.split("-")[0];
console.log(getYear(publicationDate));

const summary = `${title} is a book by ${author} (${getYear(
  publicationDate
)}). the book has ${
  hasMovieAdaptation ? "a movie adaptation" : "no movie adaptation"
}`;
summary;

const pagesRange = pages > 1000 ? "over a thousand" : "under a thousand";
pagesRange;

console.log(true && "hello");
console.log(false && "hello");
console.log(hasMovieAdaptation && "this book has a movie adaptation");

// falsy values: false, 0, "", null, undefined, NaN
console.log("azza" && "hello");
console.log(0 && "some string");

console.log(true || "hello");
console.log(false || "hello");

console.log(book.translations.spanish);
const spanishTranslation = book.translations.spanish || "Not translated";
spanishTranslation;

// console.log(book.reviews.librarything.reviewsCount);
// const countWrong = book.reviews.librarything.reviewsCount || "no data";
// countWrong;

//const count = book.reviews.librarything.reviewsCount ?? "no data";
// count;

function getTotalReviewsCount(book) {
  const goodreads = book.reviews?.goodreads?.reviewsCount;
  const librarything = book.reviews?.librarything?.reviewsCount ?? 0;
  librarything;
  return goodreads + librarything;
}

console.log(getTotalReviewsCount(book));

*/

/*
const books = getBooks();

const doubled = [1, 2, 3, 4, 5].map((x) => x * 2);
doubled;

const titles = books.map((b) => b.title);
titles;

function getTotalReviewsCount(book) {
  const goodreads = book.reviews?.goodreads?.reviewsCount;
  const librarything = book.reviews?.librarything?.reviewsCount ?? 0;
  librarything;
  return goodreads + librarything;
}

const essentialData = books.map((b) => ({
  title: b.title,
  author: b.author,
  totalReviews: getTotalReviewsCount(b),
}));

essentialData;

const longBooks = books
  .filter((b) => b.pages > 500)
  .filter((b) => b.hasMovieAdaptation);
longBooks;

const adventureBooks = books
  .filter((b) => b.genres.includes("adventure"))
  .map((b) => b.title);
adventureBooks;

const pagesAllBooks = books.reduce((sum, b) => sum + b.pages, 0);
pagesAllBooks;

const arr = [3, 7, 1, 9, 6];
// slice copy the original array
const sorted2 = arr.slice().sort((a, b) => a - b);
sorted2;
arr;
// sort mutate the original array
const sorted1 = arr.sort((a, b) => a - b);
sorted1;
arr;

const sortedByPages = books.slice().sort((a, b) => a.pages - b.pages);
sortedByPages;

// 1) add book object to array
const newBook = {
  id: 6,
  title: "A Game of Thrones 2",
  author: "George R. R. Martin 2",
};
const booksAfterAdd = [...books, newBook];
booksAfterAdd;

// 2) remove book object from array
const booksAfterRemove = booksAfterAdd.filter((b) => b.id !== 3);
booksAfterRemove;

// 3) update book object in array
const booksAfterUpdate = booksAfterRemove.map((b) => {
  if (b.id === 6) {
    return {
      ...b,
      title: "A Game of Thrones 3",
    };
  }
  return b; // no change
});
booksAfterUpdate;
*/

// fetch("https://jsonplaceholder.typicode.com/todos")
//   .then((response) => response.json())
//   .then((data) => {
//     console.log(data);
//   });
// console.log("azza");

async function getTodos() {
  const response = await fetch("https://jsonplaceholder.typicode.com/todos");
  const data = await response.json();
  console.log(data);
  return data;
}
const todos = getTodos();
console.log(todos);
console.log("azza");
