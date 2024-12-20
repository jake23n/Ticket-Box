// main.js or app.js
import express from 'express'
import configViewEngine from './configs/viewEngine.js'
import indexRoutes from './routes/index.js'
import('./dbs/init.mongodb.js')

const app = express()

// Connect to MongoDB

// Middlewares

// View engine
configViewEngine(app)
app.use(indexRoutes)
// Routes

// Start the server

export default app
