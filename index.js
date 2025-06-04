// const app=require('./app')
const fs=require('fs')
const data=require('./data')

// console.log("Hello");

// var a=10;
// var b=20;
// var c=30;
// console.warn(a+b+c)

// console.log(app)
// console.log(app.x);
// console.log(app.y);
// console.log(app.z());

// Filter 
// const arr=[1,2,3,4,5,6,7,8,9,9,9];
// const res1=arr.filter((item)=>{
//     // return item===9;
//     return item>=3;
// })
// // console.log(res1)
// console.log(__dirname);
// console.log(__filename);

// fs.writeFileSync("code.txt",'Haan bhaiyaa');

// #7  
// Basic server 

// const http=require('http')

// http.createServer((req,res)=>{
//     // res.write("<h1>Hellooo this is Abhilash <br/> trying to create a server </h1> ")
//     // res.end();
//     res.writeHead(200,{'Content-Type':'application\json'});
//     res.write(JSON.stringify(data))
//     res.end();
// }

// ).listen(4500)

//13-Creating file from command line
// const path=require('path')
// const dirPath=path.join(__dirname,'files');
// // for(let i=0;i<5;i++){
// //   fs.writeFileSync(dirPath+"/text"+i+".txt","A simple text file"+i+"");
// // }

// fs.readdir(dirPath,(err,files)=>{
// files.forEach((file)=>{
// console.log("File name is ",file)
// })
// })

/*
//14-CRUD with File system
const path=require('path')
const dirPath=path.join(__dirname,'crud')
const filePath=`${dirPath}/test.txt`
//Create
fs.writeFileSync(filePath,'A simple text file')
//Read
fs.readFile(filePath,'utf8',(err,file)=>{
    console.warn(file)
})
//Update
fs.appendFile(filePath,' and file name is test',(err)=>{
    if(!err) console.log("File is updated")
})
// //Rename
fs.rename(filePath,`${dirPath}/testing.txt`,(err)=>{
     if(!err) console.log("File is renamed")
})
//Delete
// fs.unlinkSync(`${dirPath}/testing.txt`)
*/


// Expresss 
// const express=require('express')
// const app=express();

// app.get('',(req,res)=>{
//     console.log("Data sent by browser",req.query.name)
//     res.send(`<h1>Hello,this is home page </h1>
//         <a href="/about" >Go to About page</a>
//         `)
    
// })
// app.get('/about',(req,res)=>{
//     res.send(`
//        <input type='text' placeholder='User name' value=${req.query.name} /> 
//        <button>Submit</button>
//          <a href="/help" >Go to help page</a>

//         `)
// })
// app.get('/help',(req,res)=>{
//     res.send({
//    name:'Abhilash',
//  email:'abhi@test.com '
//     })
// })

// render html pahe ---- 
// const path=require('path')
// const publicPath=path.join(__dirname,'public')

// app.use(express.static(publicPath))

// app.listen(5000)

//25-Middleware

const express=require('express');
const app=express();

const reqFilter=(req,resp,next)=>{
    if(!req.query.age){
        resp.send('Please provide age')
    }
    else if(req.query.age<18){
        resp.send('You can not access this page')
    }
    else{
 next();
    }
   
}
app.use(reqFilter)

app.get('/',(req,resp)=>{
    resp.send('Welcome to home page')
})
app.get('/users',(req,resp)=>{
    resp.send('Welcome to users  page')
})
app.listen(5000);
