import React, { useState } from "react";

const AddContact = ({ handleContact }) => {
  const [book, setBook] = useState({ name: "", number: "" });

  function handleInput(e) {
    if (e.target.name == "name") {
      setBook({ ...book, name: e.target.value });
      //   console.log(book.name);
    } else {
      setBook({ ...book, number: e.target.value });
    }
  }

  function handleAdd() {
    if (!book.name || !book.number) {
      alert("Delete! Then enter! Please:)");
      return;
    }

    const newBook = {
      name: book.name,
      number: book.number,
      id: Date.now(),
    };

    handleContact(newBook);

    setBook({ name: "", number: "" });
  }

  return (
    <div className="block-add">
      <h1>ADD to ContactBook</h1>
      <input
        type="text"
        placeholder="Name"
        value={book.name}
        onChange={handleInput}
        name="name"
      />
      <input
        type="text"
        placeholder="Number"
        value={book.number}
        onChange={handleInput}
        name="number"
      />
      <button onClick={handleAdd}>Add</button>
    </div>
  );
};

export default AddContact;
