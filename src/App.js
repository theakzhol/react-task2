import React, { useState } from "react";
import AddContact from "./Components/AddContact/AddContact";
import ContactBook from "./Components/ContactBook/ContactBook";
import EditContact from "./Components/EditContact/EditContact";

const App = () => {
  const [contact, setContact] = useState([]);

  const [editContact, setEditContact] = useState(null);

  // ? функция для добавления
  function handleContact(book) {
    let newContact = [...contact];
    newContact.push(book);
    setContact(newContact);
  }

  // ? функция для удаления
  const handleDelete = (id) => {
    let newContact = [...contact];
    newContact = newContact.filter((item) => item.id !== id);
    setContact(newContact);
  };

  // ? модалка для редактирования товара

  // ? функция для редактирование
  function handleEdit(id) {
    let newContact = [...contact];
    let book = newContact.find((item) => item.id === id);
    setEditContact(book);
  }

  function saveChanges(changes) {
    let newContact = [...contact];
    newContact = newContact.map((item) => {
      if (item.id === changes.id) {
        return changes;
      } else {
        return item;
      }
    });
    setContact(newContact);
    setEditContact(null);
  }

  return (
    <div className="main">
      <AddContact handleContact={handleContact} />
      <ContactBook
        contact={contact}
        handleDelete={handleDelete}
        handleEdit={handleEdit}
      />
      {editContact ? (
        <EditContact editContact={editContact} saveChanges={saveChanges} />
      ) : (
        <h1>Nothing for editing</h1>
      )}
    </div>
  );
};

export default App;
