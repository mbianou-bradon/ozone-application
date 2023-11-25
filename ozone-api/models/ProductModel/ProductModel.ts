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
      type: Array,
    },
    amount: {
      type: Number,
      required: [true, "Please enter amount of the Product"],
    },
    report: {
      type: Number,
      required: [true, "Number of times this Product was reported"],
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
