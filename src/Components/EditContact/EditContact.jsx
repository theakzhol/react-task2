import React, { useState } from "react";

const EditContact = ({ editContact, saveChanges }) => {
  let [product, setProduct] = useState(editContact);

  function saveNewName(e) {
    setProduct({ ...product, name: e.target.value });
  }

  function saveNewNumber(e) {
    setProduct({ ...product, number: e.target.value });
  }

  function saveChange() {
    saveChanges(product);
  }

  return (
    <div>
      <h1>Editing Contact</h1>
      <input type="text" onChange={saveNewName} value={product.name} />
      <input type="text" onChange={saveNewNumber} value={product.number} />
      <button onClick={saveChange}>Save</button>
    </div>
  );
};

export default EditContact;
