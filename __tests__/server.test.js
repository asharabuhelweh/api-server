'use strict';


require('dotenv').config();
const supergoose = require('@code-fellows/supergoose');
const { app } = require('../src/server.js');
const request = supergoose(app);




describe('server', () => {

    it('should get 404 status', async () => {
        const response = await request.get('/uu');
        expect(response.status).toBe(404);
      });

      it('should have welcome message', async () => {
        //arrange
        // let route = '/';
        //act
        const response = await request.get('/');
        //assert
        expect(response.status).toBe(200);
        expect(response.text).toBe('welcome in server.js :)');
      });
    
});


describe('api server', () => {

it('wrong method', async () => {
    const response = await request.patch ('/api/v1/clothes');
    expect(response.status).toBe (404);
  });

});

  describe('api server', () => {
  
  let id;
    it('should create an food object ', async () => {
        //arrange
        let food = {
            name: 'pizza',
            source: 'italy'
        }
        //act
        const response = await request.post('/api/v1/food').send(food);
        //assert
        expect(response.status).toEqual(201);
        expect(response.body.name).toEqual('pizza');
        expect(response.body.source).toEqual('italy');
        expect(response.body._id.length).toBeGreaterThan(0);

        id = response.body._id;
    });

    it('should update the food object using put', async () => {
        //arrange
        let editFood = {
            name: 'pizza',
            source: 'uk'
        };
        //act
        const response = await request.put(`/api/v1/food/${id}`)
            .send(editFood);
        //asert
        expect(response.status).toEqual(200);
        expect(response.body.source).toEqual('uk');
    });

    

    it('get the food object depends on id' , async () => {
      const res = await request.get(`/api/v1/food/${id}`);
      expect(res.status).toEqual(200);
      expect(res.body[0].name).toEqual('pizza');
      
    });

    it('get all food  objects using GET /food', async () => {
        const response = await request.get('/api/v1/food');
        expect(response.status).toEqual(200);
      });

      
      it('delete a  specific food object using DELETE' , async () => {
          const res = await request.delete(`/api/v1/food/${id}`);
          expect(res.status).toEqual(200);
        });

      

    it('should create a new clothes with post method', async () => {
        //arrange
        let clothes = {
            name: 'dress',
            price: '80'
        }
        //act
        const response = await request.post('/api/v1/clothes').send(clothes);
        //assert
        expect(response.status).toEqual(201);
        expect(response.body.name).toEqual('dress');
        expect(response.body.price).toEqual('80');
        expect(response.body._id.length).toBeGreaterThan(0);

        id = response.body._id;
    });

    it('should update a clothes object ', async () => {
        //arrange
        let editClothes = {
            name: 'dress',
            price: '65'
        };
        //act
        const response = await request.put(`/api/v1/clothes/${id}`)
            .send(editClothes);
        //assert
        expect(response.status).toEqual(200);
        expect(response.body.price).toEqual('65');
    });

    it('get a specific clothes object', async () => {
      const res = await request.get(`/api/v1/clothes/${id}`);
      expect(res.status).toEqual(200);
      expect(res.body[0].name).toEqual('dress');
      
    });
    it('get all clothes objects using Get', async () => {
        const response = await request.get('/api/v1/clothes');
        expect(response.status).toEqual(200);
      });



    

      it('delete a clothes object depends on id ', async () => {
        const res = await request.delete(`/api/v1/clothes/${id}`);
        expect(res.status).toEqual(200);
      });


});

