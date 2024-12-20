import mongoose from 'mongoose'
import event from '../models/event.model.js'
import MongooseToObjectFunctions from '../../utils/mongooseToObjectFunctions.js';
class EventDetailController {
    getEventDetail = async (req, res, next) => {
        await event.findOne({ _id: req.params.id })
                .then(event => {
                    res.render('eventDetail/eventPage.ejs', { event: MongooseToObjectFunctions.mongooseToObject(event)});
                })
                .catch(next => {
                    console.log(next.message);
                }) 
    }

    // getBookingTicket = async (req, res, next) => {
    //     try {
    //         const _event = await event.findOne({ _id: req.params.id })

    //         if (!_event) {
    //             return res.status(404).send('Event not found');
    //         }
            
    //         const _tickets = await ticket.find({ EventID: _event.EventID });
    //         res.render('event/booking.ejs', { event: MongooseToObjectFunctions.mongooseToObject(_event), tickets: MongooseToObjectFunctions.multipleMongooseToObject(_tickets)});
    //     } catch (error) {
    //         console.log('Error in getBookingTicket:', error.message);
    //         return res.status(500).send('Internal Server Error');
    //     }
    // }

    // getInfoFilling = async(req, res, next) => {
    //     try {
    //         const _event = await event.findOne({ _id: req.params.id })

    //         if (!_event) {
    //             return res.status(404).send('Event not found');
    //         }
            
    //         const _tickets = await ticket.find({ EventID: _event.EventID });
    //         res.render('event/personalInfoFilling.ejs', { event: MongooseToObjectFunctions.mongooseToObject(_event), tickets: MongooseToObjectFunctions.multipleMongooseToObject(_tickets)});
    //     } catch (error) {
    //         console.log('Error in getBookingTicket:', error.message);
    //         return res.status(500).send('Internal Server Error');
    //     }
    // }

    // getPayment = async (req, res, next) => {
    //     await event.findOne({ _id: req.params.id })
    //         .then(event => {
    //             res.render('event/payment.ejs', { event: MongooseToObjectFunctions.mongooseToObject(event)});
    //         })
    //         .catch(next => {
    //             console.log(next.message);
    //         }) 
    // }
}

export default new EventDetailController()

// const getDetail = (req, res) => {
//     res.render('detail')
// }
// export default getDetail