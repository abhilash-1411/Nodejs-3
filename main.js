const mongoose=require('mongoose')

const main=async()=>{
  await mongoose.connect('mongodb://localhost:27017/E-comm')
  const ProductSchema= new mongoose.Schema({
    name:String,
    price:Number
  })
  const ProductsModel=mongoose.model('products',ProductSchema)
  let data=new ProductsModel({name:'ac',price:1200});
  let res= await data.save();
  console.log(res);
}
main();