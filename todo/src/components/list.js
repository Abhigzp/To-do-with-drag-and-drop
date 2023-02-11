import React,{useState,useEffect} from 'react'

const List = () => {
  const [data,setData]=useState([]);



  useEffect(() => {
    allData();
  }, []);

  const allData = async () => {
    let result = await fetch("http://localhost:3100/taskData");
    result = await result.json();
    setData(result);
    
  };


  return (
    < div style={{marginLeft:"300px",marginTop:"40px"}}>
  <div  style={{textAlign:"center"}} className='designTable'> 
  <h3>Task list</h3>
     <table class="table">
  <thead>
    <tr>
      <th scope="col">S.no</th>
      <th scope="col">Task </th>
      <th scope="col">Start-date</th>
      <th scope="col">Status</th>
      <th scope="col">Priority</th>
      
    </tr>
  </thead>
  <tbody>
   { data.map((value,i)=>{
    return (
      <tr key={value._id}>
      <td scope="col" >{i+1}</td>
      <td scope="col">{value.task}</td>
      <td>{value.startDate}</td>
      <td>{value.taskstatus}</td>
      <td>{value.priority}</td>
      
      
      </tr>
    )
   })

   }
  </tbody>
</table>
    </div>

    </div>
  
  )
}

export default List
