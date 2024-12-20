import EventModel from '../models/event.model.js'

const findByCategory = async ({ category }) => {
    return await EventModel.find({ category }).lean()
}

const findRecomendedEvents = async () => {
    // find the 5 most visited events
    return await EventModel.find().sort({ visitCount: -1 }).limit(5).lean()
}

const EventService = {
    findByCategory,
    findRecomendedEvents,
}

export default EventService
