import mongoose from 'mongoose';

const customerSchema = new mongoose.Schema({
    customer_id: {
        type: String,
        required: true,
        unique: true
    },
    customer_name: {
        type: String,
        required: true,
    },
    customer_dob: {
        type: Date,
        required: true,
    },
    customer_gender: {
        type: String,
        required: true,
    },
    customer_start_date: {
        type: Date,
        required: true,
    },
    customer_address: {
        type: String,
        required: true,
    },
    customer_email: {
        type: String,
        required: true,
        unique: true
    },
    customer_phone: {
        type: String,
        required: true,
    },
    customer_password: {
        type: String,
        required: true,
    }
});

const Customer = mongoose.model('customers', customerSchema);

export default Customer;
