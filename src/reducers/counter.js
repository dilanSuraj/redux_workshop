const counterReducer = (state = 0, action) => {
    switch (action.type) {
        case "INCREMENT":
            return state + 1;
        case "DECREMENT":
            return state - 1;
        case "MULTIPLY":
            return state * action.data;
        default:
            return state;
    }
}

export default counterReducer;