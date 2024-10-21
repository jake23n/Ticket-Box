// main.js or app.js
import express from 'express';
import session from 'express-session';
import connectDB from './db.js';
import homeRouter from './routes/home.route.js';
import cartRouter from './routes/cart.route.js';
import configViewEngine from './config/viewEngine.js';
import dotenv from 'dotenv';
import loginRouter from './routes/login.route.js'; 

dotenv.config();

const app = express();
const port = process.env.PORT;

// Connect to MongoDB
connectDB();

// Middlewares
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
app.use('/', homeRouter);
app.use('/cart', cartRouter);
app.use('/login', loginRouter); // Add the auth routes

// Start the server
app.listen(port, () => console.log(`Example app listening at http://localhost:${port}`));


