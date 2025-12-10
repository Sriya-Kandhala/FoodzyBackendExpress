import mongoose from "mongoose";

const ProductSchema = new mongoose.Schema({
  id: String,
  name: String,
  price: Number,
  oldPrice: Number,
  offer: String,
  pack: String,
  tag: String,
  rating: String,
  img:String
});
export{ProductSchema};
