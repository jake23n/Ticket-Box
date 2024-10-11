import express from 'express'
import morgan from 'morgan'
import path from 'path'

// Định nghĩa hàm configViewEngine nhận đối số app
const configViewEngine = (app) => {
    // config view engine
    // ../ -> return previous directory 
    const __dirname = path.resolve()

    // app.use(express.static('public'))
    app.set('views', path.join(__dirname, 'src/views')); 
    app.use(express.static(path.join(__dirname, 'src/views'))); 


    app.set('view engine', 'ejs');

    // HTTP logger
    app.use(morgan('combined'));

    // Cấu hình file tĩnh
    // app.use(express.static(path.join(__dirname, '/views'))); 
};

export default configViewEngine
