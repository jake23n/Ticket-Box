import event from '../models/event.js'
import MongooseToObjectFunctions from '../mongoose.js';
class EventController {
    getEventDetail = (req, res, next) => {
        event.findOne({ _id: req.params.id})
            .then(event => {
                res.render('event/eventPage.ejs', { event: MongooseToObjectFunctions.mongooseToObject(event) });
            })
            .catch(next);
    }
}

export default new EventController()