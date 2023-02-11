import React, { useState } from 'react'
import axios from 'axios';



const Task = () => {
  const [task, setTask] = useState('');
  const [taskdetails, setTaskdetails] = useState('');
  const [startdate, setStartdate] = useState('');
  const [enddate, setEnddate] = useState('');
  const [taskstatus, setTaskstatus] = useState([
    {id:1, title:"To-do"}, 
    {id:2, title:"Inprogress"},
    {id:3, title:"Done"}
  ]);
  const [priority, setPriority] = useState();



  const savedata = async (e) => {

    if (!task || !taskdetails || !startdate || !taskstatus || !priority) {
      alert("Please provide value into each input field ");
    } else {
      await axios.post("http://localhost:3100/register", { task, taskdetails, startdate, enddate, taskstatus, priority }
      ).then(() => {
        alert("user added successfuly");
      })
    }
  }

  return (
    <>
      <div className="container m-auto"
        style={{ height: "700px", width: "600px", margin: "auto", padding: "30px", border: "2px solid black", backgroundColor: "#dbeafe" }}>
        <form className="form-group">
          <div >
            <h4 className="text-center m-auto"> Task form </h4>
          </div>
          <div style={{ padding: "50px" }}>

            <label style={{ float: "left", padding: "5px" }}>Task -:</label>
            <input
              type="text"
              className="form-control"
              placeholder="Task Name"


              onChange={(e) => setTask(e.target.value)}
            />


            <label style={{ float: "left", padding: "5px" }}>Task detailes -:</label>
            <textarea
              type="text"
              className="form-control"
              placeholder="Enter detailes"

              onChange={(e) => setTaskdetails(e.target.value)}
            />
            <div className="form-group">
              <label style={{ float: "left", padding: "5px" }}>Start date -: </label>
              <input
                type="Long Date"
                ng-model="diary.date"
                className="form-control"

                onChange={(e) => setStartdate(e.target.value)}
              />

            </div>
            <div className="form-group">
              <label style={{ float: "left", padding: "5px" }}>End date -:</label>
              <input
                type="LongDate"
                ng-model="diary.date"
                className="form-control"

                onChange={(e) => {
                  let dateobj = e.target.value;
                  setEnddate(dateobj);
                }}

              />
            </div>
            <div className="form-group">

              <div style={{ float: "left", padding: "25px" }}>

                <label>Status</label>
                <select className="form-control"

                  onChange={(e) => {
                    const selectRole = e.target.value;
                    setTaskstatus(selectRole);
                  }}>
                  <option >Choose one</option>
                  <option value={taskstatus} >Todo</option>
                  <option value={taskstatus} >Inprogress</option>
                  <option value={taskstatus} >Done</option>

                </select>
              </div>

              <div style={{ float: "right", padding: "25px" }}>
                <label   >Priority</label >
                <select
                  onChange={(e) => {
                    const selectRole = e.target.value;
                    setPriority(selectRole);
                  }}
                  className="form-control"
                >
                  <option>select one</option>
                  <option value={priority}>Low</option>
                  <option value={priority}>Medium</option>
                  <option value={priority}>High</option>

                </select>

              </div>  </div> </div>

        </form>
        <div className="button text-center pt-4">
          <button
            type="submit"
            className="btn btn-primary btn-sm"
            style={{ marginTop: "50px" }}
            onClick={() => savedata()}
          >
            Submit
          </button>
        </div>
      </div>
    </>
  )
}

export default Task
