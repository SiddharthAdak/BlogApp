import React from 'react'
import "./Post.css";
import {useParams} from "react-router-dom"
import { useSelector } from "react-redux";
import {useState, useEffect} from "react";
function Post() {
    const {_id} = useParams();
    const allBlogs = useSelector(state => state.setBlog);
    const [para, setPara] = useState(null);
    const [post, setPost] = useState(null);
    useEffect(() => {
        let newArray = allBlogs.filter(function(el) {
            return el._id === _id;
        });
        if (newArray.length !== 0) {
            setPost(newArray[0]);
            let split = newArray[0].story.split("\n")
            setPara(split);
        }


    }, [allBlogs])
    const months = ["Jan", "Feb", "March", "Apr", "May", "Jun", "Jul", "Aug", "Sept", "Oct", "Nov", "Dec"];
    let month, date, year;
    if(post){
        let d = new Date(post.createdAt)
        month = months[d.getMonth()];
        date = d.getDate();
        year = d.getFullYear();
    }
    return (
        post&&<div className = "post">
        <div className = "post-container">
            <p className = "post-author">Written by: {post.author}</p>
            <p className = "post-date" >{month+" "+date+", "+year}</p>
            <h1>{post.title}</h1>
            <img src = {post.image.url} />
                {
                    para.map((element)=>{
                        if(element.length!==0){
                            return <p className = "post-story">{element}</p>
                        }
                        else{
                            return <br/>
                        }
                    })
                }
        </div>
        </div>
    )
}

export default Post
