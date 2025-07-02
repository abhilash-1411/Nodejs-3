const express=require('express')
require('./config');
const Product=require('./products')

const app=express();
app.use(express.json());

app.post('/create',async (req,resp)=>{
    let data=new Product(req.body)
    let result= await data.save()
    resp.send(result)
})

app.listen(5000,()=>{
    console.log("Server is runnig on PORT 5000")
});