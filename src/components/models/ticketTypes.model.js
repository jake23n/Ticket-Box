import {model, Schema} from 'mongoose';
const DOCUMENT_NAME = 'ticketTypeModel';
const COLLECTION_NAME = 'TicketTypes';

const ticketTypeSchema = new Schema({
    name: {
        type: String
    },
    price: {
        type: Number
    },
    quantity: {
        type: Number
    },
    description: {
        type: String
    }
});

export default ticketTypeSchema;