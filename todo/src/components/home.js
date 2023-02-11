import React from 'react'
import {  useNavigate } from 'react-router-dom'

const Home = () => {
    const navigate = useNavigate()
    const taskNav=()=>{
        navigate("/task")
    }
  return (
    <div>
        
    <div style={{ position: "absolute",
           top:"50%",
           left:"50%",
           transform: "translate(-50%, -50%)",
           textalign: "center" 
}
}
>
<h1>Welcome to task management system </h1>
<button style={{backgroundColor:"#0e7490",color:"white",height:"45px",cursor:"pointer",width:"200px"}} onClick={()=> taskNav()}> Click here to add task </button>

</div>
    
    </div>
  )
}

export default Home;
