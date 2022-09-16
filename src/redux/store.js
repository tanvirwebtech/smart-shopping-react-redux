import { createStore } from "redux";
import { countReducer } from "./reducers/countReducer";
import { composeWithDevTools } from "redux-devtools-extension";
const store = createStore(countReducer, composeWithDevTools());
export default store;
