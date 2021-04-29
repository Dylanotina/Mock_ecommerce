import {Router} from 'express'
import productController from './controllers/productController.js'

const router = Router()

router.get('/', (req,res) => res.send('Hello world...'))

router.get('/products' , async(req, res) => {
    let dbresponse =  await productController.getProducts()
    res.json({success : true, data : dbresponse })
})

router.get('/product/:id', async(req,res)=> {
    let {id} = req.params
    let dbresponse =  await productController.getProduct(id)
    res.json({success : true, data : dbresponse })
})

router.post('/product', (req,res)=> {
    let product = req.body
    productController.addProduct(product)
    res.json({success : true})
})

router.put('/product', async (req,res) => {
    let {id} = req.body
    let docModified = req.body
    delete docModified.id
    let dbresponse =  await productController.updateProduct(id, docModified)
    res.json({success : true, data : dbresponse})
})

router.delete('/product', async(req,res)=> {
    let {id} = req.body
    let dbresponse =  await productController.deleteProduct(id)
    res.json({success : true })
})

router.post('/login', (req,res)=> {})

router.get('/logout', (req,res)=> {})

export default router