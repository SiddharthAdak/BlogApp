import React from 'react'
import {DelIcon, UpdateIcon} from "./Svg";
import {useSelector, useDispatch} from "react-redux";
import { deleteBlog } from '../service/blogApi';
import { addBlogs, removeBlog } from '../store/actions';
import { deleteImage } from '../service/imageApi';
import "./Card.css"
import { Link, useNavigate} from "react-router-dom";


function Card({element}) {

    const navigate = useNavigate();

    const user = useSelector(state => state.setUser);
    const dispatch = useDispatch();
    const allBlogs = useSelector(state => state.setBlog);
    const months = ["Jan", "Feb", "March", "Apr", "May", "Jun", "Jul", "Aug", "Sept", "Oct", "Nov", "Dec"];
    let d = new Date(element.createdAt)
    let month = months[d.getMonth()];
    let date = d.getDate();
    let year = d.getFullYear();
    
    const handleDel = async(e) => {
        e.stopPropagation();
        e.preventDefault();
        if (
            window.confirm(
              `Are you sure you want to delete the blog`
            )
          ) {
            let response = await deleteBlog(element._id, user.token);
          
        
            if(response.status === 200){
                if(element.image.public_id !== "null"){
                    send2();
                }
                
                dispatch(removeBlog(element._id));
            }
            else{
                console.log(response);
            }
        }
    }

    const send2 = async() => {
        let response = await deleteImage({id: element.image.public_id});
        console.log(response);
    } 

    const handleUpdate = (e) => {
        e.stopPropagation();
        e.preventDefault();
        navigate("/Update", {state: element});
    }


    return (
        <Link to = {"/"+element._id} className = "card" >
        
            <div>
                <img className = "card-img" src = {element.image.url}  />
                <div className = "card-text">
                <p className = "card-category ellipsis">{element.category}</p>
                <h3 className = "card-title ellipsis">{element.title}</h3>
                <p className = "card-author ellipsis">Author: {element.author}</p>
                
                <p className = "card-para">{element.story}</p>
                <div className = "card-footer" >
                    <span className = "card-time ellipsis">{month+" "+date+", "+year}</span>
                    <div>
                        {user.email === element.email && <UpdateIcon handleUpdate = {handleUpdate} />}
                        {user.email === element.email && <DelIcon handleDel = {handleDel} />}
                    
                    </div>
                </div>
                </div>
            </div>

        </Link>
    )
}

export default Card
