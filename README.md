# Microservices with Nest.JS

Building API Microservices Architecture with Nest.JS

For my opinion, Nest.JS is a very suitable tool for me because I had tried to build the express with MVC structure.
So,the NestJS is the best solutions for me because I like the MVC structure, Dependency Injection, Seperation of Concerns or other Design Patterns.

## Overview

This project including 3 bounded context which is User, Product and Order.
Each microservice has its own database here :

1. User Database - MongoDB
2. Product Database - MongoDB
3. Order Database - MySQL

In the project each service will be the backend server their own.
1. User Service Server - Port 3001
2. Product Service Server - Port 3002
3. Order Service Server - Port 3003
4. Gateway Service Server - Port 3000 (Main)

We will use the gateway to be the main server that we send the requests to and then using the Messaging Queue to communicate between services.

## Services 

* Service 1: User Service
สร้าง Microservice ที่จัดการข้อมูลผู้ใช้ (User).
มี API endpoint สำหรับสร้างผู้ใช้, ดึงข้อมูลผู้ใช้, แก้ไขข้อมูลผู้ใช้, ลบผู้ใช้.


* Service 2: Product Service
สร้าง Microservice ที่จัดการข้อมูลผลิตภัณฑ์ (Product).
มี API endpoint สำหรับสร้างผลิตภัณฑ์, ดึงข้อมูลผลิตภัณฑ์, แก้ไขข้อมูลผลิตภัณฑ์, ลบผลิตภัณฑ์.


* Service 3: Order Service
สร้าง Microservice ที่จัดการข้อมูลการสั่งซื้อ (Order).
มี API endpoint สำหรับสร้างการสั่งซื้อ, ดึงข้อมูลการสั่งซื้อ, แก้ไขข้อมูลการสั่งซื้อ, ลบการสั่งซื้อ.

## Installation 

`git clone https://github.com/Celesca/micro-service.git`

`cd micro-service`

Then the next thing you need to do is the `npm install` in the 4 folders
Includes gateway, user, product and order.

Next start the database via Docker.

goes to user, product and order folder then use `docker-compose up`
to start every server from each service.

Lastly, we need to run the backend server for 4 folders!
goes to all folder and run via terminal with `npm run start`

Now, you are ready to go with Postman and test API endpoints.

## API Endpoints

You can use OpenAPI Specification at localhost:3000/api

P.S. The order database is very different from the MongoDB because It use the auto_increment instead of _id from MongoDB.
