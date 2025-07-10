 //1. use state

// import React,{useState} from 'react';
// const App =()=>{  
//   const [a,setA]=useState(10);
//   const [rup,setRup] = useState(0);
//   const incRup = ()=>{
//     console.log("rupees changed");
//     setRup(rup+10);
//   }
//   const decRup = ()=>{
//     console.log("rupees changed");
//     setRup(rup-10);
//   }
//   const changeA = ()=>{
//     console.log("state changed");
//     setA(50)
//   }
//   return(
//     <>
//     <h1>My Name is Harsh. I have {a} rupees</h1>
//    <button onClick={changeA}>Increase rupees</button>
//    <h2>current money is {rup}</h2>
//    <button onClick={incRup}>Increment</button>
//    <button onClick={decRup}>decrement</button>
//     </>
//   )
// }
// export default App; 

//above the concept of use state


//concept of the components and the props
//Every time make a component file start with the Capital letter



// import React from "react";

// import Navbar from "./Components/Navbar";
 
// const App =()=>{

//   return(
//     <>
//     <Navbar/>
//     <h1 className="text-5xl text-white"></h1>
//     </>
//   )
// }
// export default App;

// import React from "react";
// import Card from "./Components/Card";
// const App = ()=>{
//   const users = [
//     {
//       "name": "Ananya Sharma",
//       "city": "Delhi",
//       "age": 26,
//       "profession": "Software Engineer",
//       "profilePhoto": "https://example.com/photos/ananya.jpg"
//     },
//     {
//       "name": "Rohan Verma",
//       "city": "Mumbai",
//       "age": 30,
//       "profession": "Graphic Designer",
//       "profilePhoto": "https://example.com/photos/rohan.jpg"
//     },
//     {
//       "name": "Priya Kapoor",
//       "city": "Bangalore",
//       "age": 24,
//       "profession": "Data Analyst",
//       "profilePhoto": "https://example.com/photos/priya.jpg"
//     },
//     {
//       "name": "Amit Gupta",
//       "city": "Pune",
//       "age": 28,
//       "profession": "Marketing Manager",
//       "profilePhoto": "https://example.com/photos/amit.jpg"
//     },
//     {
//       "name": "Sneha Mehta",
//       "city": "Chennai",
//       "age": 27,
//       "profession": "Content Writer",
//       "profilePhoto": "https://example.com/photos/sneha.jpg"
//     }
//   ]

  // users.forEach(function(elem){
  //   console.log(elem)
  // })
  // const user = "Harsh";
//   return(
//     <div>
//     <div className="p-10">

//       {/* <Card user="Harsh" city="Sunam" age="20" profession="Developer"/> */}
//        {users.map(function(elem,idx){
//           return <Card key={idx} username={elem.name} city={elem.city} age={elem.age} profession={elem.profession} profilePhoto={elem.profilePhoto}/>
//        })}
      
//     </div>
//     </div>
//   )
// }

// export default App;





//Api axios 

// import React, { useState } from "react";
// import axios from 'axios';
// const App = ()=>{
//   const [data, setdata] = useState([]);
//   const dataOnClick = async ()=>{
//     const response = await axios.get("https://picsum.photos/v2/list");
//     setdata(response.data);
//     console.log(data)
    // const specificdata = response.data[0]
    // console.log(specificdata);
    // console.log("hello")


//   }
//   return(
//     <>
//     <div className="p-10">
//       <button onClick={dataOnClick} className="text-2xl font-semibold bg-teal-700 px-6 py-3 active:scale-90 rounded-lg">Get data</button>
//       <div className="bg-white p-5 text-white mt-10 rounded-lg">
//         {data.map(function(elem,idx){
//           return <div key={idx} className="bg-gray-700/50 w-full items-center flex justify-between p-7 mb-7">
//             <img className="h-40 w-40" src={elem.download_url} alt="photos" />
//             <h1 className="text-black font-bold text-3xl">{elem.author}</h1>
//           </div>
//         })}
//       </div>
//     </div>


//     </>
//   )
// }

// export default App



//react-router-dom

import React from "react";
import {Routes,Route} from 'react-router-dom';
import About from "./pages/About";
import Contact from "./pages/Contact";
import Course from "./pages/Course";
import Header from "./Components/Header"
const App=()=>{
    return(
      <>
      <div>
         <Header/>
        App
       
        <Routes>
          <Route path='/about' element={<About/>}/>
          <Route path='/contact' element={<Contact/>}/>
          <Route path='/course' element={<Course/>}/>
        </Routes>
      </div>
      </>
    )
}
export default App;