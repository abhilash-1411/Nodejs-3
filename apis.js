const express=require('express')
require('./config');
const Product=require('./products')

const app=express();
app.use(express.json());

app.get('/list',async(req,resp)=>{
    let data= await Product.find();
    resp.send(data)
})

app.post('/create',async (req,resp)=>{
    let data=new Product(req.body)
    let result= await data.save()
    resp.send(result)
})

app.put('/update/:_id',async(req,resp)=>{
    let data=await Product.updateOne(
        req.params,
        {$set:req.body}
    )
    resp.send(data)
})

 app.delete('/delete/:_id',async(req,resp)=>{
    console.log(req.params.id);
    let data=await Product.deleteOne(req.params.id)
    resp.send("Deleted successfully")
})

app.listen(5000,()=>{
    console.log("Server is runnig on PORT 5000")
});