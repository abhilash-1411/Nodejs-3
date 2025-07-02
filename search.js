const express=require('express');
require('./config');
const Product=require('./products')

const app=express();
app.use(express.json());

app.get('/search/:key',async(req,resp)=>{
    let data=await Product.find(
        {
            "$or":[
                {"name":{$regex:req.params.key}},
                {"brand":{$regex:req.params.key}}
            ]
        }
    )
    resp.send(data)
})



app.listen(5000,()=>{
    console.log("Server is listening on PORT 5000")
})