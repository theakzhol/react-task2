import React from "react";

const ContactBook = ({ contact, handleDelete, handleEdit }) => {
  let style = {
    display: "flex",
    gap: "20px",
  };
  return (
    <>
      <h1>List ContactBook</h1>
      <ul>
        {contact.map((item) => (
          <li key={item.id} style={style}>
            <strong>Name:</strong>

            {item.name}
            <br />
            <strong>Number:</strong>
            {item.number}
            <button onClick={() => handleEdit(item.id)}>Edit</button>
            <button onClick={() => handleDelete(item.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </>
  );
};

export default ContactBook;
