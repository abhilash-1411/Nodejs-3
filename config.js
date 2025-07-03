const mongoose=require('mongoose')
const mysql=require('mysql')

mongoose.connect('mongodb://localhost:27017/E-comm')

const con=mysql.createConnection({
     host:'localhost',
    user:'root',
    password:'',
    database:'test'
})

con.connect((err)=>{
if(err){
    console.warn("error")
}
else{
    console.warn('Connected successfully')
}
})

module.exports=con;