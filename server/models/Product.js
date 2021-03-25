import mongoose from 'mongoose'

const  { Schema } = mongoose

const productSchema = new mongoose.Schema({

    name : String,
    price : Number,
    sizeAvailability : [Number],
    desciption : String,
    reviews : [{type : Schema.Types.ObjectId, ref: 'Review'}],
    image : Buffer,  
    category : {type : Schema.Types.ObjectId, ref: 'Category'}

})

const product = mongoose.model('Products', productSchema)

export default product