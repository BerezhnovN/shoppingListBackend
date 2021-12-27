const express = require('express');
const router = express.Router();

const {
  getAllShops,
  createNewShop,
  changeShopInfo,
  deleteShop
} = require('../controllers/shop.controller');

// Tasks routes
router.get('/allShops', getAllShops);
router.post('/createShop', createNewShop);
router.patch('/updateShop', changeShopInfo);
router.delete('/deleteShop', deleteShop);

//User routes

module.exports = router;