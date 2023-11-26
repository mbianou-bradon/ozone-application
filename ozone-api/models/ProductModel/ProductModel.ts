import mongoose from "mongoose";
import User from "../userModel/UserModel";

const ProductSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "A Product must have a name"],
    },
    category: {
      type: String,
      required: [true, "A Product must belong to atleast one Category"],
    },
    imageUrl: {
      type: String,
      required: [true, "Product image required"],
    },
    amount: {
      type: Number,
      required: [true, "Please enter amount of the Product"],
    },
    currency: {
      type: String,
      required: [true, "Add price currency"],
    },
    stock: {
      type: Number,
      required: [true, "Number of Product was available"],
    },
    description: {
      type: String,
    },
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: User,
      required: [true, "Every Product must have a userId"],
    },
  },
  { timestamps: true }
);

const Product = mongoose.model("Product", ProductSchema);

export default Product;
