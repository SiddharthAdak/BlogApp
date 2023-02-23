const initialState = null;

const setUser = (state = initialState, action) => {
    switch (action.type) {
        case "SET_USER": return action.payload;
        default: return state;
    }
}

export default setUser;