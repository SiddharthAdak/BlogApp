import React from 'react';
import { useState, useReducer, useEffect } from 'react';
import "./Write.css";
import { uploadImage } from '../service/imageApi';
import { updateBlog } from '../service/blogApi';
import { deleteImage } from '../service/imageApi';
import Category from '../components/Category';
import { initialState, formReducer } from './formReducer/formReducer';
import TextareaAutosize from '@mui/base/TextareaAutosize';
import { useSelector, useDispatch } from "react-redux";
import { updateStoreBlog } from '../store/actions';
import { useLocation } from 'react-router';

function UpdatePost() {
    const [currentImg, setCurrentImg] = useState("null");
    const location = useLocation();
    useEffect(()=>{
        let { category, image, story, title} = location.state;
        setCurrentImg(image.public_id);
        dispatch({
            type: "SET_TO_CURRENT",
            payload: {
                story,
                image,
                title,
                category,
                imageUrl: "",
                previewImage: null
            },
          });
    },[])

    const user = useSelector(state => state.setUser);
    
    const reduxDispatch = useDispatch();
    const [error, setError] = useState(null);
    const [isLoading, setIsLoading] = useState(false);
    const [success, setSuccess] = useState("");
    const [state, dispatch] = useReducer(formReducer, initialState);

    
    

    const handleChange = (e) => {
        dispatch({
      type: "CHANGE_INPUT",
      payload: { name: e.target.name, value: e.target.value },
    });
    }

    const handleInputImage = (e) => {
        const file = e.target.files[0];
        if(file){
            previewFile(file);
        }
    }

    const previewFile = (file) => { //Generate preview image from file
        const reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onloadend = () => {
            handleChange({target: {name: "previewImage", value : reader.result}})
        }
        
    }

    //Calling post api to submit blog
    const handleSubmit = async(e) => { 
        setSuccess(null);
        e.preventDefault();
        setIsLoading(true);
        if (!state.title.length || !state.story.length || (!state.previewImage && !state.image)) {
            setError("All fields are required");
            setIsLoading(false);
        }
        else if(state.image){
            send2(state.image);
            return;
        }
        else if(state.previewImage){
            let response = await uploadImage(state.previewImage);
            if(response.status === 200){
                send2({url:response.data.url, public_id: response.data.public_id});
            } 
            else{
                setIsLoading(false);
                setError(error);
            }
        } 
    }

    const send2 = async(data) => {
        let response = await updateBlog(location.state._id,{title:state.title, story:state.story, image: data, category:state.category, author_id: location.state.author_id}, user.token);
        if(response.status === 200){
            setError(null)
            setIsLoading(false);
            setSuccess("Blog updated successfully")
            reduxDispatch(updateStoreBlog(response.data));
            console.log(response.data);
            setTimeout(()=>{
                setSuccess(null);
            },3000);
            if(currentImg !== "null" && currentImg !== response.data.image.public_id){
                let response = await deleteImage({id: currentImg});
                console.log(response, " hemlo");
            }
            setCurrentImg(response.data.image.public_id);
        }
        else{
            console.log(response);
            setIsLoading(false);
            setError(response.response.data.message)
        }
    }

    // check if the entered url is that of an image,
    function isImgUrl(e) {
        e.preventDefault();
        const img = new Image();
        img.src = state.imageUrl.trim();
        img.onerror = () => {
            handleChange({target: {name: "image", value : null}});
            setError("Invalid image url")
        };
        img.onload = () => {
            handleChange({target:{name:"image", value:{url:state.imageUrl.trim(), public_id: "null"}}});
            console.log("valid url");
            setError(null)
        };
      }
    
    return (
        <div className="write">
            <form id="input_container">
            <Category handleCategory = {handleChange} category = {state.category}/>
                    <TextareaAutosize
                        onChange = {handleChange}
                        value = {state.title}
                        name = "title"
                        aria-label="empty textarea"
                        placeholder="Title"
                        style={{ width: "100%" }}
                        className = "title_input"
                    />

                {state.previewImage && <img src = {state.previewImage} />}
                {state.image && <img src = {state.image.url} /> }  

                {(!state.previewImage && !state.image) ? <span className = "image_upload"><label  htmlFor="img" >
                <span className="material-symbols-outlined image_uploader">add_photo_alternate</span> Add Image</label>
                OR
                <input onChange = {handleChange} name = "imageUrl" value = {state.imageUrl} className = "imgUrl" placeholder = "Enter image url" />
                <button onClick = {isImgUrl}>Add Url</button>
                </span>
                :
                <span className = "removeImage" onClick = {()=>{
                    handleChange({target: {name: "previewImage", value : null}});
                    handleChange({target: {name: "image", value : null}});
                }}>Remove Image</span>
                }

                <input  // input image
                    onChange = {handleInputImage}
                    type="file" id="img" name="img" accept="image/*"
                />

                    <TextareaAutosize
                        aria-label="empty textarea"
                        placeholder="Tell your story..."
                        style={{  resize: "none"}}
                        minRows={3}
                        className = "story_input"
                        name = "story"
                        onChange = {handleChange}
                        value = {state.story}
                    />

                <div><button disabled = {isLoading} onClick = {handleSubmit}>{(!isLoading)? "Update Post":"Updating..."}</button></div>
                {error&&<div className = "error">{"Error! "+error}</div>}
                {success&&<div className = "success">{success}</div>}
            </form>
            
        </div>
    )
}

export default UpdatePost;