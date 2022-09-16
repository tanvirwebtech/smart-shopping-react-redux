const initState = ["abul", "babul"];
export const countReducer = (state = initState, action) => {
    switch (action.type) {
        case "ADD":
            return [...state, action.payload];
        case "REMOVE":
            return state.pop();
        default:
            return state;
    }
};
