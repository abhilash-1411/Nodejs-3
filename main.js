const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost:27017/E-comm");
const ProductSchema = new mongoose.Schema({
  name: String,
  price: Number,
  brand: String,
  category: String,
});

const saveInDB = async () => {
  const Product = mongoose.model("products", ProductSchema);
  let data = new Product({
    name: "Pixel3",
    price: 2350,
    brand: "Google",
    category: "Mobile",
  });
  let res = await data.save();
  console.log(res);
};
// saveInDB();

const updateInDB=async ()=>{
 const Product = mongoose.model("products", ProductSchema);
 let data=await Product.updateOne({name:'Pixel3'},{$set:{price:786}})
  console.log(data)
}
// updateInDB()

const deleteInDB=async ()=>{
 const Product = mongoose.model("products", ProductSchema);
 let data=await Product.deleteOne({name:'ac'})
  console.log(data)
}
// deleteInDB()

const findInDB=async ()=>{
 const Product = mongoose.model("products", ProductSchema);
 let data=await Product.find()
  console.log(data)
}
findInDB()