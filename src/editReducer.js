const initialState = {
  isEditable: false,
  currentContact: null,
  contacts: [],
};

const editReducer = (state = initialState, action) => {
  console.log("Reducer received action:", action);
  switch (action.type) {
    case "enable":
      return {
        ...state,
        isEditable: true,
        currentContact: action.payload,
      };
    case "disable":
      return {
        ...state,
        isEditable: false,
        currentContact: null,
      };
    case "edit":
      return {
        ...state,
        contacts: state.contacts.map((contact) =>
          contact.id === action.payload.id ? action.payload : contact
        ),
      };
    case "add":
      return {
        ...state,
        contacts: [...state.contacts, action.payload],
      };
    case "delete":
      return {
        ...state,
        contacts: state.contacts.filter(
          (contact) => contact.id !== action.payload
        ),
      };
    case "setContacts":
      return {
        ...state,
        contacts: action.payload,
      };
    default:
      return state;
  }
};

export default editReducer;
