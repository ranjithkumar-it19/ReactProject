import React, { useState } from "react";
import styled from "styled-components";
import Shop from "./Shop";
import { FaDeleteLeft, FaTrashCan } from "react-icons/fa6";
import { FaEdit } from "react-icons/fa";

function Content() {
  let [items, setItems] = useState([
    { id: 1, name: "HTML", checked: true },
    { id: 2, name: "CSS", checked: true },
    { id: 3, name: "JavaScript", checked: true },
    { id: 4, name: "ReactJs", checked: false },
  ]);

  let [newItem, setNewItem] = useState("");

  let [isEditing, setIsEditing] = useState(false);

  let [currentId, setCurrentId] = useState(null);

  let handleChecked = (id) => {
    let updatedItems = items.map((item) => {
      if (item.id === id) {
        return { ...item, checked: !item.checked };
      }
      return item;
    });
    setItems(updatedItems);
  };
  let handleDelete = (id) => {
    let updatedItems = items
      .filter((item) => item.id !== id)
      .map((item, index) => {
        return { ...item, id: index + 1 };
      });
    setItems(updatedItems);
  };

  let handleUpdate = (id) => {
    let itemToUpdate = items.find((item) => item.id === id);
    setNewItem(itemToUpdate.name);
    setIsEditing(true);
    setCurrentId(id);
  };

  let handleAdd = () => {
    if (isEditing) {
      let updatedItems = items.map((item) => {
        if (item.id === currentId) {
          return { ...item, name: newItem };
        }
        return item;
      });
      setItems(updatedItems);
      setIsEditing(false);
      setCurrentId(null);
    } else {
      let newItemObj = {
        id: items.length + 1,
        name: newItem,
        checked: false,
      };
      setItems([...items, newItemObj]);
    }
    setNewItem("");
  };
  return (
    <main>
      <div>
        <input
          type="text"
          value={newItem}
          placeholeder="Add New Item"
          onChange={(e) => {
            setNewItem(e.target.value);
          }}
        />
        <button onClick={handleAdd}>{isEditing ? "save" : "Add"}</button>
      </div>
      <ul>
        {items.map((item) => {
          return (
            <li key={item.id} className="item">
              <input
                type="checkbox"
                onChange={() => handleChecked(item.id)}
                checked={item.checked}
              />
              <label>{item.name}</label>
              <FaEdit
                role="button"
                tabIndex={0}
                onClick={() => handleUpdate(item.id)}
              />
              <FaTrashCan
                role="button"
                tabIndex={0}
                onClick={() => handleDelete(item.id)}
              />
            </li>
          );
        })}
      </ul>
    </main>
  );
}

export default Content;
