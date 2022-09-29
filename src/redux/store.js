import { applyMiddleware, combineReducers, createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import cartReducer from "./reducers/cartReducer";
import ReduxThunk from "redux-thunk";
import productReducer from "./reducers/productReducer";

const rootReducer = combineReducers({
    products: productReducer,
    cart: cartReducer,
});

const store = createStore(
    rootReducer,
    composeWithDevTools(applyMiddleware(ReduxThunk))
);
export default store;
