import React from "react";
import './App.css'
import {useEffect,useState} from 'react';
import axios from "axios";
import styled from "styled-components";
//  function App() {
//   const [myData,setmydata]=useState([])
//   const [error,seterror]=useState("")

//   //Using Promises
//   // useEffect(()=>{
//   //   axios.get("https://jsonplaceholder.typicode.com/poss").then((res)=>{setmydata(res.data)
//   //  }).catch((error)=>{seterror(error.message)})
   
//   // },[])

//   //Using aysn await
// const getApiData=async()=>{
//   try {
//     const res=await axios.get("https://jsonplaceholder.typicode.com/posts");
//   setmydata(res.data)
    
//   } catch (error) {
//     seterror(error.message)
    
//   }
// }
//   useEffect(()=>{
//     getApiData();
//   })
 
//   return (
//     <>
//     {error!=="" && <h2>{error}</h2>}
//        {myData.map((post)=>{
//     const {id,title,body}=post;
//     return <div>
//     <h1>{id}</h1>
//     <h1>{title}</h1>
//     <h1>{body}</h1>
//     </div>

//   })}
  
     
//     </>
//   );
// }

// export default App;


const App = () => {
  const Button=styled.button`

    //background-image: radial-gradient(100% 100% at 100% 0,#5adaff 0,#5468ff 100%) ;
    align-items: center;
    border-radius: 6px;
    height:50px;
    justify-content: center;
    color:#fff;
    box-shadow:rgba(45,35,66,0.4) 0px 2px 4px,rgba(45,35,66,0.3) 0px 7px 13px -3px,
    rgba(58,65,111,0.5) 0 -3px 0 inset;
    border: none;
    width:200px;
    font-size:1.5rem;
    background-color: ${(props)=>props.bg};
`
const Para=styled.p`
color:red;
`


  return (
    <div>
     <Button className="btn" bg="green">Subscribe here</Button>
     
      <Para>Hello guys</Para>
    </div>
  )
}

export default App

