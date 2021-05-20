# 
401 class 04 lab
# LAB - 04
## api-server
### Author: As-har Abuhelweh

* [deployment for main branch ](https://ashar-api-server.herokuapp.com/) .
* [submission PR](https://github.com/asharabuhelweh/api-server/pull/2) .
* [tests report](https://github.com/asharabuhelweh/api-server/actions) 
 
### Setup

#### `.env` requirements

- `PORT` - 5000

#### Running the app

- `npm start`
  
   **installation** 

Clone the repo from gitHub, by run the following command "git clone -repo-".
Run "npm init -y".
Run "npm i".
Create .env file and PORT inside it.
How do I test the app or library?

Just run "npm test"
For Applications:

  **run the app**
Run "npm start" or "node index.js"
How do I set up the app?
Clone the repo from gitHub, by run the following command "git clone -repo-".

Run "npm init -y".

Run "npm i".

Create .env file and PORT inside it.

Then run "npm start"


- Endpoint: `/`
  - Returns message

    ```

    'welcome in server.js :)';

     ```

   
    - Endpoint: `/api/v1/clothes`
  - get the clothes object

  ```

  
    {
        "id": "3ec7d422-263b-4b21-bd17-f19fc7ca8700",
        "data": {
            "name": "dress",
            "price": "88 JD"
        }
    }
  ```
- Endpoint: `/api/v1/clothes/3ec7d422-263b-4b21-bd17-f19fc7ca8700`
  - Get the clothes Objects based on id

  ```
   {
    "id": "3ec7d422-263b-4b21-bd17-f19fc7ca8700",
    "data": {
        "name": "dress",
        "price": "88 JD"
    }
  }

   ``` 
  

- Endpoint: `/api/v1/clothes/3ec7d422-263b-4b21-bd17-f19fc7ca8700`

  - Gets the updated clothes Object
  >  ``` 
         {  
        "id": "3ec7d422-263b-4b21-bd17-f19fc7ca8700",
        "data": {
        "name": "dress",
        "price": "150 JD"
              }
         }
          
       ```      
  
  


  - Endpoint: `/api/v1/clothes/3ec7d422-263b-4b21-bd17-f19fc7ca8700`
  - delete an specific abject based on id and return the other objects in db

  ```

    {
        "id": "d9178b6a-d879-4db8-b8b5-f980c725aa9a",
        "data": {
            "name": "jacket",
            "price": "50 JD"
        }
    }

   ```

    ---------------

    
    - Endpoint: `/api/v1/food`
  - get the food object

  ```

  
    {
        "id": "3ec7d422-263b-4b21-bd17-f19fc7ca8700",
        "data": {
            "name": "pizza",
            "source": "italy"
        }
    }
  ```
- Endpoint: `/api/v1/food/3ec7d422-263b-4b21-bd17-f19fc7ca8700`
  - Get the food Objects based on id

  ```
   {
    "id": "3ec7d422-263b-4b21-bd17-f19fc7ca8700",
    "data": {
        "name": "pizza",
        "source": "italy"
    }
  }

   ``` 
  

- Endpoint: `/api/v1/food/3ec7d422-263b-4b21-bd17-f19fc7ca8700`

  - Gets the updated food Object
  >  ``` 
         {  
        "id": "3ec7d422-263b-4b21-bd17-f19fc7ca8700",
        "data": {
        "name": "burger",
        "source": "UK JD"
              }
         }
          
       ```      
  
  


  - Endpoint: `/api/v1/food/3ec7d422-263b-4b21-bd17-f19fc7ca8700`
  - delete an specific abject based on id and return the other objects in db

  

    

Endpoint: anything else ..

Returns an error 404

Returns an Object

      
       ```
         {
           "status": 404,
        "message": "page not fond :("
         }

        ```
#### Tests

- Unit Tests: `npm run test`
- Lint Tests: `npm run lint`

![uml](asset/uml2.PNG)

 5 am | Today 



