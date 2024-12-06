// main.js or app.js
import express from 'express';
import configViewEngine from './configs/viewEngine.js';
import indexRoutes from './components/routes/index.js';


const app = express();

// Connect to MongoDB
import ('./dbs/init.mongodb.js')


// Middlewares

// View engine
configViewEngine(app);
app.use(indexRoutes)
// Routes

// Start the server

export default app

