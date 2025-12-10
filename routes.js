import express from "express";
import {  createBeverageProducts, createDessertProducts, createNonVegProdcuts, createOrder, createVegProdcuts, getAllBeveragesProdcuts, getAllDessertProducts, getAllNonVegProducts, getAllVegProducts, getOrders, loginController, registerUser} from "./productController.js";
import { authenticate } from "./authentication.js";

//creating a new router instance
const router = express.Router();

router.post("/register",registerUser );
router.post("/login", loginController);
router.post("/veg", createVegProdcuts);
router.get("/getVeg", getAllVegProducts);


router.use(authenticate);

router.post("/nonveg", createNonVegProdcuts);
router.get("/getNonVeg", getAllNonVegProducts);
router.post("/desserts", createDessertProducts);
router.get("/getDesserts", getAllDessertProducts);
router.post("/beverages", createBeverageProducts);
router.get("/getBeverages", getAllBeveragesProdcuts);

router.post("/orders", createOrder);
router.get("/orders", getOrders);




//export the router object
export{router};


