import setBlog from "./blogReducer";
import setUser from "./userReducer";
import { combineReducers } from "redux";

const reducers = combineReducers(
    {
        setBlog,
        setUser

    }
);

export default reducers;