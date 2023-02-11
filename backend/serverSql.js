const express = require("express");
const cors = require("cors");
const bodyParser = require('body-parser');
const { urlencoded } = require('body-parser');

const Jwt = require('jsonwebtoken');
const jwtKey='status';
const port = 3100;

const app = express();
app.use(express.json());
app.use(cors());


//connection
const  mysql  = require('mysql');
const { application } = require("express");
const db = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : 'root',
  database : 'allTask',
  port: 3306,
  insecureAuth : true
});
db.connect((err) => {
    if (err) throw err;
    console.log("Connection created..!!");
});


app.post('/register' , (req,res)=>{
       let { task,taskdetails,startdate,enddate,taskstatus,priority } = req.body;
       const sqlInsert = "INSERT into task (task,taskdetails,startdate,enddate,taskstatus,priority) VALUES (?,?,?,?,?,?)";
       db.query(sqlInsert,[task,taskdetails,startdate,enddate,taskstatus,priority],(error,result)=>{
        if (error){
          console.log(error);
        }else {
            if(error){
              res.send({result:"Something went wrong ,Please try  after some time"})
            }else{
              res.send({result:{result}})
            }
          }
       }
       )
              
   

});



app.get("/checking",(req,res)=>{
  res.send("app is working fine")
})




//-----------------------------------------------------------------------------------------------------
// Get all data from db




app.get("/taskData", async (req,res)=>{
  const sqlGet =  "SELECT * FROM task";
    db.query(sqlGet,(error,result)=>{
     res.send(result);
      
   });
});

///Update dB for prefildata 
app.get("/gettask/:id",  (req,res)=>{
  const {id}=req.params;
  const sqlGet =  "SELECT * FROM task WHERE id  = ?";
    db.query(sqlGet,id,(error,result)=>{
      if (error){
          console.log(error);
      }
          res.send(result);
          console.log(result);
      
    
   });
});

//Update user in Db
app.put("/update-task/:id",(req,res)=>{
  const {id}=req.params;
  const { task, taskdetails, startdate, enddate, taskstatus,priority} = req.body;
  const sqlUpdate = "UPDATE allusers SET task=?,taskdetails=?,startdate=?,enddate=?,taskstatus=?,priority=? WHERE id = ?";
  db.query(sqlUpdate,[task,taskdetails,startdate,enddate,taskstatus,priority],(error,result)=>{
      if(error){
          console.log(error);
      }
      res.send(result);
  });
});





//  deleteAPI  users
app.delete("/delete/:id",(req,res)=>{
  const {id}=req.params;
  const sqlRemove ="DELETE FROM task WHERE id = ?";
  db.query(sqlRemove,id,(error,result)=>{
if (error){
  console.log(error)
}
res.send(result);
  });
});



app.listen(port, () => {
  console.log(`server is runing on ${port}`);
});
