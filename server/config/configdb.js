import mongoose from 'mongoose'

const connect = () => {
    try {
        mongoose.connect(process.env.MONGO_URI, {useNewUrlParser: true, useUnifiedTopology : true})
        console.log('Connected to the database...')
    } catch (error) {
        console.log(error)
    }
}

export default connect