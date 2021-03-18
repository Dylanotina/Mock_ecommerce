import mongoose, { Schema } from 'mongoose'

const ReviewSchema = new Schema({
    user : {type : Schema.Types.ObjectId, ref: 'User'},
    comment : String,
    grade : Number

})

const review = mongoose.model('Reviews', ReviewSchema)

export default review