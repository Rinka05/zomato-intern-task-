const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const bookSchema = new Schema({
    title:{
        type: String,
    },
    ISBN:{
        type:String,
        unique:true
    },
    genre:{
        type: String,
    },
    price:{
        type: Number,
        min: 0,
    },
    quantity_available: {
        type : Number,
    }
});

// schema for authors collection

const authorSchema = new Schema ({
    author_name :{
        type:String,
        unique :true,
    },
    birth_data:{
        type: Date
    },
    nationality:{
        type:String
    }
});


// schema for customers collection
const customerSchema = new Schema({
    first_name:{
        type:String,
    },
    last_name:{
        type :String,
    },
    email:{
        type: String , 
        unique: true
    },
    phone:{
        type: String,
    },
    address:{
        type: String
    }
});


// schema for order collection
const orderSchema = new Schema({
    customer_id : {
        type: Schema.Types.ObjectId ,
         ref: 'Customer'
        },
        order_date:{
            type:Date,
        },
        total_price:{
            type: Number,
            min: 0,
        },
        delivery_address: String
});


const Book = mongoose.model('Book', bookSchema);
const Author = mongoose.model('Author', authorSchema);
const Customer = mongoose.model('Customer', customerSchema);
const Order = mongoose.model('Order', orderSchema);

module.exports = {Book , Author , Customer , Order};


