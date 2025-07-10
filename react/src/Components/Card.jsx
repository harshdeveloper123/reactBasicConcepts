import React from "react";

const Card =(props)=>{
    console.log(props)
    
    return(
        <>
        <div className="bg-white text-black inline-block text-center mr-7 rounded p-6">
            <img className="h-32 w-32 rounded-full mb-3" src={props.profilePhoto}  alt="profile photo" />
            <h1>{props.username}</h1>
            <h2>{props.city},{props.age}</h2>
            <h3>{props.profession}</h3>
            <button className="bg-green-500 p-2 rounded">Add Friend</button>
        </div>
        </>
    )
} 

export default Card;