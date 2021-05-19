'use strict';
const express = require('express');
const DataManger = require('../models/data-collection-class.js');
const foodModel = require('../models/food.js');
const dataManger = new DataManger(foodModel);
const router = express.Router();


router.get('/', getFood);
router.get('/:id', getFoodWithId);
router.post('/', createFood);
router.put('/:id', updateFood);
router.delete('/:id', deleteFood);


async function createFood(req, res,next) {
  try {
    const clothesObj = req.body;
    const resObj = await dataManger.create(clothesObj);
    res.status(201).json(resObj);
    
  } catch (error) {
    next();
  }
}

async function getFood(req, res, next) {
  try {
    const resObj = await dataManger.read();
    res.json(resObj);

  } catch (error) {
    next();
  }
}

 async function getFoodWithId(req, res) {
   try {
     const resObj =  await dataManger.read(req.params.id);
     res.json(resObj);
     
   } catch (error) {
     next();
   }
}

async function updateFood(req, res, next) {
  try {
    const clothesObj = req.body;
    const resObj = await dataManger.update(req.params.id,clothesObj);
    res.json(resObj);

  } catch (error) {

  } next();
}

async function deleteFood(req, res, next) {
  try {
    const resObj = await dataManger.delete(req.params.id);
    res.json(resObj);

  } catch (error) {
    next(error);
  }
}

module.exports = router;