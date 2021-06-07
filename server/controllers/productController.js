import mongoose from "mongoose";
import productModel from "../models/Product.js";

const getProducts = async () => {
  const response = await productModel.find();
  let newresponse = response.map((product) => {
    let imagebuffer = Buffer.from(product.image);
    let imagedata = imagebuffer.toString("base64");
    let clone = JSON.parse(JSON.stringify(product));
    clone.image = imagedata;
    return clone;
  });
  return newresponse;
};

const getProduct = async (id) => {
  const response = await productModel.findById(id);
  let imagebuffer = Buffer.from(response.image);
  let imagedata = imagebuffer.toString("base64");
  let clone = JSON.parse(JSON.stringify(response));
  clone.image = imagedata;

  return clone;
};

const addProduct = async ({
  name,
  price,
  sizeAvailability,
  description,
  image,
}) => {
  let doc = new productModel({
    name: name,
    price: price,
    sizeAvailability: sizeAvailability,
    description: description,
    image: image,
  });

  await doc.save();
};

const updateProduct = async (id, doc) => {
  const response = await productModel.findByIdAndUpdate(id, doc);
  return response;
};

const deleteProduct = async (id) => {
  const response = await productModel.deleteOne({ _id: id });
  return response;
};

export default {
  getProducts,
  getProduct,
  addProduct,
  updateProduct,
  deleteProduct,
};
