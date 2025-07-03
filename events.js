const express=require('express');
const EventEmitter=require('events');
const app=express();

const event=new EventEmitter();
let count=0;

event.on("countAPI",()=>{
    count++;
    console.log("event called",count)
    
})

app.get('/',(req,res)=>{
    res.send("Hello Ji")
    event.emit("countAPI")
})
app.get('/search',(req,res)=>{
    res.send("Search API called")
    
})
app.get('/update',(req,res)=>{
    res.send("Update API called")
})
app.listen(5000,()=>{
    console.log("Server is listening on PORT 5000");
})