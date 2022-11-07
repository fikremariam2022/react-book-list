import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import { books } from "./books";
import Book from "./book";
//setup vars

function BookList() {
  return (
    <section className="bookList">
      {books.map((book) => (
        <Book key={book.id} {...book}>
          {book.overview}
        </Book>
      ))}
    </section>
  );
}

ReactDOM.render(<BookList />, document.getElementById("root"));
