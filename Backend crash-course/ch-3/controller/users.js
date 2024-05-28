const fs = require('fs');
const index = fs.readFileSync('index.html', 'utf-8');
const data = JSON.parse(fs.readFileSync('data.json', 'utf-8'));
const product = data.products;

exports.createProduct = (req, res) => {
    const newProduct = req.body;
    if (!newProduct || !newProduct.id) {
        return res.status(400).json({ error: 'Invalid product data' });
    }
    product.push(newProduct);
    res.status(201).json(newProduct);
}
exports.displayProduct = (req, res) => {
    res.json(product);
}

exports.getProdById =  (req, res) => {
    const id = +req.params.id;
    const pdt = product.find(p => p.id === id);
    if (!pdt) {
        return res.status(404).json({ error: 'Product not found' });
    }
    res.json(pdt);
}
exports.updataProd = (req, res) => {
    const id = +req.params.id;
    const productIndex = product.findIndex(p => p.id === id);
    if (productIndex === -1) {
        return res.status(404).json({ error: 'Product not found' });
    }
    product[productIndex] = { ...req.body, id: id };
    res.status(200).json(product[productIndex]);
}
exports.updateWithoutUpdate = (req, res) => {
    const id = +req.params.id;
    const productIndex = product.findIndex(p => p.id === id);
    if (productIndex === -1) {
        return res.status(404).json({ error: 'Product not found' });
    }
    const updatedProduct = { ...product[productIndex], ...req.body };
    product[productIndex] = updatedProduct;
    res.status(200).json(updatedProduct);
}
exports.deleteProd =  (req, res) => {
    const id = +req.params.id;
    const productIndex = product.findIndex(p => p.id === id);
    if (productIndex === -1) {
        return res.status(404).json({ error: 'Product not found' });
    }
    product.splice(productIndex, 1);
    res.status(204).send();
}