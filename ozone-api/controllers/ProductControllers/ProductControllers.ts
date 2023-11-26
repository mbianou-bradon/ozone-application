import Express from "express";
import mongoose from "mongoose";
import Product from "../../models/ProductModel/ProductModel";

// Create a new Product and store in database
export const createProduct = async (
  req: Express.Request,
  res: Express.Response,
  next: any
) => {
  const { name, category, imageUrl, amount, stock, description, user } =
    req.body;

  const product = {
    name,
    category,
    imageUrl,
    amount,
    stock,
    description,
    user,
  };
  try {
    const newProduct = await Product.create(product);
    return next(
      res.status(201).json({
        status: "OK",
        data: newProduct,
      })
    );
  } catch (error) {
    return next(res.status(404).json({ error }));
  }
};

// Get a new Product
export const getProduct = async (
  req: Express.Request,
  res: Express.Response,
  next: any
) => {
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({ message: "Product Doesn't exist! Wrong id" });
  }

  const product = await Product.findById(id).populate({
    path: "user",
    select:
      "-firstName -lastName -createdAt -updatedAt -TaxIDNumber -email -password -zipCode",
    options: { strictPopulate: false },
  });

  if (!product) {
    return res
      .status(404)
      .json({ message: "Product Doesn't exist! Not Found!" });
  }

  return next(
    res.status(201).json({
      status: "OK",
      data: product,
    })
  );
};

//Get all the Product
export const getAllProducts = async (
  req: Express.Request,
  res: Express.Response,
  next: any
) => {
  const defaultLimit = 10;
  let page = Number(String(req.query.page)) - 1 || 0;
  const limit = Number(String(req.query.limit)) || defaultLimit;
  const search = req.query.search || "";

  const products = await Product.find({
    name: { $regex: search, $options: "i" },
  })
    .sort({ createdAt: -1 })
    .skip(page * limit)
    .limit(limit)
    .populate({
      path: "user",
      select:
        "-firstName -lastName -createdAt -updatedAt -TaxIDNumber -email -password -zipCode",
      options: { strictPopulate: false },
    });

  const result = await Product.countDocuments({
    name: { $regex: search, $options: "i" },
  });

  const response = {
    error: false,
    result,
    limit,
    page: page + 1,
    products,
  };

  return next(res.status(200).json(response));
};

// Update an Product
export const updateProduct = async (
  req: Express.Request,
  res: Express.Response,
  next: any
) => {
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return next(
      res.status(404).json({
        status: "Not Found",
        message: "Invalid Product ID",
      })
    );
  }

  const product = await Product.findOneAndUpdate(
    { _id: id },
    {
      ...req.body,
    }
  );

  if (!product) {
    return next(
      res.status(404).json({
        status: "Not Found",
        message: "Product doesn't exist",
      })
    );
  }

  return next(
    res.status(200).json({
      status: "OK",
      data: product,
    })
  );
};

// Delete an Product
export const deleteProduct = async (
  req: Express.Request,
  res: Express.Response,
  next: any
) => {
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return next(
      res.status(404).json({
        status: "Not Found",
        message: "Invalid Product",
      })
    );
  }

  const product = await Product.findOneAndDelete({ _id: id });

  if (!Product) {
    return next(
      res.status(404).json({
        status: "Not Found",
        message: "Product doesn't exist",
      })
    );
  }

  return next(
    res.status(200).json({
      status: "OK",
      data: Product,
    })
  );
};
