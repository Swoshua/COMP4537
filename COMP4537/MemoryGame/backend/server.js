const express = require('express');
const mysql = require('mysql');

const app = express();

var con = mysql.createConnection({
    host: "jos-test.c4ztbtstxmqe.us-east-1.rds.amazonaws.com",
    user: "admin",
    password: "Jerome2020",
    database: "AmirThing"
});

app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
  res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
  res.setHeader('Access-Control-Allow-Credentials', true);
  next()
});

var PORT = process.env.PORT || 8000;