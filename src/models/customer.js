import mongoose from 'mongoose';

const customerSchema = new mongoose.Schema({
    customerID: {
        type: String,
        required: true,
        unique: true
    },
    fullname: {
        type: String,
        required: true,
    },
    DOB: {
        type: Date,
        required: true,
    },
    gender: {
        type: String,
        required: true,
    },
    customer_start_date: {
        type: Date,
        required: true,
    },
    address: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    phone: {
        type: String,
        required: true,
    },
    password: {
        type: String,
        required: true,
    }
});

const Customer = mongoose.model('customers', customerSchema);

export default Customer;
