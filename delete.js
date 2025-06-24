const dbConnect=require('./mongodb');

const delelteData= async() =>{
    let db= await dbConnect();
    let result=await db.deleteMany({name:'Poco Pro'})
    console.warn(result)
    
}
delelteData()