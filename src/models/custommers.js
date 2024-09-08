const mongoose = require('mongoose');

const customerSchema = new mongoose.Schema({
        name: {
            type: String,
            require: true
        },
        address: String,
        phone: String,
        email:String,
        image: String,
        description: String,
    },
    {
        timestands: true
    }
);

const Customer = new mongoose.model('Customer',customerSchema);

module.exports = Customer;