# ecommerce
simple ecommerce app using react, php , mysql, bootstrap

All tools use the latest versions.


 PHP/Laravel (v11.x)
 React (18.3.1 using vite build)
 MySQL (v10.4)
 XAMPP server (v3.3 running both Apache and Mysql servers)
 Bootsrap (v5.3.3)


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





What has been done so far (24.01.2025) :

- Basic frontend components for a Landing page and a product display page
- Cart component (hardcoded products)
- Simple login using UserFactory sanctum and plainTextToken
- API endpoints for CRUD fiúnctionality of the Products

In-progress: 
- Dashboard admin page.
- Optimising and fixing bugs for the Cart to work dynamically by connecting to the DB.
- Dockerisation

To-Do:
- redis cache
- fully functional Cart with Checkout option
- JWT authentication for API access to all endpoints

Total time spent: 4.5 hrs  
Time estimate to complete the project (with good user experience): 1 week

