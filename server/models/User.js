import mongoose, { Schema } from 'mongoose'

const UserSchema = new Schema({
    name : String,
    username : String,
    password : String,
    adress : String,

})

const user = mongoose.model('User', UserSchema)

export default user