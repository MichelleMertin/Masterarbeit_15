import React from "react";

import "./Knopf.css";

const Book = (props) => {
  const buttonsMarkup = props.recBooks.map((book) => (
    <details key={book.id}>
      <summary>{book.title}</summary>
      <p>{book.author}</p>
      <p>{book.date}</p>
    </details>
  ));

  return <div>{buttonsMarkup}</div>;

  //return (
  //<div>
  //<div>{books.title}</div>
  //<div>{books.id}</div>
  //</div>
  //);
};

export default Book;
