const express=require('express')
const multer=require('multer')

const app=express();
app.use(express.json());

const upload=multer({
    storage:multer.diskStorage({
        destination:function(req,file,cb){
            cb(null,"uploads")
        },
        filename:function(req,file,cb){
            cb(null,file.fieldname+" "+Date.now()+".jpg")
        }
    })
}).single("user_file");
app.post('/fileupload',upload,(req,resp)=>{
    resp.send("File uploaded successfully")
})


app.listen(6000,()=>{
   console.log("Server is listening on PORT 6000")
})