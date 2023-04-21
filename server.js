const express = require('express');
const { default: mongoose } = require('mongoose');
const Product = require('./models/productModel');
const app = express();
const mongo = require('mongoose');


// Middleware
app.use(express.json());
app.use(express.urlencoded({extended:false}))


// Routes
app.get('/', (req, res) => {
    res.send('Hello World to new day have a nice day');
    }
);

// product get
app.get('/product', async(req, res) => {
    try{
        const products = await Product.find();
        res.status(200).json(products);
    }
    catch(err){
        res.status(500).json({message: err.message});
    }
})
// product post
app.post('/product', async (req, res) => {
    try{
        const product = await Product.create(req.body);
        res.status(201).json(product)
    }
    catch(err){
        console.log(err.message);
        res.status(500).json({message: err.message});
    }
})

// product get by id
app.get('/product/:id', async (req ,res) => {
    try{
        const product = await Product.findById(req.params.id);
        res.status(200).json(product);
    }
    catch(err){
        res.status(500).json({message: err.message});
    }
})

// product update
app.put('/product/:id', async (req, res) => {
    try{
        const id = req.params.id;
        const product = await Product.findByIdAndUpdate(id, req.body);
        const updatedata = await Product.findByIdAndUpdate(id, req.body);
        res.status(200).json(updatedata);
    }
    catch(err){
        res.status(500).json({message: err.message});
    }
});

// product delete
app.delete('/product/:id/', async (req, res) => {
    try {
        const id = req.params.id;
        const product = await Product.findByIdAndDelete(id);
        if(!product){
        res.status(404).json({message: 'No product found'});
        }
        res.status(200).json({message: 'Product deleted'});
    } catch (error) {
        res.status(500).json({message: err.message});   
    }
})

mongo.set("strictQuery", false)
mongoose.connect('mongodb+srv://t2kura00:root@restapii.fgetk48.mongodb.net/test')
    .then(() => {console.log('Connected to MongoDB...')
    app.listen(3000, () => {
        console.log('Server started on port 3000');
        }); 
})
    .catch(err => console.error('Could not connect to MongoDB...'));
    
    

