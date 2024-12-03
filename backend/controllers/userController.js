import asyncHandler from 'express-async-handler';
import User from '../models/userModel.js';

export const login = asyncHandler(async (req, res) => {
    const { username, password } = req.body;

    // Check if both username and password are provided
    if (!username || !password) {
        res.status(400);
        throw new Error('Please provide both username and password');
    }

    // Find the user in the database
    const user = await User.findOne({ username });

    if (user && user.password === password) {
        res.status(200).json({
            message: 'Login successful',
            userDetails: {
                id: user._id,
                name: user.name,
                username: user.username,
            },
        });
    } else {
        res.status(401);
        throw new Error('Invalid username or password');
    }
});


export const signup=asyncHandler(async(req, res) => {
    const {
        name,
        username,
        password,
        mobile,
        dob,
        sex,
        permanent_address,
        current_address,
        certificate_id,
        citizenship
    } = req.body;    
    const user= await User.create({
        name, username, password, mobile, dob, sex, permanent_address, current_address, certificate_id, citizenship
})
    res.json(user);
});
