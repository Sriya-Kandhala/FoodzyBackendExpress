import mongoose from "mongoose";
import { ProductSchema } from "./schema.js";
import orderSchema from "./orderSchema.js";
import registerSchema from "./registrationSchema.js";
import jwt from "jsonwebtoken";


// const ProductModel = mongoose.model("Product",ProductSchema);
const ProductModel1 = mongoose.model("veg",ProductSchema);
const ProductModel2 = mongoose.model("nonveg",ProductSchema);
const DessertModel = mongoose.model("dessert",ProductSchema);
const BeveragesModel = mongoose.model("beverages", ProductSchema)
const orderModel = mongoose.model("order", orderSchema)
const registrationModel = mongoose.model("registrationdetail", registerSchema)



const addVegProducts = async(newVegProducts)=>{
        await ProductModel1.insertMany(newVegProducts)

}

const addNonVegProducts = async(newNonVegProducts)=>{
            await ProductModel2.insertMany(newNonVegProducts)

}

const addDessertProducts= async(newDessertProducts)=>{
    await DessertModel.insertMany(newDessertProducts)
}

const addBeverages = async(newBeveragesProducts)=>{
    await BeveragesModel.insertMany(newBeveragesProducts)
}



const fetchAllVegProducts =  async()=>{ 
    
    return await ProductModel1.find();

}

const fetchAllNonVegProducts =  async()=>{ 
    
    return await ProductModel2.find();

}

const fetchAllDessertProducts = async() =>{
    return await DessertModel.find();
}

const fetchAllBeveragesProducts = async()=>{
    return await BeveragesModel.find();
}



//orders
const createNewOrder = async(orderDetails)=>{
    await orderModel(orderDetails).save();
}

const fetchOrders = async()=>{
    return await orderModel.find();
}

//registration
const createUser = async(user)=>{
    await registrationModel(user).save();
}


const loginService = async (email, password) => {
  const user = await registrationModel.findOne({ email });
 if (!user){
      return res.status(401).json({
        success: false,
        message: "Invalid email or password",
      });
    }

  // ✅ Plain password check (for now)
  if (user.password !== password)  {
      return res.status(401).json({
        success: false,
        message: "Invalid email or password",
      });
    }

    const token =  jwt.sign(
    {
      id: user._id,
      email: user.email,
      
    },
    process.env.JWT_SECRET,
    {
      expiresIn: process.env.JWT_EXPIRES_IN, // e.g. 1d
    }
  );

  return{
    status: true,
    message: "login successful",
    token,
    user,
  };
  };


export{
    addVegProducts, 
    addNonVegProducts, 
    fetchAllNonVegProducts,
    fetchAllVegProducts, 
    addDessertProducts, 
    addBeverages, 
    fetchAllDessertProducts, 
    fetchAllBeveragesProducts, 
    createNewOrder,
    fetchOrders,
    createUser,
    loginService
  };