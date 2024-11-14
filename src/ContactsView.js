import React from "react";
import { useDispatch, useSelector } from "react-redux";
import EditContact from "./EditContact";

const ContactsView = ({ searchQuery, onContactClick }) => {
  const contacts = useSelector((state) => state.contacts);
  const dispatch = useDispatch();
  const edit = useSelector((state) => state.isEditable);

  const filteredContacts = contacts.filter((contact) =>
    contact.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <>
      <div>
        {filteredContacts.map((item) => (
          <div>
            <div>
              {item.name}
              <button key={item.id} onClick={() => onContactClick(item)}>
                View
              </button>
              <button
                onClick={() => dispatch({ type: "delete", payload: item.id })}
              >
                Delete
              </button>
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  dispatch({ type: "enable", payload: item });
                }}
              >
                Edit
              </button>
            </div>
            <div>{item.mobile}</div>
          </div>
        ))}
      </div>
      {edit && <EditContact />}
    </>
  );
};

export default ContactsView;
