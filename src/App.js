import React, { useEffect, useState } from "react";
import { Provider, useDispatch } from "react-redux";
import store from "./store";
import ContactsView from "./ContactsView";
import AddContact from "./AddContact";
import ContactDetails from "./ContactDetails";

const App = () => {
  const dispatch = useDispatch();
  const [showOverlay, setShowOverlay] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedContact, setSelectedContact] = useState(null);

  useEffect(() => {
    fetch(
      "https://raw.githubusercontent.com/BitcotDev/fresher-machin-test/main/json/sample.json"
    )
      .then((res) => res.json())
      .then((result) => {
        const updatedContacts = result.map((contact) => {
          if (!contact.address) {
            contact.address = "No address provided";
          }
          return contact;
        });
        dispatch({ type: "setContacts", payload: updatedContacts });
      });
  }, [dispatch]);

  const handleShowOverlay = () => {
    setShowOverlay(true);
  };

  const handleHideOverlay = () => {
    setShowOverlay(false);
  };

  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
  };

  const handleContactClick = (contact) => {
    setSelectedContact(contact);
  };

  return (
    <Provider store={store}>
      <span>
        All contacts
        <button onClick={handleShowOverlay}>+</button>
      </span>
      <div>
        <input
          type="text"
          placeholder="Search contacts..."
          value={searchQuery}
          onChange={handleSearchChange}
        />
      </div>
      {showOverlay && <AddContact onClose={handleHideOverlay} />}
      {selectedContact ? (
        <ContactDetails
          contact={selectedContact}
          onClose={() => setSelectedContact(null)}
        />
      ) : (
        <ContactsView
          searchQuery={searchQuery}
          onContactClick={handleContactClick}
        />
      )}
    </Provider>
  );
};

export default App;
