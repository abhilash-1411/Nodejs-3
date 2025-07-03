const express=require('express');
const con=require('./config')

const app=express();
app.use(express.json());

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
app.post('/',(req,resp)=>{
    // const data={name:'Ankit',age:'23',category:'Player',brand:'YYY'}
    const data=req.body
    con.query('INSERT into users SET ?',data,(error,result,fields)=>{
     if(error) error ;
     resp.send(result)
  })
})

app.put('/:name',(req,resp)=>{
    // const data=["Anii","26","footballer",req.params.name]
    const data=[req.body.name,req.body.age,req.body.category,req.params.name]
    con.query('UPDATE users SET name=?,age=?,category=? where name=?',data,(error,result,fields)=>{
        if(error) error;
        resp.send(result)
    })
})


app.listen(5000,()=>{
    console.log("Server is listening on PORT 5000")
})