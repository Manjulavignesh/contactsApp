import { useSelector, useDispatch } from "react-redux";
import { useState, useEffect, useContext } from "react";

const EditContact = () => {
  const dispatch = useDispatch();
  const currentContact = useSelector((state) => state.currentContact);
  const [edited, setEdited] = useState({ ...currentContact });
  useEffect(() => {
    setEdited({ ...currentContact });
  }, [currentContact]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setEdited((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const submitHandler = (e) => {
    e.preventDefault();
    dispatch({ type: "edit", payload: edited });
    dispatch({ type: "disable" });
    console.log("Dispatched edit action with payload:", edited); // Log the payload
  };

  return (
    <div className="overlay">
      <div className="overlay-content">
        <form onSubmit={submitHandler}>
          <div>
            <label>Name:</label>
            <input
              type="text"
              name="name"
              value={edited.name || ""}
              onChange={handleChange}
            />
          </div>
          <br />
          <div>
            <label>Email:</label>
            <input
              type="email"
              name="email"
              value={edited.email || ""}
              onChange={handleChange}
            />
          </div>
          <br />
          <div>
            <label>Phone:</label>
            <input
              type="tel"
              name="mobile"
              value={edited.mobile || ""}
              onChange={handleChange}
            />
          </div>
          <br />
          <div>
            <label>Address:</label>
            <input
              type="text"
              name="address"
              value={edited.address || ""}
              onChange={handleChange}
            />
          </div>
          <br />
          <input type="submit" value="Save" />
        </form>
      </div>
    </div>
  );
};

export default EditContact;
