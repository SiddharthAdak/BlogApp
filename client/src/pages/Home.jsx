import React from 'react'
import { useState } from 'react';
import "./Home.css"
import Card from '../components/Card';
import Category from '../components/Category';
import "./Write.css"
import { useSelector } from "react-redux";


function Home() {
    
    const allBlogs = useSelector(state => state.setBlog);
    const [category, setCategory] = useState("All")
    const categoryValue = ["All","Travel", "Entertainment | Cinema", "Sports", "Business | Money", "Tech", "Lifestyle", "Fashion" ,"Other"];
    
    
    
    const handleCategory = (e) =>{
        !e.target.value?setCategory(e.target.innerHTML):setCategory(e.target.value);
    }
    return (
        <div className = "home">
            <div className = "home-container">
                <img className = "home-container-img" src = "../blog-header-img.png" />
            </div>

                <div className = "category-container">
                    <Category handleCategory = {handleCategory} category = {category}/> 
                </div>
                
            
            <div className = "blog-container">
                {((category === "All" && allBlogs) || allBlogs.filter((el) => el.category === category )).length?<div className = "blog-container-cards">
                    {allBlogs.map((element)=>{
                        if(category === "All" || category === element.category){
                            return(<Card key = {element._id} element = {element} />)
                        }
                    })}
                </div>
                :  
                <h1 className = "blog-container-cards">No Blogs in this Category</h1> }
                <div className = "sidebar-category">
                <div className = "sidebar-container">
                    <p> Selected Category: {category}</p>
                    <div>
                        {categoryValue.map((element) => {
                            return(<p key = {element} onClick = {handleCategory} value = {element}>{element}</p>)
                        })}
                    </div>
                </div>
                </div>
            </div>
        </div>
    )
}

export default Home;
