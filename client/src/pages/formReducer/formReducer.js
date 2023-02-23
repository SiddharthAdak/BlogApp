export const initialState = {
    category: "All",
    title: "", //input
    story: "", 
    image: null,
    imageUrl: "",
    previewImage: null,
}

export const formReducer = (state, action) => {
    switch(action.type){
        case "CHANGE_INPUT":
            return{
                ...state,
                [action.payload.name]:action.payload.value
            }
        case "SET_TO_INITIAL":
            return{
                ...initialState
            }
        case "SET_TO_CURRENT":
            return{
                ...action.payload
            }
        default:
            return state
    }
}