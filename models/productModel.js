const { default: mongoose } = require("mongoose");

const productSchema = new mongoose.Schema({
    name:{
        type: String,
        required: [true, "Plz enter product name"],
    },
    price:{
        type: Number,
        required: true,
    },
    description:{
        type: String,
        required: false,
    },
    quantity:{
        type: Number,
        required: true,
        default:0,
    },
    image:{
        type: String,
        required: false,
    }
},
{
    timestamps: true,
});

module.exports = mongoose.model('Product', productSchema);



  