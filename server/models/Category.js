import mongoose, { Schema } from 'mongoose'

const CategorySchema = new Schema({
    name : String
})

const category = mongoose.model('Category', CategorySchema)

export default category