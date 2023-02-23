export const addBlogs = (data) => {
    return {
        type:"SET_BLOGS",
        payload: data
    }
}

export const addUser = (data) => {
    return{
        type: "SET_USER",
        payload: data
    }
}