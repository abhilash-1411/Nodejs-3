const express=require('express');
const dbConnect=require('./mongodb');
const app=express();

app.get('/',async(req,resp)=>{
    let data= await dbConnect();
     data=await data.find().toArray();
     console.log(data);
    resp.send(data)
  
})
app.listen(5000);