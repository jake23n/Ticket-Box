import express from 'express';
import User from '../models/customer.js';
import bcrypt from 'bcryptjs';
import getLogin from '../controllers/home.controller.js'
import jwt from 'jsonwebtoken';

const router = express.Router();

router.get('/', getLogin)
// POST /login
router.post('/', async (req, res) => {
    const { username, password } = req.body;

    try {
        const customer = await User.findOne({ email: username });

        if (!customer) {
            return res.status(400).send('Invalid username or password');
        }

        // const isMatch = await bcrypt.compare(password, customer.password);
        // if (!isMatch) {
        //     return res.status(400).send('Invalid username or password');
        // }

        if (password !== customer.password) {
            return res.status(400).send('Invalid username or password');
        }
        // Tạo JWT cho người dùng đã đăng nhập
        const token = jwt.sign({ customerId: customer._id }, process.env.JWT_SECRET || 'your_jwt_secret', { expiresIn: '1h' });

        // Thiết lập phiên làm việc
        req.session.customer_id = customer._id;

        // Gửi token và thông báo về client trong một phản hồi duy nhất
        res.json({ token, message: 'Logged in successfully' });
    } catch (error) {
        console.error('Login Error:', error);
        res.status(500).send('Internal Server Error');
    }
});


export default router;
