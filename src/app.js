// main.js or app.js
import express from 'express';
import configViewEngine from './configs/viewEngine.js';
import indexRoutes from './components/routes/index.js';
import accessController  from './components/controllers/access.controller.js';
import  ErrorResponse from './core/error.response.js'; // Import các lớp ErrorResponse nếu bạn đã định nghĩa


const app = express();

// Connect to MongoDB
import ('./dbs/init.mongodb.js')


// Middlewares

// View engine
configViewEngine(app);
// Routes
app.use(indexRoutes)
app.get('/logout', (req, res) => {
    accessController.logout(req, res);
});

// Error handling middleware
app.use((err, req, res, next) => {
    if (process.env.NODE_ENV === 'production') {
        return res.render('404');
    } else {
        if (err instanceof ErrorResponse) {
            return res.status(err.statusCode).json({
                message: err.message,
                stack: err.stack,
            });
        } else {
            return res.status(500).json({
                message: 'An unexpected error occurred',
                error: err.message,
                stack: err.stack,
            });
        }
    }
});

// Start the server

export default app

