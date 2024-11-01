// main.js or app.js
import express from 'express';
import session from 'express-session';
import connectDB from './db.js';
import cartRouter from './routes/cart.route.js';
import configViewEngine from './config/viewEngine.js';
import dotenv from 'dotenv';
import loginRouter from './routes/login.route.js'; 
import helmet from 'helmet';
import compression from 'compression';
import eventRouter from './routes/event.route.js';

dotenv.config();

const app = express();
const port = process.env.PORT;

// Connect to MongoDB
connectDB();

// Middlewares
app.use(helmet());
app.use(compression());
app.use(express.urlencoded({ extended: true })); // For parsing form data
app.use(session({
    secret: process.env.SESSION_SECRET || 'your_secret_key',
    resave: false,
    saveUninitialized: true,
}));
app.use(express.json()); // Để xử lý dữ liệu JSON

// View engine
configViewEngine(app);

// Routes
app.use('/', loginRouter);
app.use('/cart', cartRouter);
app.use('/event', eventRouter); // Add the event route

// Start the server
app.listen(port, () => console.log(`Example app listening at http://localhost:${port}`));


