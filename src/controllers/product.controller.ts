import Product from "../models/product.model";
import express from "express";
// const auth = require("../middleware/auth.middleware")

export default {
  getAll: async (req: express.Request, res: express.Response) => {
    const products = await Product.find();
    res.json(products);
  },
  getById: async (req: express.Request, res: express.Response) => {
    try {
      const product = await Product.findOne({ _id: req.params.id });
      res.json(product);
    } catch (error) {
      res.send({ error: true });
    }
  },
  create: async (req: express.Request, res: express.Response) => {
    try {
      const product = new Product(req.body);
      await product.save();
      req.body._id = product._id.toString();
      if (product) {
        res.status(200).json(req.body);
      }
    } catch (error) {
      res.status(400).json({ success: false });
    }
  },
  delete: async (req: express.Request, res: express.Response) => {
    try {
      const products = await Product.deleteOne(req.body);
      if (products) {
        res.status(200).json({ success: true });
      }
    } catch (error) {
      res.status(400).json({ success: false });
    }
  },
  update: async (req: express.Request, res: express.Response) => {
    try {
      const { _id } = req.body;
      delete req.body._id;
      const result = await Product.updateOne({ _id: _id }, req.body);
      if (result.acknowledged) {
        res.status(200).json({ success: true });
      }
    } catch (error) {
      res.status(400).json({ success: false });
    }
  },
};
