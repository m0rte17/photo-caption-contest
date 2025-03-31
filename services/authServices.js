const { User } = require('../models');
const passwordUtils = require('../utils/passwordUtils');

exports.registerUser = async (username, email, password) => {
    const existingUser = await User.findOne({ where: { email } });
    if (existingUser) {
        throw new Error('User already exists');
    }

    const hashedPassword = await passwordUtils.hashPassword(password);
    const newUser = await User.create({
        username,
        email,
        password: hashedPassword
    });

    return newUser;
}; 

exports.loginUser = async (email, password) => {
    const user = await User.findOne({ where : { email } }); 
    
    if (!user) {
        throw new Error('User not found');
    }

    const passwordMatch = await passwordUtils.comparePassword(password, user.password);
    if (!passwordMatch) {
        throw new Error('Invalid password');
    }

    return user;
};

