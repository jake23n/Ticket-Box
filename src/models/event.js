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
    },
    Category: {
        type: String,
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
});

const Event = mongoose.model('events', eventSchema);

export default Event;