const express = require("express");
const mongoose = require("mongoose");
const multer = require("multer");
const path = require("path");
const bodyParser = require("body-parser");
const product = require("./productSchema");
const cors = require("cors");
const app = express();
const PORT = 3005;

mongoose.connect("mongodb://localhost:27017/Nova");
mongoose.connection.on("connected", () => {
  console.log("Connected to MongoDB");
});

mongoose.connection.on("error", (err) => {
  console.error("MongoDB connection error:", err);
});
const storage = multer.diskStorage({
  destination: "./uploads/",
  filename: (req, file, callback) => {
    callback(null, file.fieldname + "-" + Date.now() + file.originalname);
  },
});

const upload = multer({ storage });
app.use("/uploads", express.static(path.join(__dirname, "uploads")));
app.use(bodyParser.json());
app.use(cors());
app.get("/api/post", async (req, res) => {
  try {
    const products = await product.find();
    res.json(products);
  } catch (error) {
    console.error("error on fetching", error);
    res.status(500).json({ error: "server error" });
  }
});
app.post("/api/post", upload.single("image"), async (req, res) => {
  try {
    const newProduct = new product({
      ...req.body,
      image: req.file.path,
    });
    const savedProduct = await newProduct.save();
    res.json(savedProduct);
  } catch (error) {
    console.error("error on creating new product", error);
    res.status(500).json({ error: "server error" });
  }
});
app.put("/api/post/:_id", upload.single("image"), async (req, res) => {
  try {
    const productId = req.params._id;
    const updatedProduct = {
      ...req.body,
      ...(req.file && { image: req.file.path }),
    };
    const id = new mongoose.Types.ObjectId(productId)

    const result = await product.findByIdAndUpdate(id, updatedProduct);

    if (!result) {
      return res.status(404).json({ error: "Product not found" });
    }

    res.json(result);
  } catch (error) {
    console.error("Error on updating", error);
    res.status(500).json({ error: "Server error" });
  }
});
app.delete("/api/post/:_id", async (req, res) => {
  try {
    const productId = req.params._id;

    // Check if productId is a valid ObjectId
    if (!mongoose.Types.ObjectId.isValid(productId)) {
      return res.status(400).json({ error: "Invalid ObjectId" });
    }

    const result = await product.deleteOne({ _id: new mongoose.Types.ObjectId(productId) });

    if (result.deletedCount === 0) {
      return res.status(404).json({ error: "Product not found" });
    }

    res.json({ message: "Product deleted successfully" });
  } catch (error) {
    console.error("Error on deleting", error);
    res.status(500).json({ error: "Server error" });
  }
});
app.listen(PORT, () => {
  console.log("server is running on 3005");
});
