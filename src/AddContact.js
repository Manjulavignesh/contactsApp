import React, { useRef } from "react";
import { useDispatch } from "react-redux";
import "./Overlay.css";

const AddContact = ({ onClose }) => {
  const dispatch = useDispatch();
  const nameref = useRef();
  const emailref = useRef();
  const phoneref = useRef();
  const addressref = useRef();
  const id = Math.random();

  const submitHandler = (e) => {
    e.preventDefault();
    const name = nameref.current.value;
    const email = emailref.current.value;
    const phone = phoneref.current.value;
    const address = addressref.current.value;

    dispatch({
      type: "add",
      payload: { id, name, mobile: phone, email, address },
    });

    onClose();
  };

  return (
    <div className="overlay">
      <div className="overlay-content">
        <form onSubmit={submitHandler}>
          <div>
            <label>Name:</label>
            <input id="name" type="text" ref={nameref} />
          </div>
          <br />
          <div>
            <label>Email:</label>
            <input id="email" type="email" ref={emailref} />
          </div>
          <br />
          <div>
            <label>Phone:</label>
            <input id="mobile" type="tel" ref={phoneref} />
          </div>
          <br />
          <div>
            <label>Address:</label>
            <input id="address" type="text" ref={addressref} />
          </div>
          <br />
          <input type="submit" />
        </form>
      </div>
    </div>
  );
};

export default AddContact;
