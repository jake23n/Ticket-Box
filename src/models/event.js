import mongoose from 'mongoose';

const eventSchema = new mongoose.Schema({
    StartDate: {
        type: Date,
        required: true,
    },
    EndDate: {
        type: Date,
        required: true,
    },
    Description: {
        type: String,
        required: true,
    },
    Address: {
        type: String,
        required: true,
    },
    VisitCount: {
        type: Number,
        required: true,
    },
    Category: {
        type: String,
        required: true
    },
    Status: {
        type: String,
        required: true,
        enum: ['Active', 'Inactive'],
        default: 'Inactive'
    },
    EventID: {
        type: String,
        required: true,
        unique: true
    },
    Name: {
        type: String,
        required: true,
    },
    Banner: {
        type: String,
        required: true,
    },
});

const Event = mongoose.model('Event', eventSchema, 'Event'); 
// Mongoose tự động thêm s vào tên collection nên phải thêm biến thứ 3 để xác nhận tên

export default Event;