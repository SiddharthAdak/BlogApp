import React from 'react'

function Category({handleCategory, category}) {
    const categoryValue = ["All","Travel", "Entertainment/Cinema", "Sports", "Business/Money", "Tech", "Lifestyle", "Fashion" ,"Other"];
    const toggleOptions = () =>{
        let element = document.getElementById("options");
        element.classList.toggle("active");
    }
    return (
        <div>
            <div className = "sidebar-container">
                    <p style = {{zIndex:"-2", backgroundColor:"white"}} onClick = {toggleOptions}> Selected Category: {category}</p>
                    <div id = "options" className = "close-options">
                        {categoryValue.map((element) => {
                            return(<p key = {element} onClick = {()=>{
                                handleCategory({target:{name: "category", value:element}});
                                toggleOptions();
                            }} >{element}</p>)
                        })}
                    </div>
            </div>
            </div>
    )
}

export default Category
