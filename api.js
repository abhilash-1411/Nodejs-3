const express=require('express');
const dbConnect=require('./mongodb');
const app=express();
const mongodb=require('mongodb')

app.use(express.json())
app.get('/',async(req,resp)=>{
    let data= await dbConnect();
     data=await data.find().toArray();
    resp.send(data)
})

app.post('/',async(req,resp)=>{
    let data= await dbConnect()
    let result= await data.insertOne(req.body)
    // console.log(result)
    resp.send(result)
})

app.put('/:name',async(req,resp)=>{
    let data=await dbConnect();
    let res=await data.updateOne({name:req.params.name}, {$set:req.body})
    resp.send(res)
})
app.delete('/:id',async(req,resp)=>{
    let data= await dbConnect()
    let res=await data.deleteOne({_id:new mongodb.ObjectId(req.params.id)})
    resp.send(res);

})
app.listen(5000);