'use strict';
const mongoose = require('mongoose');

const clothesSchema = new mongoose.Schema({
    name: { type: String, required: true },
    price: { type: String }
});

const clothesModel = mongoose.model('Clothes', clothesSchema);

module.exports = clothesModel;
