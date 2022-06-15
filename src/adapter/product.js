const Product = require('../model/product');
const uuid = require('uuid');

const get = async () => {
    return Product.find();
}

const post = async (body) => {
    const { name, brand, model, price } = body;

    if (!name) {
        throw new Error('name is required!')
    }
    if (!brand) {
        throw new Error('brand is required!')
    }
    if (!model) {
        throw new Error('model is required!')
    }
    if (!price) {
        throw new Error('price is required!')
    }

    const newProduct = new Product({        
        id: uuid.v4(),
        name,
        brand,
        model,
        price
    })

    await newProduct.save();
    return newProduct;
}

const del = async (id) => {
    await Product.deleteOne({ id: id});
    return { message: 'Product has been successfully deleted!' }
}

const put = async (id, body) => {
    await Product.findOneAndUpdate({ id: id }, body);
    return { message: 'Product has been successfully updated!' };
}

module.exports = {
    get,
    post,
    del,
    put
}
