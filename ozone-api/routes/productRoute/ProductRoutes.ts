import Express from "express";
import {
  createProduct,
  getAllProducts,
  getProduct,
  deleteProduct,
  updateProduct,
  getAllFilteredProducts,
} from "../../controllers/ProductControllers/ProductControllers";

const router = Express.Router();

// Get all Products
router.get("/", getAllProducts);

// Get all Filtered Products
router.get("/filter", getAllFilteredProducts);

//Create an Product
router.post("/", createProduct);

//Get a Single Product
router.get("/:id", getProduct);

//Delete an Product
router.delete("/:id", deleteProduct);

//Update an Product
router.patch("/:id", updateProduct);

export default router;
