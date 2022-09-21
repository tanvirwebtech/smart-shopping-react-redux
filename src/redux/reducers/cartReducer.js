const initialState = [];

const cartReducer = (state = initialState, action) => {
    switch (action.type) {
        case "ADD_TO_CART":
            if (state.includes(action.payload)) {
                return [...state];
            } else {
                return [...state, action.payload];
            }
        case "REMOVE_FROM_CART":
            const filterCart = state.filter((pd) => pd.id !== action.payload);
            return filterCart;
        default:
            return state;
    }
};
export default cartReducer;
