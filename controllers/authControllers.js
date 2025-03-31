const authServices = require('../services/authServices');

exports.register = async (req, res) => {
    const { username, email, password } = req.body;

    try {
        const user = await authServices.registerUser(username, email, password);
        res.status(201).json({ message: 'User registered successfully', username: user.username });
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

exports.login = async (req, res) => {
    const { email, password } = req.body;

    try {
        const user = await authServices.loginUser(email, password);
        req.session.userId = user.id;
        res.status(200).json({ message: 'Login successful', username: user.username });
    } catch (error) {
        res.status(401).json({ error: error.message });
    }
};

exports.logout = async (req, res) => {
    req.session.destroy((err) => {
        if (err) {
            return res.status(500).json({ error: 'Failed to logout' });
        }
        res.clearCookie('connect.sid');
        res.json({ message: 'Logout successful' });
    });
};