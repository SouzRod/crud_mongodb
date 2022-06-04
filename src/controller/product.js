const adapter = require('../adapter/product');

const get = async (req, res) => {
    const result = await adapter.get();
    return res.json(result);
}

const post = async (req, res) => {
    const { body } = req;
    try {
        const result = await adapter.post(body);
        return res.json(result).status(201);
    } catch (error) {
        return res.json({ message: error.message }).status(500);
    }
}

const del = async (req, res) => {
    const { id } = req.params;
    const result = await adapter.del(id);
    return res.json(result);
}

const put = async (req, res) => {
    const { id } = req.params;
    const { body } = req;
    const result = await adapter.put(id, body);
    return res.json(result);
}

module.exports = {
    get,
    post,
    del,
    put
}