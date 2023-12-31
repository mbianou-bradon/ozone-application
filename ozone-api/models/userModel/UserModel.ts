import mongoose from "mongoose";
import * as bcryptjs from "bcryptjs";

const userSchema = new mongoose.Schema(
  {
    firstName: {
      type: String,
      required: [true, "first name is required"],
    },
    lastName: {
      type: String,
      required: [true, "last name is required"],
    },
    phoneNumber: {
      type: Number,
      required: [true, "user must have a valid phone number"],
    },
    email: {
      type: String,
      required: [true, "Please Add an Email address"],
    },
    password: {
      type: String,
    },
    brandName: {
      type: String,
      required: [true, "Brand Name is required"],
    },
    brandType: {
      type: String,
      required: [true, "brand Type is required"],
    },
    streetAddress: {
      type: String,
      required: [true, "Street Address is required"],
    },
    city: {
      type: String,
      required: [true, "City is required"],
    },
    zipCode: {
      type: String,
      required: [true, "zip Code is required"],
    },
    taxIDNumber: {
      type: String,
      required: [true, "Tax ID Number is required"],
    },
  },
  { timestamps: true }
);

userSchema.pre("save", async function (next) {
  if (!this.isModified("password")) {
    next();
  }
  const password = this.password!;
  this.password = await bcryptjs.hash(password, 10);
});

const User = mongoose.model("User", userSchema);

export default User;
