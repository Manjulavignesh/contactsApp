import React from "react";

const ContactDetails = ({ contact, onClose }) => {
  return (
    <div className="overlay">
      <div className="overlay-content">
        <h2>Contact Details</h2>
        <p>
          <strong>Name:</strong> {contact.name}
        </p>
        <p>
          <strong>Email:</strong> {contact.email}
        </p>
        <p>
          <strong>Phone:</strong> {contact.mobile}
        </p>
        <p>
          <strong>Address:</strong> {contact.address}
        </p>
        <button onClick={onClose}>Close</button>
      </div>
    </div>
  );
};

export default ContactDetails;
