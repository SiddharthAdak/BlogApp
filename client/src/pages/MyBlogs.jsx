import React from 'react'
import "./myBlogs.css";
import Card from '../components/Card';
import { useSelector } from "react-redux";
import { useEffect, useState } from 'react';

function myBlogs() {
    const allBlogs = useSelector(state => state.setBlog);
    const user = useSelector(state => state.setUser);
    const [myblogs , setMyBlogs] = useState(null);
    console.log(myblogs);
    useEffect(() => {
        setMyBlogs(allBlogs.filter((element) => element.email === user.email))
    }, [allBlogs])
    return (
        <div className = "my_blogs">
            {myblogs && myblogs.map((element) => {
                return(<Card key = {element._id} element = {element} />)
            })
            
            }
           { (!myblogs || myblogs.length === 0) && <h1 className = "noblogs">No blogs written by you</h1> }
        </div>
    )
}

export default myBlogs
