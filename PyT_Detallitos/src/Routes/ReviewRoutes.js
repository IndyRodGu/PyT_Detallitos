// src/routes/itemRoutes.js
const express = require('express');
const router = express.Router();
const itemController = require('../Controllers/ReviewController');

router.post('/items', itemController.createItem);
router.get('/items', itemController.getAllItems);
router.get('/detalle/items', itemController.getDetails);
 router.get('/detalle/items/:id', itemController.getItemDetails);
router.get('/items/:id', itemController.getItem);
router.put('/items/:id', itemController.updateItem);
router.delete('/items/:id', itemController.deleteItem);

module.exports = router;