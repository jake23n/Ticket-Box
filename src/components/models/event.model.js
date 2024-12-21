import {model, Schema} from 'mongoose';
import ticketTypeSchema from './ticketTypes.model.js'
const DOCUMENT_NAME = 'EventModel';
const COLLECTION_NAME = 'Events';

const eventSchema = new Schema({
    addressProvince: {
        type: String,
        required: true
    },
    addressDetail: {
        type: String,
        required: true
    },
    startDate: {
        type: Date,
        required: true,
    },
    endDate: {
        type: Date,
        required: true,
    },
    visitCount: {
        type: Number,
        default: 0
    },
    description: {
        type: String,
    },
    category: {
        type: String,
        required: true
    },
    status: {
        type: String,
        required: true,
        enum: ['Active', 'Inactive'],
    },
    title: {
        type: String,
        required: true,
    },
    ticketTypes: {
        type: [ticketTypeSchema],
    },
    banner: {
        type: String,
        required: true,
    },
}, {
    timestamps: true,
    collection: COLLECTION_NAME
});

// const Event = mongoose.model('Event', eventSchema, 'Event'); 
// Mongoose tự động thêm s vào tên collection nên phải thêm biến thứ 3 để xác nhận tên

const EventModel = model(COLLECTION_NAME, eventSchema);

export default EventModel;