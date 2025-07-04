const mysql=require('mysql');

const conn=mysql.createConnection({
    host:'localhost',
    user:'root',
    password:'',
    database:'test'
})

conn.connect((err)=>{
    if(err){
        console.warn("Error")
    }
    else{
        console.warn("Connected")
    }
})

conn.query("select * from users",(err,result)=>{
    console.warn("result",result)
})