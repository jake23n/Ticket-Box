import express from 'express';
import User from '../models/customer.js';
import bcrypt from 'bcryptjs';
import getLogin from '../controllers/home.controller.js'
import jwt from 'jsonwebtoken';

const router = express.Router();

router.get('/', getLogin)
// POST /login
router.post('/', async (req, res) => {
    const { username, password } = req.body; // Lấy thông tin từ body của yêu cầu
   
    // Tìm khách hàng theo email
    const customer = await User.findOne({ email: username }); // Sửa lại tên trường cho đúng
    
    if (!customer) {
        return res.status(400).send('Invalid username or password');
    }

    // const isMatch = await bcrypt.compare(password, user.password);
    // if (!isMatch) {
    //     return res.status(400).send('Invalid username or password');
    // }
    // So sánh mật khẩu
    if (password !== customer.password) {
        return res.status(400).send('Invalid username or password');
    }

    // const token = jwt.sign({ customerId: User.customerID }, process.env.JWT_SECRET || 'your_jwt_secret', { expiresIn: '1h' });
    // res.json({ token }); // Gửi token về client


    // Thiết lập phiên làm việc
    req.session.customer_id = customer._id;
    res.send('Logged in successfully');

});

export default router;
