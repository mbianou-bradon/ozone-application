import Express from "express";
import mongoose from "mongoose";
import Product from "../../models/ProductModel/ProductModel";

// Create a new Product and store in database
export const createProduct = async (
  req: Express.Request,
  res: Express.Response,
  next: any
) => {
  const {
    message,
    category,
    image,
    location,
    duration,
    visibility,
    report,
    user,
  } = req.body;

  const Product = {
    message,
    category,
    image,
    location,
    duration,
    visibility,
    report,
    user,
  };
  try {
    const newProduct = await Product.create(Product);
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

  const Product = await Product.findById(id).populate({
    path: "user",
    select:
      "-createdAt -updatedAt -category -age -strikes -firstTime -ban -oAuthToken",
    options: { strictPopulate: false },
  });

  if (!Product) {
    return res
      .status(404)
      .json({ message: "Product Doesn't exist! Not Found!" });
  }

  return next(
    res.status(201).json({
      status: "OK",
      data: Product,
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
  const hidden = req.query.hidden || "true";

  let category: string | string[] = String(req.query.category)! || "All";

  const categories = await Category.find({})
    .sort({ createdAt: -1 })
    .select("name");

  const allCategories = categories.map((category) => category.name);

  category === "All"
    ? (category = [...allCategories])
    : (category = category.split(","));

  let query: any = {
    message: { $regex: search, $options: "i" },
    category: { $in: [...category] },
  };

  if (hidden === "true") {
    query = {
      ...query,
      visibility: { $eq: true },
    };
  } else if (hidden === "false") {
    query = query;
  }
  const Products = await Product.find(query)
    .sort({ createdAt: -1 })
    .skip(page * limit)
    .limit(limit)
    .populate({
      path: "user",
      select:
        "-createdAt -updatedAt -category -age -strikes -firstTime -ban -oAuthToken",
      options: { strictPopulate: false },
    });

  const result = await Product.countDocuments(query);

  const response = {
    error: false,
    result,
    limit,
    page: page + 1,
    category: categories,
    Products,
  };

  return next(res.status(200).json(response));
};

// Get All Products per filtering params
export const getAllFilteredProducts = async (
  req: Express.Request,
  res: Express.Response,
  next: any
) => {
  const defaultLimit = 10;
  let page = Number(String(req.query.page)) - 1 || 0;
  const limit = Number(String(req.query.limit)) || defaultLimit;
  const search = req.query.search || "";
  const hidden = req.query.hidden || "true";
  const location = req.query.location || "";
  const date = req.query.date || "";

  let category: string | string[] = String(req.query.category)! || "All";

  const categories = await Category.find({})
    .sort({ createdAt: -1 })
    .select("name");

  const allCategories = categories.map((category) => category.name);

  category === "All"
    ? (category = [...allCategories])
    : (category = category.split(","));

  let query: any = {
    message: { $regex: search, $options: "i" },
    category: { $in: [...category] },
  };

  if (hidden === "true") query = { ...query, visibility: { $eq: true } };
  else if (hidden === "false") query = query;

  if (location !== "") query = { ...query, location: { $eq: location } };

  if (date !== "") query = { ...query, duration: { $eq: date } };

  console.log(query);

  const Products = await Product.find(query)
    .sort({ createdAt: -1 })
    .skip(page * limit)
    .limit(limit)
    .populate({
      path: "user",
      select:
        "-createdAt -updatedAt -category -age -strikes -firstTime -ban -oAuthToken",
      options: { strictPopulate: false },
    });

  const result = await Product.countDocuments(query);

  const response = {
    error: false,
    result,
    limit,
    page: page + 1,
    category: categories,
    Products,
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
        message: "Product doesn't exist",
      })
    );
  }

  const Product = await Product.findOneAndUpdate(
    { _id: id },
    {
      ...req.body,
    }
  );

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
        message: "Product doesn't exist",
      })
    );
  }

  const Product = await Product.findOneAndDelete({ _id: id });

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
