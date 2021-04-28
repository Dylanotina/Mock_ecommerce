import mongoose from 'mongoose'
import productModel from '../models/Product.js'

const getProducts = async () => {
    const response = await productModel.find()
    return response
}

const getProduct = async (id) => {
    const response = await productModel.findById(id)
    return response
}

const addProduct = async({name, price, sizeAvailability,description,image}) => {
    let doc = new productModel({
        name : name,
        price : price,
        sizeAvailability :sizeAvailability,
        description : description,
        image : image
    })

    await doc.save()
}

const updateProduct = async (id, doc) =>
{
    const response = await productModel.findByIdAndUpdate(id, doc)
    return response
}

const deleteProduct = async (id) =>
{
    const response = await productModel.deleteOne({_id : id })
    return response
}

export default {getProducts, getProduct, addProduct, updateProduct, deleteProduct}