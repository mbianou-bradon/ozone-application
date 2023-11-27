import Express from "express";
import mongoose from "mongoose";
import Product from "../../models/ProductModel/ProductModel";

/**
 * createProduct - Create a newProduct with information gotten from the request body
 * @req : Incoming request argument
 * @res : response argument
 * @next : Function that proceed to the next Middleware
 *
 * Return : return the created data if positive or error message if fails
 *
 */
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

/**
 * getOneProduct - Get One Product from the Database with a particular id
 * @req : Incoming request argument
 * @res : response argument
 * @next : Function that proceed to the next Middleware
 *
 * Return : return the fetched data if positive or error message if fails
 *
 */
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

/**
 * getAllProducts - Get all Products from the Database and sort it from latest to oldest
 * @req : Incoming request argument
 * @res : response argument
 * @next : Function that proceed to the next Middleware
 *
 * Return : return the fetched data if positive or error message if fails
 *
 */
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

/**
 * updateProduct - Update a particular Product info with id gotten from request params
 * @req : Incoming request argument
 * @res : response argument
 * @next : Function that proceed to the next Middleware
 *
 * Return : return the fetched data if positive or error message if fails
 *
 */
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

/**
 * deleteProduct - find aProducte by id and delete it from the database
 * @req : Incoming request argument
 * @res : response argument
 * @next : Function that proceed to the next Middleware
 *
 * Return : return a positive message if successfull or error message if fails
 *
 */
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
