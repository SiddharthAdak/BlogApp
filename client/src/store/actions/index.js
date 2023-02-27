export const addBlogs = (data) => {
    return {
        type:"SET_BLOGS",
        payload: data
    }
}
export const removeBlog = (_id) => {
    console.log(_id);
    return {
        type: "DELETE_BLOG",
        payload: _id
    }
}
export const addUser = (data) => {
    return{
        type: "SET_USER",
        payload: data
    }
}