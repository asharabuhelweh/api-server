'use strict';
const mongoose = require('mongoose');

const foodSchema = new mongoose.Schema({
    name: { type: String, required: true },
    source: { type: String }
});

const foodModel = mongoose.model('Food', foodSchema);

module.exports = foodModel;
