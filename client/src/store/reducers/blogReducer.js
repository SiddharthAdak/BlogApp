const initialState = [];

const setBlog = (state = initialState, action) => {
    switch (action.type) {
        case "SET_BLOGS": return action.payload;
        case "DELETE_BLOG": return state.filter((blog) => blog._id !== action.payload);
        case "UPDATE_BLOG": 
            return state.map((element) => {
                    if(element._id === action.payload._id){
                        return action.payload
                    }
                    else{
                        return element
                    }
                })
            
        default: return state;
    }
}

export default setBlog;