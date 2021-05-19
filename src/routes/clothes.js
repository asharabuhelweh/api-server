'use strict';
const express = require('express');
const DataManger = require('../models/data-collection-class.js');
const clothesModel = require('../models/clothes.js');
const dataManger = new DataManger(clothesModel);
const router = express.Router();



router.get('/', getClothes);
router.get('/:id', getClothesWithId);
router.post('/', createClothes);
router.put('/:id', updateClothes);
router.delete('/:id', deleteClothes);



async function createClothes(req, res) {
  try {
    const clothesObj = req.body;
    const resObj = await dataManger.create(clothesObj);
    res.status(201).json(resObj);
    
  } catch (error) {
    next();
  }
}

async function getClothes(req, res, next) {
  try {
    const resObj = await dataManger.read();
    res.json(resObj);

  } catch (error) {
    next();
  }
}

 async function getClothesWithId(req, res) {
   try {
     const resObj =  await dataManger.read(req.params.id);
     res.json(resObj);
     
   } catch (error) {
     next();
   }
}

async function updateClothes(req, res, next) {
  try {
    const clothesObj = req.body;
    const resObj = await dataManger.update(req.params.id,clothesObj);
    res.json(resObj);

  } catch (error) {

  } next();
}

async function deleteClothes(req, res, next) {
  try {
    const resObj = await dataManger.delete(req.params.id);
    res.json(resObj);

  } catch (error) {
    next(error);
  }
}

module.exports = router;