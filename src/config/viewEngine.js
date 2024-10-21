import express from 'express'
import morgan from 'morgan'
import path from 'path'

const configViewEngine = (app) => {
    const __dirname = path.resolve()

    app.set('views', path.join(__dirname, 'src/views')); 
    app.use(express.static(path.join(__dirname, 'src/views'))); 


    app.set('view engine', 'ejs');

    // HTTP logger
    app.use(morgan('combined'));
};

export default configViewEngine

