import mongoose from "mongoose";

const registerSchema = new mongoose.Schema(
  {
    username: {
      type: String,
      required: true,
      trim: true
    },

    email: {
      type: String,
      required: true,
      unique: true,
      lowercase: true
    },

    password: {
      type: String,
      required: true,
      minlength: 6
    },

    phone: {
      type: String,
      required: true
    },

    address:{
        type: String,
        required: true
    }  
  },

  {
    timestamps: true
  }
);

export default registerSchema;