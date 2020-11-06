"use strict";

let books = [
  {
    title: "The Hobbit",
    author: "J.R.R. Tolkien",
    alreadyRead: true,
  },
  {
    title: "Harry Potter",
    author: "J.K. Rowling",
    alreadyRead: true,
  },
  {
    title: "A Song of Ice and Fire",
    author: "George R.R. Martin",
    alreadyRead: false,
  },
];

books.forEach((element) => {
  console.log(element.title + " by " + element.author);
  element.alreadyRead
    ? console.log('You already read "' + element.title + '"')
    : console.log('You still need to read "' + element.title + '"');
});