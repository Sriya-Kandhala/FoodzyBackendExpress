// import mongoose from "mongoose";
// const orderSchema = new mongoose.Schema({
//     items:[
//         {
//             id:String,
//             name:String,
//             price:{ type: Number, default: 1 }
//         }
//     ],

//     totalAmount:{
//         type:Number,
//         required:true
//     },

//     orderDate:{
//         type:Date,
//         default:Date.now,
//     }
// },
// //it will add createdAt and updatedAt automatically
// {timestamps:true}

// );

// export default orderSchema;


import mongoose from "mongoose";

const orderSchema = new mongoose.Schema(
  {
    items: [
      {
        id: {
          type: String,
          required: true,
        },

        name: {
          type: String,
          required: true,
        },

        img: {
          type: String,
          required: true, // because you display image in UI
        },

        price: {
          type: Number,
          required: true,
        },

        quantity: {
          type: Number,
          required: true,
          default: 1,
        },
      },
    ],

    totalAmount: {
      type: Number,
      required: true,
    },

    orderDate: {
      type: Date,
      default: Date.now,
    },
  },
  {
    timestamps: true, // adds createdAt & updatedAt
  }
);

export default orderSchema;