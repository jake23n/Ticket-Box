import express from 'express';
import event from '../models/event.js';
import EventController from '../controllers/event.controller.js'

const router = express.Router();
router.get('/', EventController.getEventDetail);
router.get('/:id', EventController.getEventDetail);

export default router;