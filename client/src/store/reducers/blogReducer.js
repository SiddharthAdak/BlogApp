const initialState = [];

const setBlog = (state = initialState, action) => {
    switch (action.type) {
        case "SET_BLOGS": return action.payload;
        case "DELETE_BLOG": return state.filter((blog) => blog._id !== action.payload);
        default: return state;
    }
}

export default setBlog;