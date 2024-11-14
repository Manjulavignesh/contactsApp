import { legacy_createStore as createStore } from "redux";
import editReducer from "./editReducer";
const store = createStore(editReducer);
export default store;
