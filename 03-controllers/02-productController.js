exports.getProducts = (req, res) => {
    res.json({ message: 'Get all products' });
};

exports.createProduct = (req, res) => {
    res.json({ message: 'Create a new product' });
};

exports.updateProduct = (req, res) => {
    res.json({ message: `Update product with ID ${req.params.id}` });
};

exports.deleteProduct = (req, res) => {
    res.json({ message: `Delete product with ID ${req.params.id}` });
};
