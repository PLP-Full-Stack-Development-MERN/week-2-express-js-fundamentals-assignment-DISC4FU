exports.getUsers = (req, res) => {
    res.json({ message: 'Get all users' });
};

exports.createUser = (req, res) => {
    res.json({ message: 'Create a new user' });
};

exports.updateUser = (req, res) => {
    res.json({ message: `Update user with ID ${req.params.id}` });
};

exports.deleteUser = (req, res) => {
    res.json({ message: `Delete user with ID ${req.params.id}` });
};
