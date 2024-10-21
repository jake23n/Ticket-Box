import express from 'express';
import User from '../models/customer.js';
import bcrypt from 'bcryptjs';
import getLogin from '../controllers/login.controller.js'
const router = express.Router();

router.get('/', getLogin)
// POST /login
router.post('/', async (req, res) => {
    const { username, password } = req.body; // Lấy thông tin từ body của yêu cầu
   
    // Tìm khách hàng theo email
    const customer = await User.findOne({ customer_email: username }); // Sửa lại tên trường cho đúng
    
    if (!customer) {
        return res.status(400).send('Invalid username or password');
    }

    // So sánh mật khẩu
    if (password !== customer.customer_password) {
        return res.status(400).send('Invalid username or password');
    }

    // Thiết lập phiên làm việc
    req.session.customer_id = customer._id;
    res.send('Logged in successfully');
});

export default router;
