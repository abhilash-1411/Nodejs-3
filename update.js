const dbConnect=require('./mongodb');

const updateDB=async()=>{
    let data= await dbConnect();
     let result= await data.updateOne({name:'Poco'},{$set:{name:'Poco Pro'}})
     console.warn(result)
}
updateDB();