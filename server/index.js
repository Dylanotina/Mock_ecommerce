import express from 'express'
import bodyParser from 'body-parser'
import cors from 'cors'
import dotenv from 'dotenv'
import routes from './routes.js'
import connect from './config/configdb.js'
import generatorProduct from './config/generator.js'
import path from 'path'


const app = express();
app.use(express.json())
dotenv.config()
app.use(cors())

app.use('/api', routes)
connect();

//generatorProduct()



const PORT = process.env.PORT || 3001

app.listen(PORT, ()=> console.log(`Server started on port ${PORT}`))