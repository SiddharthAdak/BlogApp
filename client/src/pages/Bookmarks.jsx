import React from 'react'
import "./myBlogs.css";
import Card from '../components/Card';
import { useSelector } from "react-redux";
import { useEffect, useState } from 'react';

function Bookmarks() {
    const allBlogs = useSelector(state => state.setBlog);
    const user = useSelector(state => state.setUser);
    const [bookmarks , setBookmarks] = useState(null);
    console.log(bookmarks);
    useEffect(() => {
        setBookmarks(allBlogs.filter((element) => element.user_bookmarks?.includes(user._id)))
    }, [allBlogs])
    return (
        <div className = "my_blogs">
            {bookmarks && bookmarks.map((element) => {
                return(<Card key = {element._id} element = {element} />)
            })
            
            }
           { (!bookmarks || bookmarks.length === 0) && <h1 className = "noblogs">No blogs bookmarked by you</h1> }
        </div>
    )
}

export default Bookmarks
