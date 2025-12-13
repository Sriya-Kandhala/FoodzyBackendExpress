// import { addProduct, addProducts, addVegProducts, deleteProduct, fetchAllProducts, fetchProductById } from "./service.js";

import { addBeverages, addDessertProducts, addNonVegProducts, addVegProducts, createNewOrder, createUser, fetchAllBeveragesProducts, fetchAllDessertProducts, fetchAllNonVegProducts, fetchAllVegProducts, fetchOrders, loginService } from "./service.js";


const createVegProdcuts = async(req,res)=>{
    let newVegProducts = req.body;
     addVegProducts(newVegProducts);
    res.send("veg items added successfully");
}

const createNonVegProdcuts = async(req,res)=>{
    let newNonVegProducts = req.body;
    addNonVegProducts(newNonVegProducts);
    res.send(" Non veg items added successfully");
}

const createDessertProducts = async(req,res)=>{
    let newDessertProducts = req.body;
    addDessertProducts(newDessertProducts);
    res.send("Desserts added successfully");
}

const createBeverageProducts = async(req, res)=>{
    let newBeveragesProducts = req.body;
    addBeverages(newBeveragesProducts);
    res.send("Beverages added successfully");
}


const getAllVegProducts =async(req,res) => {
   
    const products = await fetchAllVegProducts();
    res.send(products);
}

const getAllNonVegProducts =async(req,res) => {
   
    const products = await fetchAllNonVegProducts();
    res.send(products);
}

const getAllDessertProducts = async(req,res)=>{
    const products = await fetchAllDessertProducts();
    res.send(products);

}

const getAllBeveragesProdcuts = async(req, res)=>{
    const products = await fetchAllBeveragesProducts();
    res.send(products);
}

const createOrder = async(req,res)=>{
    let orderDetails = req.body;
    createNewOrder(orderDetails);
    res.send("order created successfully");
}

const getOrders = async(req,res)=>{
    const orderProducts = await fetchOrders();
    res.send(orderProducts);
}


const registerUser = async(req,res)=>{
    let user = req.body;
   await createUser(user);
    res.send("User Registered Successfully");
}

const loginController = async(req,res)=>{
    const { email, password } = req.body;
    const response = await loginService(email, password);
//    user.status(200).json(result);
return res.json({
      success: true,
      message: response.message,
      token: response.token,
      user: response.user,
    });
}



// export { getAllProducts, getProductById, createProduct, createProducts, deleteProductById, createVegProdcuts};

export{
    createVegProdcuts, 
    createNonVegProdcuts, 
    getAllVegProducts, 
    getAllNonVegProducts, 
    createDessertProducts, 
    createBeverageProducts, 
    getAllDessertProducts, 
    getAllBeveragesProdcuts, 
    createOrder,
    getOrders,
    registerUser,
    loginController
};