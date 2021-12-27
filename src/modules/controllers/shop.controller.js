const shops = [];
const Shop = require('../../db/models/shop/index');

module.exports.getAllShops = async (req, res) => {
    Shop.find().then(result => {
        res.send({ data: result });
    });
};

module.exports.createNewShop = (req, res) => {
    res.set('Access-Control-Allow-Origin', '*');
    const body = req.body;
    if ((body.hasOwnProperty('text') && body.hasOwnProperty('cost'))) {
        const shop = new Shop({
            text: body.text,
            date: body.date,
            cost: body.cost,
        });
        shop.save().then(result => {
            res.status(200).send(result);

        }).catch(err => res.status(500).send(err));
    }
};

module.exports.changeShopInfo = (req, res) => {
    res.set('Access-Control-Allow-Origin', '*');
    const body = req.body;
    if (body.hasOwnProperty('_id') && body.hasOwnProperty('text') && body.hasOwnProperty('cost')) {
        Shop.updateOne({ _id: body._id }, { $set: { text: body.text, cost: body.cost, data: body.data } })
        .then(result => {
            res.status(200).send(result)
        }).catch(err => {
            res.status(500).send(err)
        })
    }
}

module.exports.deleteShop = (req, res) => {
    const id = req.query.id;
    if (id) {
        Shop.deleteOne({ _id: id }).then(result => {
            res.status(200).send(result);
        }).catch(err => {
            res.status(500).send(err);
        })
    };
};