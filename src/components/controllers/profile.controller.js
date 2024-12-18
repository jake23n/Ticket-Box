import CustomerModel from "../models/customer.model.js";
import core from "../../core/error.response.js";  // Import default object
const { NotFoundRequest, InternalServerError } = core;
class ProfileController {
    async getProfile(req, res, next) {
        try {
            const customer = req.session.customer;
            if (!customer) {
                throw new NotFoundRequest("Customer not found in session");
            }

            if (customer.DOB) {
                customer.DOB = new Date(customer.DOB);
            }

            res.render('profile', { customer: customer });
        } catch (error) {
            next(error);
        }
    }

    async updateProfile(req, res, next) {
        try {
            const { fullName, DOB, gender, address, phone, email } = req.body;
            const customer_id = req.session.customer._id;

            if (!customer_id) {
                throw new NotFoundRequest("Customer not found in session");
            }

            const updatedCustomer = await CustomerModel.findByIdAndUpdate(
                customer_id,
                { fullName, DOB, gender, address, phone },
                { new: true, runValidators: true }
            );

            if (!updatedCustomer) {
                throw new NotFoundRequest("Customer not found");
            }

            if (updatedCustomer.DOB) {
                updatedCustomer.DOB = new Date(updatedCustomer.DOB);
            }

            req.session.customer = updatedCustomer;

            res.redirect('/profile');
        } catch (error) {
            next(error);
        }
    }
}

export default new ProfileController();
