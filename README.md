# ecommerce
simple ecommerce app using react, php , mysql, bootstrap

All tools use the latest versions.


- PHP (v8.4) /Laravel (v11.x)
- React (18.3.1 using vite build)
- MySQL (v10.4)
- XAMPP server (v3.3 running both Apache and Mysql servers)
- Bootsrap (v5.3.3)


###########################################################################################################
                                                                                                            

Setup:

Git clone the project

FRONTEND:

> cd fronted

> npm install

> npm run dev

http://localhost/5174



BACKEND:

start xampp server with apache and mysql servers

> cd backend

> php artisan serve (to start the backend)

http://localhost/8000



Database: http://localhost/phpmyadmin




##################################################################################################

JWT token endpoints:
Login page - http://localhost/5174/admin/login (admin@example.com, password, method: POST)

Other API endpoints (also authenticated).
To view all routes: Goto backend and run > php artisan route:list
  
  GET|HEAD        api/categories ................................................................ categories.index › admin\CategoryController@index  
  POST            api/categories ................................................................ categories.store › admin\CategoryController@store  
  GET|HEAD        api/categories/create ....................................................... categories.create › admin\CategoryController@create  
  GET|HEAD        api/categories/{category} ....................................................... categories.show › admin\CategoryController@show  
  PUT|PATCH       api/categories/{category} ................................................... categories.update › admin\CategoryController@update  
  DELETE          api/categories/{category} ................................................. categories.destroy › admin\CategoryController@destroy  
  GET|HEAD        api/categories/{category}/edit .................................................. categories.edit › admin\CategoryController@edit
  GET|HEAD        api/get-featured-products .............................................................. front\ProductController@featuredProducts  
  GET|HEAD        api/products ..................................................................... products.index › admin\ProductController@index  
  POST            api/products ..................................................................... products.store › admin\ProductController@store  
  GET|HEAD        api/products/create ............................................................ products.create › admin\ProductController@create  
  GET|HEAD        api/products/{product} ............................................................. products.show › admin\ProductController@show  
  PUT|PATCH       api/products/{product} ......................................................... products.update › admin\ProductController@update  
  DELETE          api/products/{product} ....................................................... products.destroy › admin\ProductController@destroy  
  GET|HEAD        api/products/{product}/edit ........................................................ products.edit › admin\ProductController@edit



What has been done so far (28.01.2025) :

- Basic frontend components for a Landing page and a product display page
- Cart component (hardcoded products)
- Simple login using UserFactory sanctum and plainTextToken
- API endpoints for CRUD fiúnctionality of the Products
- Dashboard to add Products and frontend to fetch product
- Dockerisation

In-progress: 
- Redis cache
- Optimising and fixing bugs for the Cart to work dynamically by connecting to the DB.


To-Do
- fully functional Cart with Checkout option

Total time spent: 6.5 hrs  
Time estimate to complete the project (with good user experience): 1 week

