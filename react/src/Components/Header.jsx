import React from "react";
import { Link } from "react-router-dom";
const Header = ()=>{
    return(
        <>
       <div className="bg-green-500 flex justify-between text-white w-full">
        <h2 className="text-2xl">Navbar</h2>
        <div className="flex gap-10 p-6 hover:text-blue-500">
        <Link to='/'>Home</Link>
        <Link to='/about'>about</Link>
        <Link to='/contact'>contact</Link>
        <Link to='/course'>course</Link>
        </div>
        {/* <div className="flex gap-10 hover:text-blue-600 p-5">
        <a href="/">Home</a>
        <a href="/contact">Contact</a>
        <a href="/course">Course</a>
        <a href="/about">About</a>
        </div> */}
       </div>
        </>
    )
}

export default Header;