import { createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import cartReducer from "./reducers/cartReducer";
const store = createStore(cartReducer, composeWithDevTools());
export default store;
