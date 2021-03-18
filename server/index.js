import express from 'express'
import bodyParser from 'body-parser'
import cors from 'cors'
import dotenv from 'dotenv'
import routes from './routes.js'
import connect from './config/configdb.js'


const app = express();
app.use(express.json())
dotenv.config()
app.use(cors())

app.use('/api', routes)
connect();

const PORT = process.env.PORT || 3000

app.listen(PORT, ()=> console.log(`Server started on port ${PORT}`))