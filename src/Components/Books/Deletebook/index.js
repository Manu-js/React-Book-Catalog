import React from "react";
import "deleteBook.css";

function Deletebook(props) {
  const { deteleBook } = props;
  return (
    <main className="App-header">
      <p>{deteleBook}</p>

    </main>
  );
}

export default Deletebook;
