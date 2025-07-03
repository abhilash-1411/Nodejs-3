const express=require('express');
const con=require('./config')

const app=express();

app.get('/',(req,resp)=>{
    con.query("select * from users",(err,result)=>{
        if(err){
            resp.send(err);
        }
        else{
            resp.send(result)
        }
    })
    
})
app.listen(5000,()=>{
    console.log("Server is listening on PORT 5000")
})