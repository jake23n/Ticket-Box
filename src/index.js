import express from 'express'
import homeRouter from './routes/home.route.js'
import cartRouter from './routes/cart.route.js'
import configViewEngine from './config/viewEngine.js'
import dotenv from 'dotenv'

dotenv.config()

const app = express()

const port = process.env.PORT || 8081



// engine 
configViewEngine(app)
// route 
//tất cả routes đứng sau / 
app.use('/', homeRouter)
app.use('/cart', cartRouter)




// lắng nghe thành công -> in ra console 
// localhost - 127.0.0.1 
app.listen(port, () => console.log(`Example app listening at http://localhost:${port}`))
// ctrl c -> disconnect server