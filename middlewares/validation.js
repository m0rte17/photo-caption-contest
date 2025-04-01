const validator = require('validator');

exports.validateRegister = (req, res, next) => {
    const { username, email, password } = req.body;
    
    if (!username || !email || !password) {
        return res.status(400).json({ message: 'All fields are required' });
    }
    if (password.length < 8) {
        return res.status(400).json({ message: 'Password must be at least 8 characters long' });
    }
    if (!validator.isEmail(email)) {
        return res.status(400).json({ message: 'Invalid email address' });
    }
    next();
};

exports.validateCaption = (req, res, next) => {
    const { text } = req.body;
    if (!text) {
        return res.status(400).json({ message: 'Caption is required' });
    }
    if (text.length > 255) {
        return res.status(400).json({ message: 'Caption must be less than 255 characters' });
    }
    next();
};

