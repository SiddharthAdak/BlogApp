const initialState = [];

const setBlog = (state = initialState, action) => {
    switch (action.type) {
        case "SET_BLOGS": return action.payload;
        default: return state;
    }
}

export default setBlog;